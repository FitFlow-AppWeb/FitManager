<script>
import { WeekApiService } from "../services/week-api.service";
export default {
  name: 'HeatmapComponent',
  data() {
    return {
      weekly_heatmap_entity: null,
      isLoading: true,
      hoursOfDay: ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
      daysConfig: [
        { header: 'Lunes',     keyInEntity: 'lunes',     keyForColumn: 'Lunes' },
        { header: 'Martes',    keyInEntity: 'martes',    keyForColumn: 'Martes' },
        { header: 'Miércoles', keyInEntity: 'miercoles', keyForColumn: 'MiercolesValue' },
        { header: 'Jueves',    keyInEntity: 'jueves',    keyForColumn: 'Jueves' },
        { header: 'Viernes',   keyInEntity: 'viernes',   keyForColumn: 'Viernes' },
        { header: 'Sábado',    keyInEntity: 'sabado',    keyForColumn: 'Sabado' },
        { header: 'Domingo',   keyInEntity: 'domingo',   keyForColumn: 'Domingo' }
      ]
    };
  },
  computed: {
    formattedHeatmapData() {
      if (!this.weekly_heatmap_entity || Object.keys(this.weekly_heatmap_entity).length === 0) {
        return [];
    }

    return this.hoursOfDay.map(hour => {
        const row = { hour: hour };
        this.daysConfig.forEach(day => {
          const dayData = this.weekly_heatmap_entity[day.keyInEntity];
          row[day.keyForColumn] = (dayData && dayData[hour] !== undefined) ? dayData[hour] : 0;
        });
        return row;
      });
    }
  },
  methods: {
    fetchWeeklyHeatmap() {
      this.isLoading = true;
      const service = new WeekApiService();
      service.getWeekAttendance()
        .then(data => {
          this.weekly_heatmap_entity = data;
          this.isLoading = false;
        })
        .catch(error => {
          console.error("Error fetching weekly heatmap data in component:", error);
          this.weekly_heatmap_entity = null; // o una entidad vacía
          this.isLoading = false;
        });
    },
    getCellColor(value) {
      if (value === undefined || value === null) {
        return '#FFFFFF'; 
      }
      if (value === 0) {
        return '#FFFFFF'; 
      }

      if (value >= 65) return '#d73027'; 
      if (value >= 60) return '#ef524f'; 
      if (value >= 50) return '#f8694d'; 
      if (value >= 40) return '#fca951'; 
      if (value >= 30) return '#FDD870'; 
      if (value >= 20) return '#E6F0A3'; 
      if (value >= 15) return '#B2D99A'; 
      if (value > 0)  return '#84C07C';  
      return '#FFFFFF'; 
    }
  },
  mounted() {
    this.fetchWeeklyHeatmap();
  }
}
</script>

<template>
  <div class="heatmap-page-container">
    <h2 class="heatmap-title">Weekly Heatmap</h2>
    
    <div v-if="isLoading" class="loading-message">
      Cargando datos del mapa de calor...
    </div>
    
    <div v-if="!isLoading && (!formattedHeatmapData || formattedHeatmapData.length === 0)" class="no-data-message">
      No hay datos disponibles para mostrar el mapa de calor.
    </div>

    <pv-datatable v-if="!isLoading && formattedHeatmapData && formattedHeatmapData.length > 0"
        :value="formattedHeatmapData"
        class="p-datatable-sm heatmap-table p-datatable-gridlines" responsiveLayout="scroll"
        >

        <pv-column field="hour" header="Hora/Día" :style="{width: '70px'}" class="hour-column-header">
           <template #body="slotProps">
            <div class="hour-cell-content">
              {{ slotProps.data.hour }}
            </div>
          </template>
        </pv-column>

        <pv-column   v-for="day in daysConfig" 
            :key="day.keyForColumn" 
            :field="day.keyForColumn" 
            :header="day.header">
            <template #body="slotProps">
                <div class="heatmap-cell" :style="{ backgroundColor: getCellColor(slotProps.data[day.keyForColumn]) }">
                    <span v-if="slotProps.data[day.keyForColumn] > 0">
                        {{ slotProps.data[day.keyForColumn] }}
                    </span>
                </div>
            </template>
        </pv-column>
    </pv-datatable>
  </div>
</template>

<style scoped>
.heatmap-page-container {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
}

.heatmap-title {
  color: #5C5C5C;
  font-size: 1em;
  margin-bottom: 20px;
  margin-top: 0 !important;
}

.loading-message, .no-data-message {
  text-align: center;
  padding: 20px;
  font-size: 1.1em;
  color: #555;
}

.heatmap-table {
  width: auto;
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 8px;
  overflow: hidden;
}

.heatmap-cell {
  width: 70px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: #474747;
  text-align: center;
  font-size: 0.8em;
  transition: transform 0.2s ease-out;
}

.heatmap-cell:hover {
  transform: scale(1.02 );
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  z-index: 10;
  cursor: pointer;
  position: relative;
}

.hour-cell-content {
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.7em;
  background-color: #f8f9fa;
  color: #343a40;
}

:deep(.p-datatable.p-datatable-sm.heatmap-table.p-datatable-gridlines .p-datatable-tbody > tr > td) {
  padding: 0 !important;
  border: 1px solid #dee2e6;
  vertical-align: middle;
}

:deep(.p-datatable.p-datatable-sm.heatmap-table.p-datatable-gridlines .p-datatable-tbody > tr > td:first-child) {
  background-color: transparent;
  vertical-align: middle;
}

:deep(.p-datatable.p-datatable-sm.heatmap-table.p-datatable-gridlines .p-datatable-thead > tr > th) {
  background-color: #f1f3f5;
  color: #343a40;
  padding: 0.4rem 0.4rem;
  text-align: center;
  font-weight: 600;
  border: 1px solid #dee2e6;
  font-size: 0.7em;
}

.hour-column-header :deep(.p-column-header-content) {
  justify-content: center !important;
}
</style>
