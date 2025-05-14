<!--
  Description: This component serves as a layout for displaying attendance data in two sections. On the left side, it shows a heatmap through the `HeatmapComponent`, and on the right side, it displays two additional components: `WeeklySummaryComponent` and `HistoricalSummaryComponent`. These components work together to provide a comprehensive view of attendance trends, with the heatmap offering a visual representation and the other components displaying statistical summaries. The layout is structured using two main containers: `attendance-left` and `attendance-right`.
  Author: Renzo Luque
-->

<script setup>
import HeatmapComponent from './heatmap.component.vue'
import WeeklySummaryComponent from './weekly-summary.component.vue'
import HistoricalSummaryComponent from './historical-summary.component.vue'
</script>

<template>
  <div class="attendance-layout" aria-live="polite">
    <div class="attendance-left">
      <HeatmapComponent aria-label="Heatmap of attendance trends"/>
    </div>
    <div class="attendance-right">
      <div class="test">
        <WeeklySummaryComponent aria-label="Weekly attendance summary"/>
        <HistoricalSummaryComponent aria-label="Historical attendance summary"/>
      </div>
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

.attendance-left {
  display: flex;
  align-items: center;
  height: 100%;
  width: 50%;
}

.test {
  display: flex;
  flex-direction: column;
  gap: 90px;
}

.attendance-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0;
  height: 100%;
}

</style>