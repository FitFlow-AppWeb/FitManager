<script>
import { AttendanceApiService } from "../services/attendance-api.service";

export default {
  name: "WeeklySummaryComponent",
  data() {
    return {
      rawAttendanceRecords: [],
      isLoading: true,
      error: null,
      chartData: null,
      chartOptions: null,
      daysConfig: [
        {name: "Lunes", dayIndex: 1},
        {name: "Martes", dayIndex: 2},
        {name: "Miercoles", dayIndex: 3},
        {name: "Jueves", dayIndex: 4},
        {name: "Viernes", dayIndex: 5},
        {name: "Sabado", dayIndex: 6},
        {name: "Domingo", dayIndex: 0}
      ],
      attendanceApiService: null,
    };
  },
  computed: {
    weeklyOverview() {
      if (!this.rawAttendanceRecords || this.rawAttendanceRecords.length === 0) {
        return {};
      }

      const dailyCounts = {};
      this.daysConfig.forEach(day => {
        dailyCounts[day.name] = 0;
      });

      const today = new Date();
      const currentDayOfWeek = today.getDay();
      const diffToMonday = today.getDate() - currentDayOfWeek + (currentDayOfWeek === 0 ? -6 : 1);
      const startOfWeek = new Date(today.setDate(diffToMonday));
      startOfWeek.setHours(0, 0, 0, 0);

      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      endOfWeek.setHours(23, 59, 59, 999);

      this.rawAttendanceRecords.forEach(record => {
        const entryDate = new Date(record.entryTime);

        if (entryDate >= startOfWeek && entryDate <= endOfWeek) {
          const dayOfWeek = entryDate.getDay();

          const dayConfig = this.daysConfig.find(d => d.dayIndex === dayOfWeek);
          if (dayConfig) {
            dailyCounts[dayConfig.name]++;
          }
        }
      });

      return {
        asistencias_lunes: dailyCounts["Lunes"] || 0,
        asistencias_martes: dailyCounts["Martes"] || 0,
        asistencias_miercoles: dailyCounts["Miercoles"] || 0,
        asistencias_jueves: dailyCounts["Jueves"] || 0,
        asistencias_viernes: dailyCounts["Viernes"] || 0,
        asistencias_sabado: dailyCounts["Sabado"] || 0,
        asistencias_domingo: dailyCounts["Domingo"] || 0,
      };
    },

    totalAttendance() {
      const overview = this.weeklyOverview;
      if (!overview) return 0;
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
  created() {
    this.attendanceApiService = new AttendanceApiService();
  },
  mounted() {
    this.fetchAttendanceData();
    this.setChartOptions();
  },
  methods: {
    async fetchAttendanceData() {
      this.isLoading = true;
      this.error = null;
      try {
        const data = await this.attendanceApiService.getAllAttendanceRecords();
        this.rawAttendanceRecords = data;
        this.formatChartData();
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching attendance data for summary:", error);
        this.error = error;
        this.rawAttendanceRecords = [];
        this.isLoading = false;
      }
    },
    formatChartData() {
      const overview = this.weeklyOverview;
      if (Object.keys(overview).length === 0) {
        this.chartData = null;
        return;
      }

      const labels = this.daysConfig.map(day => day.name);
      const dataPoints = [
        overview.asistencias_lunes,
        overview.asistencias_martes,
        overview.asistencias_miercoles,
        overview.asistencias_jueves,
        overview.asistencias_viernes,
        overview.asistencias_sabado,
        overview.asistencias_domingo
      ];

      const backgroundColors = [
        "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40", "#FF6384"
      ];

      this.chartData = {
        labels: labels,
        datasets: [
          {
            label: this.$t('attendance.attendances'),
            data: dataPoints,
            backgroundColor: backgroundColors,
            borderColor: backgroundColors,
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
              },
              beginAtZero: true,
              precision: 0
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
    <pv-divider class="weekly-summary-divider"/>
    <div class="weekly-summary-content-wrapper">
      <div v-if="isLoading" class="weekly-summary-message" aria-live="assertive">
        {{ $t('attendance.loading-overview') }}
      </div>
      <div v-else-if="error" class="weekly-summary-message" aria-live="assertive">
        {{ $t('general.error') }}: {{ error.message || error }}
      </div>
      <div v-else-if="chartData && totalAttendance > 0" class="weekly-summary-chart-container"
           aria-label="Attendance chart">
        <pv-chart type="bar" :data="chartData" :options="chartOptions"/>
      </div>
      <div v-else class="weekly-summary-message">
        {{ $t('attendance.no-data-available') }}
      </div>
      <p class="total-attendance" aria-label="Total weekly attendance">
        {{ $t('attendance.total-weekly-attendance') }}: {{ totalAttendance }}
      </p>
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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