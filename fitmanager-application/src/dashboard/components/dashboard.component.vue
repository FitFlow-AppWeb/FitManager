<script>
/**
 * Dashboard Component
 *
 * This is the main controller script for the Dashboard view.
 * It retrieves and displays key data summaries and integrates multiple
 * visual components to provide a comprehensive overview of the current day.
 *
 * The dashboard includes:
 * - A top list of key performance statistics
 * - A bottom list of additional metrics
 * - A chart visualizing today's attendance
 * - A table showing the schedule of today's classes
 *
 * Author: Tomio Nakamurakare
 */

// Import the service that fetches general dashboard statistics
import { DataApiService } from '../services/data-api.service.js';

// Import visual components used in the dashboard
import DataTopListComponent from './data-top-list.component.vue';
import DataBottomListComponent from './data-bottom-list.component.vue';
import TodayAttendanceComponent from "./today-attendance.component.vue";
import TodayClassesComponent from "./today-classes.component.vue";

export default {
  // Name of the component
  name: "Dashboard.component",

  // Declare the child components used in the template
  components: {
    TodayAttendanceComponent,
    DataTopListComponent,
    DataBottomListComponent,
    TodayClassesComponent
  },

  data() {
    return {
      statistics: [], // Will store the fetched dashboard statistics
    };
  },

  methods: {
    // Fetch statistics from the API service and handle errors
    fetchStatistics() {
      const service = new DataApiService(); // Create an instance of the statistics service
      service.getStatistics()
          .then(data => {
            this.statistics = data; // Store the result in the component's data
          })
          .catch(error => {
            console.error('Error fetching statistics:', error); // Log any errors
            this.statistics = []; // Reset data in case of error
          });
    },
  },

  mounted() {
    this.fetchStatistics(); // Automatically fetch statistics on component mount
  }
};
</script>

<template>
  <!-- Main layout section with two columns -->
  <div class="main-section">
    <div>
      <!-- Renders the top list of key statistics (first 3 entries) -->
      <DataTopListComponent :statistics="statistics.slice(0, 3)" />

      <!-- Renders today's attendance chart -->
      <TodayAttendanceComponent></TodayAttendanceComponent>

      <!-- Renders the bottom list of remaining statistics (after the first 3) -->
      <DataBottomListComponent :statistics="statistics.slice(3)" />
    </div>

    <!-- Renders the table with today's scheduled classes -->
    <today-classes-component></today-classes-component>
  </div>
</template>


<style scoped>
:root {
  padding: 120px;
}

/* Grid layout for the main content section of the dashboard */
.main-section {
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 1rem;
}
</style>
