<script setup>
import HeatmapComponent from './heatmap.component.vue'
import WeeklySummaryComponent from './weekly-summary.component.vue'
import HistoricalSummaryComponent from './historical-summary.component.vue'

</script>

<template>
    <div class="attendance-layout">
        <div class="attendance-left">
            <HeatmapComponent/>
        </div>
        <div class="attendance-right">
            <WeeklySummaryComponent/>
            <HistoricalSummaryComponent/>
        </div>
    </div>
</template>

<style scoped>
.attendance-layout {
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
}

.attendance-right {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
  height: 100%;
}

</style>