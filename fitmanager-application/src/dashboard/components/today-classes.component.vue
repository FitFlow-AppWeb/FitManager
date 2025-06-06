<script>
/**
 * Today Classes Component
 *
 * This component displays a table with the class schedule for the current day.
 * It retrieves data from an API and presents it in a searchable and paginated datatable.
 *
 * Features:
 * - Fetches today's schedule from the backend service
 * - Filters the schedule based on a search query (by hour)
 * - Formats the list of classes into a readable string
 * - Renders a styled and paginated table using PrimeVue components
 *
 * Author: Tomio Nakamurakare
 */

import { TodayClassesApiService } from '../services/today-classes-api.service.js';

export default {
  name: "TodayClassesComponent", // Component name
  data() {
    return {
      schedule: [], // Holds the full schedule data
      searchQuery: "", // String used to filter schedule entries by hour
    };
  },
  methods: {
    fetchTodayClasses() {
      const service = new TodayClassesApiService(); // Create instance of the service
      service.getTodayClasses()
          .then(data => {
            this.schedule = data; // Store the fetched data
          })
          .catch(error => {
            console.error("Error loading today classes:", error);
            this.schedule = []; // Fallback to empty schedule
          });
    },
    // Filter the schedule entries based on the hour (using search query)
    filterSchedule() {
      return this.schedule.filter(entry =>
          entry.hour.includes(this.searchQuery)
      );
    },
    // Format the list of class names into a single string for display
    formatClasses(classes) {
      return classes.length > 0 ? classes.join(', ') : this.$t('dashboard.no-classes');
    }
  },
  // Automatically fetch the class schedule when the component is mounted
  mounted() {
    this.fetchTodayClasses();
  }
};
</script>

<template>
  <!-- Container for the classes table -->
  <div class="today-classes">
    <!-- Section title -->
    <h2 class="title" aria-label="Today classes">{{ $t('dashboard.today-classes') }}</h2>
    <!-- PrimeVue datatable to display class schedule -->
    <pv-datatable
        :value="filterSchedule()"
        selectionMode="single"
        aria-labelledby="today-classes-table"
    >
      <!-- Column for hour -->
      <pv-column
          field="hour"
          :header="$t('dashboard.hour')"
          style="width: 20%"
          aria-label="Hour"
      />
      <!-- Column for formatted class list -->
      <pv-column :header="$t('dashboard.classes')" style="width: 60%" aria-label="Classes">
        <template #body="plan">
          <span>{{ formatClasses(plan.data.classes) }}</span>
        </template>
      </pv-column>
    </pv-datatable>
  </div>
</template>


<style scoped>
.today-classes {
  margin: 1rem 1rem 0 0;
  padding: 0 1rem;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.title {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.p-datatable-tbody > tr:hover {
  background-color: #f1f1f1;
}
</style>
