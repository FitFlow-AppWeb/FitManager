<script>
/**
 * Income Chart Component
 *
 * This component fetches membership payment data and displays it in a line chart,
 * focusing on the last 4 months of activity.
 * The chart specifically represents income from 'Monthly', 'Quarterly', and 'Yearly'
 * membership types, aggregated by the payment date's month, quarter, and year respectively.
 *
 * Author: Renzo Luque
 */

import { MembershipPaymentApiService } from "../services/membership-payment-api.service.js";
import { MemberApiService } from "../../members/services/member-api.service.js";
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
              text: this.$t('finances.period'),
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 10,
            }
          },
          y: {
            title: {
              display: true,
              text: this.$t('finances.income-currency'),
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
            text: this.$t('finances.membership-income-overview-last-4-months'),
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          callbacks: {
            label: function(tooltipItem) {
              let label = tooltipItem.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (tooltipItem.parsed.y !== null) {
                label += new Intl.NumberFormat('es-PE', {
                  style: 'currency',
                  currency: 'PEN',
                }).format(tooltipItem.parsed.y);
              }
              return label;
            }
          }
        }
      },
      isLoading: false,
      errorMessage: null,
      membershipPaymentService: null,
      memberApiService: null,
      allMembershipPayments: [],
      membersMap: new Map(),
    };
  },
  created() {
    this.membershipPaymentService = new MembershipPaymentApiService();
    this.memberApiService = new MemberApiService();
  },
  async mounted() {
    await this.fetchAndProcessIncomeData();
  },
  methods: {
    async fetchAndProcessIncomeData() {
      this.isLoading = true;
      this.errorMessage = null;
      this.chartData = null;

      try {
        const fetchedPayments = await this.membershipPaymentService.getAllMembershipPayments();
        this.allMembershipPayments = fetchedPayments;

        const allMembers = await this.memberApiService.getAllMembers();
        allMembers.forEach(member => {
          this.membersMap.set(member.id, member);
        });

        if (!this.allMembershipPayments || this.allMembershipPayments.length === 0) {
          this.errorMessage = this.$t('finances.no-membership-income-data-available');
          this.chartData = { labels: [], datasets: [] };
          return;
        }

        const today = new Date();
        const fourMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 3, 1);

        const filteredPayments = this.allMembershipPayments.filter(payment => {
          const paymentDate = new Date(payment.date);
          return paymentDate >= fourMonthsAgo && paymentDate <= today;
        });

        const monthlyMembershipIncome = new Map();
        const quarterlyMembershipIncome = new Map();
        const yearlyMembershipIncome = new Map();

        const relevantMonthsKeys = [];
        for (let i = 0; i < 4; i++) {
          const d = new Date(today.getFullYear(), today.getMonth() - 3 + i, 1);
          relevantMonthsKeys.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`);
        }

        filteredPayments.forEach(payment => {
          const member = this.membersMap.get(payment.memberId);

          if (!member) {
            console.warn(`Miembro con ID ${payment.memberId} no encontrado para el pago. Ignorando.`);
            return;
          }

          const membershipType = member.membershipType;
          const date = new Date(payment.date);
          const year = date.getFullYear();
          const month = date.getMonth();
          const quarter = Math.floor(month / 3) + 1;

          const monthKey = `${year}-${String(month + 1).padStart(2, '0')}`;
          const quarterKey = `${year}-Q${quarter}`;
          const yearKey = `${year}`;

          if (membershipType === 'Mensual') {
            monthlyMembershipIncome.set(monthKey, (monthlyMembershipIncome.get(monthKey) || 0) + payment.amount);
          } else if (membershipType === 'Trimestral') {
            quarterlyMembershipIncome.set(quarterKey, (quarterlyMembershipIncome.get(quarterKey) || 0) + payment.amount);
          } else if (membershipType === 'Anual') {
            yearlyMembershipIncome.set(yearKey, (yearlyMembershipIncome.get(yearKey) || 0) + payment.amount);
          }
        });

        const labels = [];
        const monthlyChartData = [];
        const quarterlyChartData = [];
        const yearlyChartData = [];

        const monthNames = [
          this.$t('finances.jan'), this.$t('finances.feb'), this.$t('finances.mar'), this.$t('finances.apr'),
          this.$t('finances.may'), this.$t('finances.jun'), this.$t('finances.jul'), this.$t('finances.aug'),
          this.$t('finances.sep'), this.$t('finances.oct'), this.$t('finances.nov'), this.$t('finances.dec')
        ];

        relevantMonthsKeys.forEach(monthKey => {
          const [year, monthNum] = monthKey.split('-');
          labels.push(`${monthNames[parseInt(monthNum) - 1]} ${year}`);

          monthlyChartData.push(monthlyMembershipIncome.get(monthKey) || 0);

          const dateForPeriod = new Date(`${monthKey}-01T00:00:00Z`);
          const quarterNum = Math.floor(dateForPeriod.getMonth() / 3) + 1;
          const currentQuarterKey = `${year}-Q${quarterNum}`;

          quarterlyChartData.push(quarterlyMembershipIncome.get(currentQuarterKey) || 0);
          yearlyChartData.push(yearlyMembershipIncome.get(year) || 0);
        });

        this.chartData = {
          labels: labels,
          datasets: [
            {
              label: this.$t('finances.income-from-monthly-memberships'),
              data: monthlyChartData,
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              tension: 0.2,
              fill: false
            },
            {
              label: this.$t('finances.income-from-quarterly-memberships'),
              data: quarterlyChartData,
              borderColor: 'rgb(255, 159, 64)',
              backgroundColor: 'rgba(255, 159, 64, 0.2)',
              tension: 0.2,
              fill: false
            },
            {
              label: this.$t('finances.income-from-yearly-memberships'),
              data: yearlyChartData,
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              tension: 0.2,
              fill: false
            }
          ]
        };

      } catch (error) {
        console.error("Failed to load membership income data for chart:", error);
        this.errorMessage = this.$t('finances.error-fetching-chart-data');
        this.chartData = {labels: [], datasets: []};
      } finally {
        this.isLoading = false;
      }
    }
  }
}
</script>

<template>
  <div class="card">
    <Chart type="line" :data="chartData" :options="chartOptions" class="p-chart"/>
    <div v-if="isLoading" class="loading-overlay">
      <p>{{ $t('finances.loading-chart-data') }}</p>
    </div>
    <div v-if="errorMessage" class="error-message">
      <p>{{ errorMessage }}</p>
    </div>
    <div v-if="!isLoading && !errorMessage && (!chartData || chartData.labels.length === 0)" class="no-data-message">
      <p>{{ $t('finances.no-data-to-display') }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #ffffff;
  border-radius: 8px;
  width: 45%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.p-chart {
  width: 100% !important;
  height: 100% !important;
  max-width: 100%;
  max-height: 100%;
}

.loading-overlay, .error-message, .no-data-message {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: #555;
  text-align: center;
}

.error-message {
  color: red;
}
</style>