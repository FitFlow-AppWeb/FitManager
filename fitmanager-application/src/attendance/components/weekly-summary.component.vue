<script>
import { SummaryApiService } from "../services/summary-api.service";
export default {
  name: "WeeklySummaryComponent",
  data() {
    return {
      summary: null,
      isLoading: true,
      error: null
    };
  },
  mounted() {
    this.fetchSummary();
  },
  methods: {
    fetchSummary() {
      const summaryService = new SummaryApiService();
      summaryService.getSummary()
        .then((summary) => {
          this.summary = summary;
          this.isLoading = false;
        })
        .catch((error) => {
          this.error = error;
          this.isLoading = false;
        });
    }
  }
}
</script>

<template>
  <div class="weekly-summary-container">
    <div class="weekly-summary-header">
      <h4 class="weekly-summary-title">Weekly Summary</h4>
    </div>
    <div v-if="isLoading" class="weekly-summary-content">
      Loading...
    </div>
    <div v-else-if="error" class="weekly-summary-content">
      Error: {{ error }}
    </div>
    <div v-else-if="summary?.weeklyOverview" class="weekly-summary-content">
      <pv-divider class="weekly-summary-divider" />
      <p>Asistencia Lunes: {{ summary.weeklyOverview.asistencias_lunes }}</p>
      <p>Asistencia Martes: {{ summary.weeklyOverview.asistencias_martes }}</p>
      <p>Asistencia Miercoles: {{ summary.weeklyOverview.asistencias_miercoles }}</p>
      <p>Asistencia Jueves: {{ summary.weeklyOverview.asistencias_jueves }}</p>
      <p>Asistencia Viernes: {{ summary.weeklyOverview.asistencias_viernes }}</p>
      <p>Asistencia Sabado: {{ summary.weeklyOverview.asistencias_sabado }}</p>
      <p>Asistencia Domingo: {{ summary.weeklyOverview.asistencias_domingo }}</p>
    </div>
    <div v-else class="weekly-summary-content">
      No data available
    </div>
  </div>
</template>

<style scoped>
.weekly-summary-container {
  display: flex;
  flex-direction: column;
  width: 250px;
  height: auto;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.weekly-summary-divider {
  margin: 0;
}

.weekly-summary-header {
  padding: 10px 25px;
  margin: 0;
  color: #5C5C5C;
}

.weekly-summary-title {
  margin: 0;
}

.weekly-summary-content {
  padding: 0 25px;
  font-size: 0.8em;
}
</style>