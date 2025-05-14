<!--
  Description: This component is part of a calendar system that allows the user to view and manage class schedules. It has two main sections: one for displaying classes on the selected date and another for showing a monthly overview of classes. The user can select a specific date to see the classes scheduled for that day, and the component will also generate a monthly view with the respective classes for each day. The component interacts with an external API service (`ClassApiService`) to fetch class data. It also provides functionality for navigating through months and selecting different days to view class information.
  Author: Tomio Nakamurakare
-->

<script>
import { ClassApiService } from '../../classes/services/class-api.service.js';

export default {
  data() {
    return {
      selectedDate: new Date(),
      monthDate: new Date(),
      allClasses: [],
      classesForDate: [],
      daysInMonth: [],
      classService: new ClassApiService()
    };
  },
  computed: {
    selectedDateFormatted() {
      return this.formatDate(this.selectedDate);
    },
    currentYear() {
      return this.monthDate.getFullYear();
    },
    currentMonthName() {
      return this.monthDate.toLocaleString(this.$i18n.locale, { month: 'long' });
    }
  },
  created() {
    this.loadAllClasses();
  },
  methods: {
    async loadAllClasses() {
      try {
        this.allClasses = await this.classService.getAllClasses();
        this.loadClassesForDate();
        this.generateMonthView(); // Genera la vista mensual inicial
      } catch (error) {
        console.error('Error loading classes:', error);
      }
    },
    onDateChange() {
      this.loadClassesForDate();
    },
    loadClassesForDate() {
      const selected = this.formatDate(this.selectedDate);
      this.classesForDate = this.allClasses.filter(cls => cls.date === selected);
    },
    formatDate(date) {
      const d = new Date(date);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
    generateMonthView() {
      const year = this.monthDate.getFullYear();
      const month = this.monthDate.getMonth();
      const numDays = new Date(year, month + 1, 0).getDate();

      const days = [];
      for (let i = 1; i <= numDays; i++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        const classes = this.allClasses.filter(cls => cls.date === dateStr);
        days.push({day: i, classes});
      }

      this.daysInMonth = days;
    },
    onMonthChange({month, year}) {
      this.monthDate = new Date(year, month - 1, 1);
    }
  },
  watch: {
    selectedDate() {
      this.onDateChange();
    },
    monthDate() {
      this.generateMonthView();
    }
  }
};
</script>

<template>
  <div class="calendar-layout">
    <div class="calendar-top-section">
      <pv-datepicker
          v-model="selectedDate"
          inline
          date-format="yy-mm-dd"
          @date-select="onDateChange"
          @month-change="onMonthChange"
          aria-label="Select a date for classes"/>

      <div class="class-panel" aria-live="polite">
        <h2>{{$t('calendar.class-panel')}} {{ selectedDateFormatted }}</h2>
        <ul v-if="classesForDate.length">
          <li v-for="(cls, i) in classesForDate" :key="i">
            {{ cls.name }} ({{ cls.time }}) - {{ cls.trainerName }}
          </li>
        </ul>
        <p v-else>{{$t('calendar.no-classes')}}</p>
      </div>
    </div>

    <div class="month-view">
      <h2>{{$t('calendar.month-view')}} ({{ currentMonthName }} {{ currentYear }})</h2>
      <div class="calendar-grid">
        <div class="day-cell" v-for="(day, i) in daysInMonth" :key="i">
          <div class="day-number">{{ day.day }}</div>
          <ul v-if="day.classes.length">
            <li v-for="(cls, j) in day.classes" :key="j" class="class-name">
              {{ cls.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

.calendar-layout {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
}

.calendar-top-section {
  display: flex;
  gap: 5rem;
}

.class-panel {
  width: 100%;
}

.month-selector {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.class-panel,
.month-view {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.8rem;
  margin-top: 1rem;
}

.day-cell {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 0.5rem;
  border-radius: 6px;
  min-height: 70px;
  font-size: 0.85rem;
}

.day-number {
  font-weight: bold;
  margin-bottom: 0.3rem;
}

.class-name {
  font-size: 0.75rem;
  color: #3366cc;
}

.month-view li {
  list-style: none;
}

</style>
