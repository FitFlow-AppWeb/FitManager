<!--
  Description: This component, WeeklySummaryComponent, fetches and displays weekly attendance data in a bar chart format. It retrieves the data using the SummaryApiService and displays attendance statistics for each day of the week. The chart dynamically updates based on the fetched data, and error or loading states are handled accordingly. Additionally, the component calculates and displays the total weekly attendance. The chart is configured with custom options for better styling and layout.
  Author: Renzo Luque
-->

<script>
import { SummaryApiService } from "../services/summary-api.service";
export default {
  name: "WeeklySummaryComponent",
  data() {
    return {
      summary: null,
      isLoading: true,
      error: null,
      chartData: null,
      chartOptions: null
    };
  },
  computed: {
    totalAttendance() {
      if (!this.summary?.weeklyOverview) return 0;
      const overview = this.summary.weeklyOverview;
      return (
          (overview.asistencias_lunes || 0) +
          (overview.asistencias_martes || 0) +
          (overview.asistencias_miercoles || 0) +
          (overview.asistencias_jueves || 0) +
          (overview.asistencias_viernes || 0) +
          (overview.asistencias_sabado || 0) +
          (overview.asistencias_domingo || 0)
      );
    }
  },
  mounted() {
    this.fetchSummary();
    this.setChartOptions();
  },
  methods: {
    fetchSummary() {
      this.isLoading = true;
      const summaryService = new SummaryApiService();
      summaryService.getSummary()
          .then((summary) => {
            this.summary = summary;
            this.formatChartData();
            this.isLoading = false;
          })
          .catch((error) => {
            this.error = error;
            this.isLoading = false;
            console.error("Error fetching summary:", error);
          });
    },
    formatChartData() {
      if (!this.summary || !this.summary.weeklyOverview) {
        this.chartData = null;
        return;
      }
      const overview = this.summary.weeklyOverview;
      const labels = [
        "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"
      ];
      const dataPoints = [
        overview.asistencias_lunes || 0,
        overview.asistencias_martes || 0,
        overview.asistencias_miercoles || 0,
        overview.asistencias_jueves || 0,
        overview.asistencias_viernes || 0,
        overview.asistencias_sabado || 0,
        overview.asistencias_domingo || 0
      ];

      const backgroundColores = [
        "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40", "#FF6384"
      ]

      this.chartData = {
        labels: labels,
        datasets: [
          {
            label: "Asistencias",
            data: dataPoints,
            backgroundColor: backgroundColores,
            borderColor: backgroundColores,
            borderWidth: 1
          }
        ]
      };
    },
    setChartOptions() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue("--text-color") || "#495057";
      const textSecondaryColor = documentStyle.getPropertyValue("--text-secondary-color") || "#6c757d";
      const surfaceBorder = documentStyle.getPropertyValue("--surface-border") || "#dee2e6";

      this.chartOptions = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
          legend: {
            display: false,
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textSecondaryColor,
              font: {
                weight: 500,
              }
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            }
          },
          y: {
            ticks: {
              color: textSecondaryColor,
              autoSkip: false,
              font: {
                size: 12,
              }
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            }
          }
        }
      };
    }
  }
}
</script>

<template>
  <div class="weekly-summary-container" aria-live="polite">
    <div class="weekly-summary-header">
      <h4 class="weekly-summary-title" aria-label="Weekly attendance summary">{{ $t('attendance.weekly-summary') }}</h4>
    </div>
    <pv-divider class="weekly-summary-divider" />
    <div class="weekly-summary-content-wrapper">
      <div v-if="isLoading" class="weekly-summary-message" aria-live="assertive">
        Loading overview...
      </div>
      <div v-else-if="error" class="weekly-summary-message" aria-live="assertive">
        Error: {{ error.message || error }}
      </div>
      <div v-else-if="chartData" class="weekly-summary-chart-container" aria-label="Attendance chart">
        <pv-chart type="bar" :data="chartData" :options="chartOptions" />
      </div>
      <div v-else class="weekly-summary-message">
        No data available.
      </div>
      <p class="total-attendance" aria-label="Total weekly attendance">{{ $t('attendance.total-weekly-attendance') }}: {{ totalAttendance }}</p>
    </div>
  </div>
</template>


<style scoped>
.weekly-summary-container {
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 290px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.weekly-summary-header {
  padding: 10px 25px;
  color: #5C5C5C;
  flex-shrink: 0;
}

.weekly-summary-title {
  margin: 0;
}

.weekly-summary-divider {
  margin: 0;
  flex-shrink: 0;
}

.weekly-summary-content-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15px 10px 15px;
  min-height: 0;
  overflow: hidden;
}

.weekly-summary-chart-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.p-chart) {
  width: 100%;
  max-width: 100%;
  height: 200px;
}

.weekly-summary-message {
  font-size: 0.9em;
  text-align: center;
  width: 100%;
  padding: 10px 0;
}

.total-attendance {
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: 500;
  color: #5C5C5C;
}
</style>