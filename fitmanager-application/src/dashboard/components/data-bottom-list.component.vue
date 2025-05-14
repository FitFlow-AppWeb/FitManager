<script>
/**
 * Data Bottom List Component
 *
 * This component displays a list of data items passed via the `statistics` prop.
 * It uses the `DataItem` component to render each item individually.
 * This component is part of the dashboard, specifically for the bottom metrics section.
 *
 * Author: Tomio Nakamurakare
 */

import DataItem from "./data-item.component.vue";

export default {
  name: "data-bottom-list.component", // Component name

  components: { DataItem }, // Registering the DataItem component for reuse

  // Prop definition: expects an array of statistics to display
  props: {
    statistics: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <!-- Render the DataItem component for each statistic in the statistics array -->
  <div class="card-container" role="list" aria-label="Summary statistics">
    <data-item
        v-for="(item, index) in statistics"
        :key="item.title"
        :data="item"
        role="listitem"
    />
  </div>
</template>

<style scoped>
/* Styling for the card container, uses a responsive grid layout */
.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1fr;
}
</style>
