<script>
import { GeneralInfoApiService } from "../services/general-info-api.service.js"; // Verifica esta ruta

export default {
  name: "GeneralInfoComponent",
  data() {
    return {
      aprilInfo: null,
      projectedInfo: null,
      isLoading: true,
      error: null,
      targetMonth: "April",
      displayMonth: "April",
      targetYear: 2025,
    };
  },
  async created() {
    this.fetchInfo();
  },
  methods: {
    async fetchInfo() {
      this.isLoading = true;
      this.error = null;
      const apiService = new GeneralInfoApiService();
      try {
        const data = await apiService.getFinancialData();
        this.aprilInfo = data.monthly?.find(
            (item) => item.month === this.targetMonth && item.year === this.targetYear
        ) || null;
        this.projectedInfo = data.overall || null;
      } catch (err) {
        this.error = "Could not load info.";
        console.error(err);
      } finally {
        this.isLoading = false;
      }
    },
    formatCurrency(value) {
      if (typeof value !== 'number') return 'S/. ---';
      return `S/.${Math.round(value)}`;
    }
  }
};
</script>


<template>
  <div class="info-container">
    <h3>Financial Overview</h3>
    <div v-if="isLoading" class="message">Loading...</div>
    <div v-if="error" class="message error">{{ error }}</div>

    <div v-if="!isLoading && !error && (aprilInfo || projectedInfo)" class="info-card">
      <template v-if="aprilInfo">
        <p>Profit {{ displayMonth }}: <span>{{ formatCurrency(aprilInfo.earnings) }}</span></p>
        <p>Incomes {{ displayMonth }}: <span>{{ formatCurrency(aprilInfo.total_income) }}</span></p>
        <p>Expenses {{ displayMonth }}: <span>{{ formatCurrency(aprilInfo.total_expenses) }}</span></p>
        <p v-if="aprilInfo.membership_income_breakdown">{{ displayMonth }} monthly subscriptions: <span>{{ formatCurrency(aprilInfo.membership_income_breakdown.monthly) }}</span></p>
        <p v-if="aprilInfo.membership_income_breakdown">{{ displayMonth }} quarterly subscriptions: <span>{{ formatCurrency(aprilInfo.membership_income_breakdown.quarterly) }}</span></p>
        <p v-if="aprilInfo.membership_income_breakdown">{{ displayMonth }} yearly subscriptions: <span>{{ formatCurrency(aprilInfo.membership_income_breakdown.annual) }}</span></p>
      </template>

      <hr v-if="aprilInfo && projectedInfo" />

      <template v-if="projectedInfo">
        <p>Average Expenses {{ projectedInfo.period_covered }}: <span>{{ formatCurrency(projectedInfo.average_monthly_expenses) }}</span></p>
        <p>Profits {{ targetYear }}: <span>{{ formatCurrency(projectedInfo.earnings_2025) }}</span></p>
        <p>Income {{ targetYear }}: <span>{{ formatCurrency(projectedInfo.income_2025) }}</span></p>
        <p>Expenses {{ targetYear }}: <span>{{ formatCurrency(projectedInfo.expenses_2025) }}</span></p>
      </template>
    </div>
    <div v-if="!isLoading && !error && !aprilInfo && !projectedInfo" class="message">
      No data available.
    </div>
  </div>
</template>

<style scoped>
.info-container {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 32%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
h3 {
  color: #595959;
  text-align: center;
  border-bottom: 1px solid #eee;
  padding: 10px;
  margin: 0;
  font-size: 0.9rem;
}
.info-card {
  padding: 5px 15px;
  border-radius: 5px;
}
.info-card p {
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
  font-size: 0.8em;
  color: #444;
}
.info-card p span {
  font-weight: bold;
  color: #2c3e50;
}
.message {
  text-align: center;
  padding: 15px;
  color: #555;
}
.message.error {
  color: #e74c3c;
  background-color: #fdd;
  border-radius: 5px;
}
hr {
  border: none;
  border-top: 1px solid #eee;
  margin: 15px 0;
}
</style>