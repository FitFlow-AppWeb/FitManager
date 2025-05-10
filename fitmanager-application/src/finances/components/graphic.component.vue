<script>
import Chart from 'primevue/chart';
import axios from 'axios';

export default {
  name: 'GraphicComponent',
  components: {
    Chart,
  },
  data() {
    return {
      subscriptionIncome: null,
      chartData: null,
      chartOptions: null,
      loading: true,
      error: null,
    };
  },
  async mounted() {
    await this.loadSubscriptionData();
    if (this.subscriptionIncome) {
      this.prepareChartData();
      this.prepareChartOptions();
    }
  },
  methods: {
    async loadSubscriptionData() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get('http://localhost:3100/subscription_income')
        this.subscriptionIncome = response.data;
        console.log('Data loaded: ', this.subscriptionIncome);
      } catch (error) {
        console.error('Error loading data income:', error);
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    prepareChartData() {
      if (!this.subscriptionIncome || this.subscriptionIncome.length === 0) {
        this.chartData = null;
        console.warn('No income data for Graph.');
        return;
      }
      const monthLabels = this.subscriptionIncome.map(item => item.month);

      const monthlyData = this.subscriptionIncome.map(item => item.monthly);
      const quarterlyData = this.subscriptionIncome.map(item => item.quarterly)
      const yearlyData = this.subscriptionIncome.map(item => item.yearly);

      this.chartData = {
        labels: monthLabels,
        datasets: [
          {
            label: 'Monthly',
            data: monthlyData,
            fill: false,
            borderColor: '#42A5F5',
            tension: 0.1,
          },
          {
            label: 'Quarterly',
            data: quarterlyData,
            fill: false,
            borderColor: '#FFA726',
            tension: 0.1,
          },
          {
            label: 'Yearly',
            data: yearlyData,
            fill: false,
            borderColor: '#d51010',
            tension: 0.1,
          },
        ],
      };
    },
    prepareChartOptions() {
     this.chartOptions = {
       responsive: true,
       maintainAspectRatio: false,
       plugins: {
         legend: { labels: { color: '#495057' } },
         title: { display: true, text: 'Income by subscription in the last six months', color: '#333' }
       },
       scales: {
         x: {
           ticks: {
             color: '#495057',
           },
           grid: { color: '#ebedef' }
         },
         y: {
           ticks: {
             color: '#495057',
             stepSize: 1000,
             callback: function(value) {
               return 'PEN S/. ' + value.toLocaleString();
             }
           },
           grid: { color: '#ebedef' },
           beginAtZero: true
         }
       }
     };
      console.log('Options for graph loaded:', this.chartOptions);
    }
  }
}

</script>

<template>
  <div class="card">
    <div v-if="loading">Cargando datos del API...</div>
    <div v-else-if="error"><p>Error al cargar los datos: {{ error.message }}</p></div>
    <Chart v-else-if="chartData" type="line" :data="chartData" :options="chartOptions"/>
    <div v-else>No hay datos disponibles para mostrar el gráfico.</div>
  </div>
</template>

<style scoped>
.card{
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  width: 40%;
  height: 50vh;
  margin: 0 auto;
}

.p-chart {
  width: 100% !important;
  height: 100% !important;
}


</style>