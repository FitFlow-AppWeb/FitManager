<script>
import { IncomeApiService } from "../services/income-api.service.js";
import Chart from "primevue/chart";

export default {
  name: 'IncomeChartComponent',
  components: {
    Chart
  },
  data() {
    return {
      chartData: null,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Month & Year',
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 10,
            }
          },
          y: {
            title: {
              display: true,
              text: 'Income (PEN)'
            },
            beginAtZero: true,
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
          title: {
            display: true,
            text: 'Monthly Income Overview',
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          callbacks: {
            label: function(tooltipItem) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat('es-PE', {
                  style: 'currency',
                  currency: 'PEN',
                }).format(context.parsed.y);
              }
              return label;
            }
          }
        }
      },
      isLoading: false,
      errorMessage: null,
      apiService: null,
    };
  },
  created() {
    this.apiService = new IncomeApiService();
  },
  async mounted() {
    await this.fetchIncomeData();
  },
  methods: {
    async fetchIncomeData() {
      this.isLoading = true;
      this.errorMessage = null;
      this.chartData = null;

      try{
        const incomeRecords = await this.apiService.getIncomeData();

        const filteredRecords = incomeRecords.filter(
            record => !(record.monthly === 0 && record.quarterly === 0 && record.yearly === 0 && record.month === "June" && record.year === 2025)
        );

        if (!incomeRecords || incomeRecords.length === 0) {
          this.errorMessage = "No income data available.";
          this.chartData = { labels: [], datasets: [] };
          return;
        }

        const labels = filteredRecords.map(record => `${record.month.substring(0,3)} ${record.year}`);
        const monthlyData = filteredRecords.map(record => record.monthly);
        const quarterlyData = filteredRecords.map(record => record.quarterly);
        const yearlyData = filteredRecords.map(record => record.yearly);

        this.chartData = {
          labels: labels,
          datasets: [
            {
              label: 'Monthly Income',
              data: monthlyData,
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              tension: 0.2, // Slight curve to the line
              fill: false
            },
            {
              label: 'Quarterly Income',
              data: quarterlyData,
              borderColor: 'rgb(255, 159, 64)',
              backgroundColor: 'rgba(255, 159, 64, 0.2)',
              tension: 0.2,
              fill: false
            },
            {
              label: 'Yearly Income',
              data: yearlyData,
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              tension: 0.2,
              fill: false
            }
          ]
        };

      } catch (error) {
        console.error("Failed to load income data for chart:", error);
        this.errorMessage = "An error occurred while fetching chart data. Please try again later.";
        this.chartData = { labels: [], datasets: [] }; // Fallback to empty chart on error
      } finally {
        this.isLoading = false; // Data loading is complete (either success or failure)
      }
    }
  }
}
</script>

<template>
  <div class="card">
    <Chart type="line" :data="chartData" :options="chartOptions" class="p-chart" />
  </div>
</template>

<style scoped>
.card{
  background-color: #ffffff;
  border-radius: 8px;
  width: 45%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.p-chart {
  width: 100% !important;
  height: 100% !important;
}


</style>