<script>
/**
 * Data Top List Component
 *
 * This component is responsible for rendering the top list of key performance statistics in the dashboard.
 * It receives a `statistics` prop, which is an array of data that will be displayed using individual `data-item` components.
 * Each item in the statistics array will be passed to the `data-item` component for rendering.
 *
 * Author: Tomio Nakamurakare
 */

// Import the data-item component to render individual statistic items
import DataItem from "./data-item.component.vue";

export default {
  name: "data-top-list.component", // Component name

  // Declare child components that will be used in the template
  components: { DataItem },

  props: {
    statistics: {
      type: Array,    // The statistics prop should be an array
      required: true  // This prop is required
    }
  }
}
</script>

<template>
  <!-- Container that holds the data items -->
  <div class="card-container">
    <!-- Loop through the statistics array and render a data-item for each entry -->
    <data-item v-for="(item, index) in statistics" :key="item.title" :data="item" />
  </div>
</template>

<style scoped>
/* Grid container for arranging the data items */
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
  grid-gap: 5vw;
}
</style>
