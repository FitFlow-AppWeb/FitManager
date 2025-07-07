<script>
/**
 * General Information Component
 *
 * This component fetches and displays financial data from granular API services
 * (Membership Payments, Salary Payments, Supply Purchases) for the current month and
 * provides aggregated and projected data for the current target year.
 * It calculates earnings, income, and expenses, including a breakdown of membership income
 * by type (monthly, quarterly, yearly subscriptions).
 * The component handles loading and error states and displays data in formatted currency.
 *
 * Author: Renzo Luque
 */
  import { MembershipPaymentApiService } from "../services/membership-payment-api.service.js";
  import { SalaryPaymentApiService } from "../services/salary-payment-api.service.js";
  import { SupplyPurchaseApiService } from "../services/supply-purchase-api.service.js";
  import { MemberApiService } from "../../members/services/member-api.service.js";

  export default {
  name: "GeneralInfoComponent",
  data() {
  const today = new Date();
  const currentMonthIndex = today.getMonth();

  return {
  monthlyInfo: null,
  projectedInfo: null,
  isLoading: true,
  error: null,
  targetMonthIndex: currentMonthIndex,
  displayMonthKey: `finances.${['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'][currentMonthIndex]}`,
  targetYear: today.getFullYear(),

  membershipPaymentService: null,
  salaryPaymentService: null,
  supplyPurchaseService: null,
  memberApiService: null,

  allMembershipPayments: [],
  allSalaryPayments: [],
  allSupplyPurchases: [],
  membersMap: new Map(),
};
},
  async created() {
  this.membershipPaymentService = new MembershipPaymentApiService();
  this.salaryPaymentService = new SalaryPaymentApiService();
  this.supplyPurchaseService = new SupplyPurchaseApiService();
  this.memberApiService = new MemberApiService();

  await this.fetchAndAggregateInfo();
},
  computed: {
  translatedDisplayMonth() {
  return this.$t(this.displayMonthKey);
}
},
  methods: {
  async fetchAndAggregateInfo() {
  this.isLoading = true;
  this.error = null;
  try {
  const [
  membershipPayments,
  salaryPayments,
  supplyPurchases,
  members
  ] = await Promise.all([
  this.membershipPaymentService.getAllMembershipPayments(),
  this.salaryPaymentService.getAllSalaryPayments(),
  this.supplyPurchaseService.getAllSupplyPurchases(),
  this.memberApiService.getAllMembers(),
  ]);

  this.allMembershipPayments = membershipPayments;
  this.allSalaryPayments = salaryPayments;
  this.allSupplyPurchases = supplyPurchases;
  members.forEach(member => this.membersMap.set(member.id, member));

  this.monthlyInfo = this.calculateMonthlyInfo(this.targetYear, this.targetMonthIndex);

  this.projectedInfo = this.calculateProjectedInfo(this.targetYear);

} catch (err) {
  this.error = this.$t('general.error-loading-info');
  console.error("Error fetching or aggregating financial data:", err);
} finally {
  this.isLoading = false;
}
},

  calculateMonthlyInfo(year, monthIndex) {
  let totalIncome = 0;
  let totalExpenses = 0;
  let monthlyMembership = 0;
  let quarterlyMembership = 0;
  let annualMembership = 0;

  const currentMonthPayments = this.allMembershipPayments.filter(p => {
  const date = new Date(p.date);
  return date.getFullYear() === year && date.getMonth() === monthIndex;
});

  currentMonthPayments.forEach(payment => {
  const member = this.membersMap.get(payment.memberId);
  if (member) {
  totalIncome += payment.amount;
  switch (member.membershipType) {
  case 'Mensual':
  monthlyMembership += payment.amount;
  break;
  case 'Trimestral':
  quarterlyMembership += payment.amount;
  break;
  case 'Anual':
  annualMembership += payment.amount;
  break;
}
}
});

  const currentMonthSalaryExpenses = this.allSalaryPayments.filter(p => {
  const date = new Date(p.date);
  return date.getFullYear() === year && date.getMonth() === monthIndex;
});
  currentMonthSalaryExpenses.forEach(p => totalExpenses += p.amount);

  const currentMonthSupplyExpenses = this.allSupplyPurchases.filter(p => {
  const date = new Date(p.date);
  return date.getFullYear() === year && date.getMonth() === monthIndex;
});
  currentMonthSupplyExpenses.forEach(p => totalExpenses += p.amount);

  const earnings = totalIncome - totalExpenses;

  return {
  month: this.translatedDisplayMonth,
  year: year,
  earnings: earnings,
  total_income: totalIncome,
  total_expenses: totalExpenses,
  membership_income_breakdown: {
  monthly: monthlyMembership,
  quarterly: quarterlyMembership,
  annual: annualMembership,
},
};
},

  calculateProjectedInfo(year) {
  let totalIncomeYear = 0;
  let totalExpensesYear = 0;
  let monthsProcessed = 0;

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  this.allMembershipPayments.forEach(payment => {
  const date = new Date(payment.date);
  if (date.getFullYear() === year && date.getMonth() <= currentMonth) {
  totalIncomeYear += payment.amount;
}
});

  this.allSalaryPayments.forEach(payment => {
  const date = new Date(payment.date);
  if (date.getFullYear() === year && date.getMonth() <= currentMonth) {
  totalExpensesYear += payment.amount;
}
});

  this.allSupplyPurchases.forEach(purchase => {
  const date = new Date(purchase.date);
  if (date.getFullYear() === year && date.getMonth() <= currentMonth) {
  totalExpensesYear += purchase.amount;
}
});

  monthsProcessed = currentMonth + 1;

  let averageMonthlyExpenses = 0;
  if (monthsProcessed > 0) {
  averageMonthlyExpenses = totalExpensesYear / monthsProcessed;
}

  const remainingMonths = 12 - monthsProcessed;
  const projectedExpenses = totalExpensesYear + (averageMonthlyExpenses * remainingMonths);

  const averageMonthlyIncome = totalIncomeYear / monthsProcessed;
  const projectedIncome = totalIncomeYear + (averageMonthlyIncome * remainingMonths);
  const projectedEarnings = projectedIncome - projectedExpenses;


  return {
  period_covered: year,
  average_monthly_expenses: averageMonthlyExpenses,
  earnings_2025: projectedEarnings,
  income_2025: projectedIncome,
  expenses_2025: projectedExpenses,
};
},

  formatCurrency(value) {
  if (typeof value !== 'number' || isNaN(value)) return 'S/. ---';
  return `S/.${Math.round(value)}`;
}
}
};
</script>

<template>
  <div class="info-container">
    <h3>{{ $t('finances.financial-overview') }}</h3>
    <div v-if="isLoading" class="message" aria-live="polite">{{ $t('general.loading') }}...</div>
    <div v-if="error" class="message error" aria-live="assertive">{{ error }}</div>

    <div v-if="!isLoading && !error && (monthlyInfo || projectedInfo)" class="info-card">
      <template v-if="monthlyInfo">
        <p>{{ $t('finances.profit') }} {{ translatedDisplayMonth }}: <span>{{ formatCurrency(monthlyInfo.earnings) }}</span></p>
        <p>{{ $t('finances.income')}} {{ translatedDisplayMonth }}: <span>{{ formatCurrency(monthlyInfo.total_income) }}</span></p>
        <p>{{ $t('finances.expenses') }} {{ translatedDisplayMonth }}: <span>{{ formatCurrency(monthlyInfo.total_expenses) }}</span></p>
        <p v-if="monthlyInfo.membership_income_breakdown">{{ translatedDisplayMonth }} {{ $t('finances.monthly-subs') }}: <span>{{ formatCurrency(monthlyInfo.membership_income_breakdown.monthly) }}</span></p>
        <p v-if="monthlyInfo.membership_income_breakdown">{{ translatedDisplayMonth }} {{ $t('finances.quarterly-subs') }}: <span>{{ formatCurrency(monthlyInfo.membership_income_breakdown.quarterly) }}</span></p>
        <p v-if="monthlyInfo.membership_income_breakdown">{{ translatedDisplayMonth }} {{ $t('finances.yearly-subs') }}: <span>{{ formatCurrency(monthlyInfo.membership_income_breakdown.annual) }}</span></p>
      </template>

      <hr v-if="monthlyInfo && projectedInfo" />

      <template v-if="projectedInfo">
        <p>{{ $t('finances.avg-monthly-expenses') }}: <span>{{ formatCurrency(projectedInfo.average_monthly_expenses) }}</span></p>
        <p>{{ $t('finances.projected-profit') }} {{ targetYear }}: <span>{{ formatCurrency(projectedInfo.earnings_2025) }}</span></p>
        <p>{{ $t('finances.projected-income') }} {{ targetYear }}: <span>{{ formatCurrency(projectedInfo.income_2025) }}</span></p>
        <p>{{ $t('finances.projected-expenses') }} {{ targetYear }}: <span>{{ formatCurrency(projectedInfo.expenses_2025) }}</span></p>
      </template>
    </div>
    <div v-if="!isLoading && !error && !monthlyInfo && !projectedInfo" class="message">
      {{ $t('no-data') }}.
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