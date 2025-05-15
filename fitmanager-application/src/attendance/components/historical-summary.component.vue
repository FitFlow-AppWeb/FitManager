<!--
  Description: This component, HistoricalSummary, is responsible for fetching and displaying a historical summary of weekly
  attendance data. It fetches the data from an API using the SummaryApiService and handles loading, error, and data display states. 
  The summary includes various statistics like average daily attendance, absences, overall attendance rate, peak hours, and most 
  frequent user. It shows either a loading message, an error message, or the summary data once it's available.
  Author: Renzo Luque
  Accessibility:
    - The component uses proper aria roles and attributes for better accessibility.
    - Each element that displays data is properly labeled with appropriate aria labels.
-->

<script>
import { SummaryApiService } from "../services/summary-api.service";
export default {
  name: "HistoricalSummary",
  data() {
    return {
      summary: null,
      isLoading: true,
      error: null
    };
  },
  mounted() {
    this.fetchSummary();
  },
  methods: {
    fetchSummary() {
      const summaryService = new SummaryApiService();
      summaryService.getSummary()
          .then((summary) => {
            this.summary = summary;
            this.isLoading = false;
          })
          .catch((error) => {
            this.error = error;
            this.isLoading = false;
          });
    }
  }
}
</script>

<template>
  <div class="weekly-summary-container" aria-live="polite">
    <div class="weekly-summary-header" role="heading" aria-level="2">
      <h4 class="weekly-summary-title">{{ $t('attendance.historical-summary') }}</h4>
    </div>
    <pv-divider class="weekly-summary-divider" />
    <div v-if="isLoading" class="weekly-summary-content" role="status" aria-live="assertive">
      Loading...
    </div>
    <div v-else-if="error" class="weekly-summary-content" role="alert" aria-live="assertive">
      Error: {{ error }}
    </div>
    <div v-else-if="summary?.weeklyOverview" class="weekly-summary-content">
      <p>{{ $t('attendance.average-daily-attendance') }}: {{ summary.historicalSummary.average_daily_attendance }}</p>
      <p>{{ $t('attendance.average-daily-absences') }}: {{ summary.historicalSummary.average_daily_absences }}</p>
      <p>{{ $t('attendance.overall-attendance') }}: {{ summary.historicalSummary.overall_attendance_rate }}</p>
      <p>{{ $t('attendance.peak-hour-average') }}: {{ summary.historicalSummary.average_peak_time }}</p>
      <p>{{ $t('attendance.highest-attendance') }}: {{ summary.historicalSummary.max_attendance }}</p>
      <p>{{ $t('attendance.lowest-attendance') }}: {{ summary.historicalSummary.min_attendance }}</p>
      <p>{{ $t('attendance.most-frequent-user') }}: {{ summary.historicalSummary.most_frequent_user }}</p>
    </div>
    <div v-else class="weekly-summary-content">
      No data available
    </div>
  </div>
</template>

<style scoped>
.weekly-summary-container {
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 290px;
  background-color: #ffffff;
  color: #5C5C5C;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.weekly-summary-divider {
  margin: 0;
}

.weekly-summary-header {
  padding: 10px 25px;
  margin: 0;
  color: #5C5C5C;
}

.weekly-summary-title {
  margin: 0;
}

.weekly-summary-content {
  padding: 0 20px;
  font-size: 0.8em;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin: 8px;
  }
}
</style>