<script>
import { AttendanceApiService } from "../services/attendance-api.service";
import { ClassApiService } from "../../classes/services/class-api.service";

export default {
  name: "HistoricalSummary",
  data() {
    return {
      rawAttendanceRecords: [],
      classes: [],
      isLoading: true,
      error: null,
      attendanceApiService: null,
      classApiService: null,
    };
  },
  computed: {
    historicalSummaryCalculated() {
      if (this.rawAttendanceRecords.length === 0) {
        return {
          total_attendance_records: 0,
          unique_attended_days: 0,
          average_daily_attendance: 0,
          average_peak_time: "N/A",
          max_attendance: 0,
          min_attendance: 0,
          most_popular_class: "N/A",
          least_popular_class: "N/A",
        };
      }

      const countsPerDay = new Map();
      const hourlyCounts = new Map();
      const classAttendanceCounts = new Map();

      this.rawAttendanceRecords.forEach(record => {
        const entryDate = new Date(record.entryTime);
        if (isNaN(entryDate.getTime())) {
          return;
        }

        const dateKey = entryDate.toISOString().split('T')[0];
        countsPerDay.set(dateKey, (countsPerDay.get(dateKey) || 0) + 1);

        const hourKey = String(entryDate.getHours()).padStart(2, '0') + ":00";
        hourlyCounts.set(hourKey, (hourlyCounts.get(hourKey) || 0) + 1);

        if (record.classId) {
          classAttendanceCounts.set(record.classId, (classAttendanceCounts.get(record.classId) || 0) + 1);
        }
      });

      const totalAttendanceRecords = this.rawAttendanceRecords.length;
      const uniqueAttendedDays = countsPerDay.size;

      let totalDailyAttendanceSum = 0;
      let minDailyAttendance = Infinity;
      let maxDailyAttendance = 0;

      if (uniqueAttendedDays > 0) {
        countsPerDay.forEach(count => {
          totalDailyAttendanceSum += count;
          if (count < minDailyAttendance) minDailyAttendance = count;
          if (count > maxDailyAttendance) maxDailyAttendance = count;
        });
      } else {
        minDailyAttendance = 0;
      }

      const averageDailyAttendance = uniqueAttendedDays > 0
          ? (totalDailyAttendanceSum / uniqueAttendedDays).toFixed(2)
          : 0;

      let peakHour = "N/A";
      let maxHourlyCount = 0;
      hourlyCounts.forEach((count, hour) => {
        if (count > maxHourlyCount) {
          maxHourlyCount = count;
          peakHour = hour;
        }
      });

      let mostPopularClassName = "N/A";
      let maxClassAttendance = 0;
      let leastPopularClassName = "N/A";
      let minClassAttendance = Infinity;

      if (classAttendanceCounts.size > 0) {
        classAttendanceCounts.forEach((count, classId) => {
          const className = this.classes.find(c => c.id === classId)?.name || `Class ${classId}`;

          if (count > maxClassAttendance) {
            maxClassAttendance = count;
            mostPopularClassName = className;
          }
          if (count < minClassAttendance) {
            minClassAttendance = count;
            leastPopularClassName = className;
          }
        });
      } else {
        minClassAttendance = 0;
      }


      return {
        total_attendance_records: totalAttendanceRecords,
        unique_attended_days: uniqueAttendedDays,
        average_daily_attendance: averageDailyAttendance,
        average_peak_time: peakHour,
        max_attendance: maxDailyAttendance,
        min_attendance: minDailyAttendance,
        most_popular_class: mostPopularClassName,
        least_popular_class: leastPopularClassName,
      };
    }
  },
  created() {
    this.attendanceApiService = new AttendanceApiService();
    this.classApiService = new ClassApiService();
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      this.error = null;
      try {
        const [attendanceData, classesData] = await Promise.all([
          this.attendanceApiService.getAllAttendanceRecords(),
          this.classApiService.getAllClasses()
        ]);

        this.rawAttendanceRecords = attendanceData;
        this.classes = classesData;
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching historical attendance or class data:", error);
        this.error = error;
        this.rawAttendanceRecords = [];
        this.classes = [];
        this.isLoading = false;
      }
    }
  }
}
</script>

<template>
  <div class="weekly-summary-container" aria-live="polite">
    <div class="weekly-summary-header" role="heading" aria-level="2">
      <h4 class="weekly-summary-title">{{ $t('attendance.historical-summary') }}</h4>
    </div>
    <pv-divider class="weekly-summary-divider"/>
    <div v-if="isLoading" class="weekly-summary-content" role="status" aria-live="assertive">
      {{ $t('attendance.loading-historical-summary') }}
    </div>
    <div v-else-if="error" class="weekly-summary-content" role="alert" aria-live="assertive">
      {{ $t('general.error') }}: {{ error.message || error }}
    </div>
    <div v-else-if="rawAttendanceRecords.length > 0" class="weekly-summary-content">
      <p aria-label="Total attendance records">
        {{ $t('attendance.total-records') }}: {{ historicalSummaryCalculated.total_attendance_records }}
      </p>
      <p aria-label="Unique days with attendance">
        {{ $t('attendance.unique-attended-days') }}: {{ historicalSummaryCalculated.unique_attended_days }}
      </p>
      <p aria-label="Average daily attendance">
        {{ $t('attendance.average-daily-attendance') }}: {{ historicalSummaryCalculated.average_daily_attendance }}
      </p>
      <p aria-label="Peak attendance hour">
        {{ $t('attendance.peak-hour-average') }}: {{ historicalSummaryCalculated.average_peak_time }}
      </p>
      <p aria-label="Highest attendance on a single day">
        {{ $t('attendance.highest-attendance') }}: {{ historicalSummaryCalculated.max_attendance }}
      </p>
      <p aria-label="Lowest attendance on a single day">
        {{ $t('attendance.lowest-attendance') }}: {{ historicalSummaryCalculated.min_attendance }}
      </p>
      <p aria-label="Most popular class">
        {{ $t('attendance.most-popular-class') }}: {{ historicalSummaryCalculated.most_popular_class }}
      </p>
      <p aria-label="Least popular class">
        {{ $t('attendance.least-popular-class') }}: {{ historicalSummaryCalculated.least_popular_class }}
      </p>
    </div>
    <div v-else class="weekly-summary-content">
      {{ $t('attendance.no-historical-data-available') }}
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  padding-bottom: 10px;
}

.weekly-summary-content p {
  margin: 4px 0;
  line-height: 1.3;
}
</style>