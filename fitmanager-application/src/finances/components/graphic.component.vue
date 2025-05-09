<script>

</script>

<template>
  <div class="card">
    <Chart type="line" :data="chartData" :options="chartOptions" class="h-[30rem]" />
    <span>GraphData</span>
  </div>
</template>

<style scoped>
.card{
  background-color: #94A3B8;
}
</style>