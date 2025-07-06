<script>
/**
 * Today Attendance Component
 *
 * This component is responsible for rendering the attendance data of the current day.
 * It fetches the attendance data from an API service and displays it in a bar chart.
 *
 * The chart displays attendance data by hour, showing the number of attendees at each hour of the day.
 * It uses the `pv-chart` component to render the bar chart.
 *
 * Author: Tomio Nakamurakare (modificado por tu asistente AI)
 */

import {TodayAttendanceApiService} from '../services/today-attendance-api.service.js';

export default {
  name: "TodayAttendanceComponent",
  data() {
    return {
      chartData: null,
      chartOptions: null
    };
  },
  methods: {
    fetchTodayAttendance() {
      const service = new TodayAttendanceApiService();
      service.getTodayAttendance()
          .then(attendance => {
            this.chartData = {
              labels: attendance.map(item => item.hour),
              datasets: [
                {
                  label: 'Occupancy',
                  data: attendance.map(item => item.value),
                  backgroundColor: '#D9D9D9',
                  borderColor: '#D9D9D9',
                  fill: false,
                  tension: 0.3
                }
              ]
            };
            this.chartOptions = {
              responsive: true,
              plugins: {
                legend: {
                  display:false
                },
                title: {
                  display: true,
                  text: this.$t('dashboard.chart-title')
                }
              },
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {stepSize: 1}
                }
              }
            };
          })
          .catch(error => {
            console.error('Error loading today attendance:', error);
            this.chartData = null;
            this.chartOptions = null;
          });
    }
  },
  mounted() {
    this.fetchTodayAttendance();
  }
};
</script>

<template>
  <!-- Container for the attendance chart -->
  <div class="today-attendance-chart" aria-labelledby="attendance-chart-title">
    <pv-chart
        v-if="chartData && chartOptions"
        type="bar"
        :data="chartData"
        :options="chartOptions"
        aria-describedby="attendance-chart-description"
    />
    <p id="attendance-chart-description" v-else>
      {{ $t('dashboard.loading') }}
    </p>
  </div>
</template>


<style scoped>
.today-attendance-chart {
  min-height: 50%;
  margin: 2rem 1rem;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
}
</style>
