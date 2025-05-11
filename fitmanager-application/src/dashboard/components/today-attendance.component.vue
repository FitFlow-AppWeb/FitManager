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
 * Author: Tomio Nakamurakare
 */

// Import the service that fetches the attendance data for today
import {TodayAttendanceApiService} from '../services/today-attendance-api.service.js';

export default {
  name: "TodayAttendanceComponent", // Component name
  data() {
    return {
      chartData: null, // Will store the chart data (attendance values and labels)
      chartOptions: null // Will store the options for the chart (like title, scales, etc.)
    };
  },
  methods: {
    // Fetch today's attendance data from the API and format it for the chart
    fetchTodayAttendance() {
      const service = new TodayAttendanceApiService(); // Create an instance of the attendance service
      service.getTodayAttendance()
          .then(attendance => {
            // Map the API response into a format that can be used by the chart
            this.chartData = {
              labels: attendance.map(item => item.hour), // Set the hours as the labels on the x-axis
              datasets: [
                {
                  label: 'Attendance',
                  data: attendance.map(item => item.value), // Attendance values for the chart
                  backgroundColor: '#D9D9D9',
                  borderColor: '#D9D9D9',
                  fill: false,
                  tension: 0.3
                }
              ]
            };
            // Chart options (such as title, legend, and axis configuration)
            this.chartOptions = {
              responsive: true,
              plugins: {
                legend: {
                  display:false
                },
                title: {
                  display: true,
                  text: 'Today\'s Attendance by Hour'
                }
              },
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {stepSize: 10}
                }
              }
            };
          })
          .catch(error => {
            console.error('Error loading today attendance:', error);
          });
    }
  },
  mounted() {
    this.fetchTodayAttendance(); // Fetch the attendance data as soon as the component is mounted
  }
};
</script>

<template>
  <!-- Container for the attendance chart -->
  <div class="today-attendance-chart">
    <!-- Render the chart if data is available, else show loading message -->
    <pv-chart
        v-if="chartData && chartOptions"
        type="bar"
        :data="chartData"
        :options="chartOptions"
    />
    <p v-else>Loading attendance data...</p>
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
