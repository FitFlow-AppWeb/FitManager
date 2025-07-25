<script>
import { AttendanceApiService } from "../services/attendance-api.service";

export default {
  name: 'HeatmapComponent',
  data() {
    return {
      rawAttendanceRecords: [],
      isLoading: true,
      hoursOfDay: [
        "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00",
        "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
      ],
      daysConfig: [
        {header: this.$t('attendance.monday'), keyForProcessing: 1, keyForColumn: 'Lunes'},
        {header: this.$t('attendance.tuesday'), keyForProcessing: 2, keyForColumn: 'Martes'},
        {header: this.$t('attendance.wednesday'), keyForProcessing: 3, keyForColumn: 'MiercolesValue'},
        {header: this.$t('attendance.thursday'), keyForProcessing: 4, keyForColumn: 'Jueves'},
        {header: this.$t('attendance.friday'), keyForProcessing: 5, keyForColumn: 'Viernes'},
        {header: this.$t('attendance.saturday'), keyForProcessing: 6, keyForColumn: 'Sabado'},
        {header: this.$t('attendance.sunday'), keyForProcessing: 0, keyForColumn: 'Domingo'}
      ],
      attendanceApiService: null,
      maxAttendanceValue: 0,
    };
  },

  computed: {
    processedHeatmapData() {
      if (!this.rawAttendanceRecords || this.rawAttendanceRecords.length === 0) {
        console.log("2. processedHeatmapData: No raw records.");
        this.maxAttendanceValue = 0;
        return {};
      }

      const heatmap = {};
      let currentMax = 0;

      // Initialize heatmap structure
      this.daysConfig.forEach(day => {
        heatmap[day.keyForColumn] = {};
        this.hoursOfDay.forEach(hour => {
          heatmap[day.keyForColumn][hour] = 0;
        });
      });

      const today = new Date();
      const currentDayOfWeek = today.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday

      // Calculate the start of the current week (Monday)
      const startOfCurrentWeek = new Date(today);
      startOfCurrentWeek.setDate(today.getDate() - (currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1));
      startOfCurrentWeek.setHours(0, 0, 0, 0);

      // Calculate the start of the previous week (Monday)
      const startOfPreviousWeek = new Date(startOfCurrentWeek);
      startOfPreviousWeek.setDate(startOfCurrentWeek.getDate() - 7);
      startOfPreviousWeek.setHours(0, 0, 0, 0);


      this.rawAttendanceRecords.forEach(record => {
        // Use the already normalized and ADJUSTED 'entryTimeDate' Date object
        const originalEntryDate = record.entryTimeDate;

        // Skip if date is invalid after parsing
        if (!originalEntryDate || isNaN(originalEntryDate.getTime())) {
          console.warn("Skipping record due to invalid entryTime:", record.entryTime);
          return;
        }

        // Get the day of the week based on the *ADJUSTED* original date
        const recordDayOfWeek = originalEntryDate.getDay();

        // Get the hour from the *ADJUSTED* date for display on the heatmap
        const hour = String(originalEntryDate.getHours()).padStart(2, '0') + ":00"; // Use originalEntryDate directly for hours

        const dayConfig = this.daysConfig.find(d => d.keyForProcessing === recordDayOfWeek);

        // --- CONSOLE.LOG PARA DEPURACIÓN AQUÍ ---
        // Este log se ejecutará para CADA registro, mostrando la fecha y hora con el ajuste ya aplicado,
        // y el día de la semana calculado.
        console.log(
            `Record processed:`,
            `Original String (from backend): ${record.entryTime}`,
            `Adjusted Date Object (used for calculations): ${originalEntryDate.toISOString()}`,
            `Day of Week (0=Sun, 1=Mon...): ${recordDayOfWeek}`,
            `Hour: ${hour}`,
            `Belongs to column: ${dayConfig ? dayConfig.keyForColumn : 'N/A'}`
        );
        // --- FIN CONSOLE.LOG ---

        if (dayConfig && this.hoursOfDay.includes(hour)) {
          let shouldIncludeRecord = false;

          // Normalize original record date to start of day for comparison
          // This uses the *already adjusted* originalEntryDate
          const normalizedOriginalEntryDate = new Date(originalEntryDate);
          normalizedOriginalEntryDate.setHours(0, 0, 0, 0);


          // Scenario 1: Record is from the current week AND on or before today
          if (normalizedOriginalEntryDate >= startOfCurrentWeek && normalizedOriginalEntryDate <= today) {
            shouldIncludeRecord = true;
          }
          // Scenario 2: Record is from the previous week and is for a day AFTER the current day of the week
          else if (recordDayOfWeek !== currentDayOfWeek) { // Only check if not today's day
            // Check if the record's date falls within the previous week
            const endOfPreviousWeek = new Date(startOfPreviousWeek);
            endOfPreviousWeek.setDate(startOfPreviousWeek.getDate() + 6);
            endOfPreviousWeek.setHours(23, 59, 59, 999);

            if (normalizedOriginalEntryDate >= startOfPreviousWeek && normalizedOriginalEntryDate <= endOfPreviousWeek) {
              // Ensure this previous week's record is for a "future" day relative to today
              if (recordDayOfWeek > currentDayOfWeek || (currentDayOfWeek === 0 && recordDayOfWeek !== 0)) {
                shouldIncludeRecord = true;
              }
              if (currentDayOfWeek === 1 && recordDayOfWeek === 0) {
                shouldIncludeRecord = true;
              }
            }
          }

          if (shouldIncludeRecord) {
            heatmap[dayConfig.keyForColumn][hour]++;
            if (heatmap[dayConfig.keyForColumn][hour] > currentMax) {
              currentMax = heatmap[dayConfig.keyForColumn][hour];
            }
          }
        }
      });
      this.maxAttendanceValue = currentMax;
      console.log("3. Processed heatmap data:", heatmap);
      console.log("Max attendance value for the week:", this.maxAttendanceValue);
      return heatmap;
    },

    formattedHeatmapData() {
      const processedData = this.processedHeatmapData;
      if (Object.keys(processedData).length === 0) {
        return [];
      }

      return this.hoursOfDay.map(hour => {
        const row = {hour: hour};
        this.daysConfig.forEach(day => {
          row[day.keyForColumn] = processedData[day.keyForColumn] ? processedData[day.keyForColumn][hour] : 0;
        });
        return row;
      });
    },

    dynamicColorScale() {
      const max = this.maxAttendanceValue;
      if (max === 0) {
        return () => '#FFFFFF';
      }

      const colors = [
        '#44CF44',
        '#7EE669',
        '#C1FF92',
        '#FFCF82',
        '#FFA382',
        '#FF7B42',
        '#FF6B6B',
        '#FF3131',
        '#E90A0A',
      ];

      const numberOfColors = colors.length;

      return (value) => {
        if (value === 0) {
          return '#FFFFFF';
        }
        const index = Math.floor((value / max) * (numberOfColors - 1));
        return colors[index] || colors[colors.length - 1];
      };
    }
  },

  created() {
    this.attendanceApiService = new AttendanceApiService();
  },

  methods: {
    /**
     * Parses a date string (can include time) into a Date object,
     * and applies a -5 hour adjustment if parsing is successful.
     * This method handles DD/MM/YYYY [HH:MM] and standard ISO formats.
     * @param {string} dateString The date string to parse.
     * @returns {Date|null} A Date object (adjusted), or null.
     */
    parseAndNormalizeEntryTime(dateString) {
      if (!dateString) {
        return null;
      }

      let date = new Date(dateString);

      // If it's an invalid date, try to parse DD/MM/YYYY [HH:MM]
      if (isNaN(date.getTime())) {
        const parts = dateString.split(' ')[0].split('/'); // Get date part and split by '/'
        const timePart = dateString.split(' ')[1] || '00:00:00'; // Get time part or default to midnight

        if (parts.length === 3) {
          const day = String(parts[0]).padStart(2, '0');
          const month = String(parts[1]).padStart(2, '0');
          const year = parts[2];

          let time = timePart;
          if (time.length === 5) { // HH:MM
            time += ':00';
          }

          const isoString = `${year}-${month}-${day}T${time}`;
          date = new Date(isoString);
        }
      }

      // --- APPLY THE -5 HOUR ADJUSTMENT HERE, AFTER INITIAL DATE OBJECT CREATION ---
      // This ensures that the Date object reflects the intended local time
      // before any day-of-week or date range calculations are made.
      if (!isNaN(date.getTime())) {
        date.setHours(date.getHours() - 5);
      }
      // --- END ADJUSTMENT ---

      return isNaN(date.getTime()) ? null : date;
    },

    async fetchHeatmapData() {
      this.isLoading = true;
      try {
        const data = await this.attendanceApiService.getAllAttendanceRecords();
        // Normalize entryTime for each record using the updated parseAndNormalizeEntryTime
        this.rawAttendanceRecords = data.map(record => {
          const normalizedDate = this.parseAndNormalizeEntryTime(record.entryTime);
          if (!normalizedDate) {
            console.warn("Could not normalize entryTime for record:", record);
          }
          return {
            ...record,
            entryTimeDate: normalizedDate // Store the parsed and ADJUSTED Date object
          };
        }).filter(record => record.entryTimeDate !== null); // Filter out records with invalid dates

        this.isLoading = false;
        console.log("1. Raw attendance records (normalized):", this.rawAttendanceRecords);
      } catch (error) {
        console.error("Error fetching attendance data for heatmap:", error);
        this.rawAttendanceRecords = [];
        this.isLoading = false;
      }
    },

    getCellColor(value) {
      if (value === undefined || value === null || value === 0) {
        return '#FFFFFF';
      }
      return this.dynamicColorScale(value);
    }
  },

  mounted() {
    this.fetchHeatmapData();
  }
}
</script>

<template>
  <div class="heatmap-page-container">
    <h2 class="heatmap-title" aria-live="polite">{{ $t('attendance.weekly-heatmap') }}</h2>

    <div v-if="isLoading" class="loading-message" aria-live="assertive">
      {{ $t('attendance.loading') }}
    </div>

    <div v-if="!isLoading && (!formattedHeatmapData || formattedHeatmapData.length === 0)" class="no-data-message"
         aria-live="assertive">
      {{ $t('attendance.no-data') }}
    </div>

    <pv-datatable v-if="!isLoading && formattedHeatmapData && formattedHeatmapData.length > 0"
                  :value="formattedHeatmapData"
                  class="p-datatable-sm heatmap-table p-datatable-gridlines"
                  responsiveLayout="scroll"
                  role="grid"
                  aria-labelledby="heatmap-table">

      <pv-column field="hour" :header="$t('attendance.hour-day')" :style="{width: '70px'}" class="hour-column-header"
                 aria-sort="none">
        <template #body="slotProps">
          <div class="hour-cell-content" role="gridcell" aria-label="Hour: {{ slotProps.data.hour }}">
            {{ slotProps.data.hour }}
          </div>
        </template>
      </pv-column>

      <pv-column v-for="day in daysConfig"
                 :key="day.keyForColumn"
                 :field="day.keyForColumn"
                 :header="day.header"
                 aria-label="Attendance for {{ day.header }}">
        <template #body="slotProps">
          <div class="heatmap-cell" :style="{ backgroundColor: getCellColor(slotProps.data[day.keyForColumn]) }"
               role="gridcell" aria-label="Attendance value: {{ slotProps.data[day.keyForColumn] }}">
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  width: 80px;
  height: 31px;
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
  transform: scale(1.02);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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