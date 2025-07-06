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
      formatLocalDate(date) {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      },
      async loadAllClasses() {
        try {
          const rawClasses = await this.classService.getAllClasses();

          this.allClasses = rawClasses.map(cls => {
            return {
              ...cls,
              date: this.formatLocalDate(cls.startDate) // ✅ fecha local segura
            };
          });

          this.loadClassesForDate();
          this.generateMonthView();
        } catch (error) {
          console.error('Error loading classes:', error);
        }
      },
    onDateChange() {
      this.loadClassesForDate();
    },
    loadClassesForDate() {
      const selected = this.formatDate(this.selectedDate);
      this.classesForDate = this.allClasses
          .filter(cls => cls.date === selected)
          .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
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
        const classes = this.allClasses.filter(cls => cls.date === dateStr)
            .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

        days.push({ day: i, classes });
      }

      this.daysInMonth = days;
    },
    async onMonthChange({ month, year }) {
      const grid = this.$el.querySelector('.calendar-grid');
      grid.classList.add('fade-out');

      setTimeout(() => {
        this.monthDate = new Date(year, month - 1, 1);
        grid.classList.remove('fade-out');
      }, 250);
    },
    isSelectedDate(dayNumber) {
      const selected = new Date(this.selectedDate);
      return (
          selected.getDate() === dayNumber &&
          selected.getMonth() === this.monthDate.getMonth() &&
          selected.getFullYear() === this.monthDate.getFullYear()
      );
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
            <strong>{{ cls.name }} - </strong>
            <span>({{ cls.time }})</span>
            <span> - {{ cls.trainerName }} - </span>
            <span class="status-tag" :class="cls.status.toLowerCase()">
      {{ $t(`classes.${cls.status.toLowerCase()}`) }}
    </span>
          </li>
        </ul>
        <p v-else>{{$t('calendar.no-classes')}}</p>
      </div>
    </div>

    <div class="month-view">
      <h2>{{$t('calendar.month-view')}} ({{ currentMonthName }} {{ currentYear }})</h2>
      <div class="calendar-grid">
        <div
            class="day-cell"
            :class="{ selected: isSelectedDate(day.day) }"
            v-for="(day, i) in daysInMonth"
            :key="i"
        >
          <div class="day-number">
            {{ day.day }}
            <span v-if="day.classes.length" class="badge">{{ day.classes.length }} {{ $t('calendar.classes') }}</span>
            <span v-if="day.classes.some(c => c.status === 'Confirmed')" class="dot dot-confirmed"></span>
            <span v-if="day.classes.some(c => c.status === 'Pending')" class="dot dot-pending"></span>
            <span v-if="day.classes.some(c => c.status === 'Cancelled')" class="dot dot-cancelled"></span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

.status-tag {
  margin-left: 0.5rem;
  padding: 2px 6px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: capitalize;
  color: white;
}

.status-tag.confirmed {
  background-color: #4CAF50;
}
.status-tag.pending {
  background-color: #FFC107;
  color: black;
}
.status-tag.cancelled {
  background-color: #F44336;
}

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
  transition: opacity 0.3s ease;
}

.calendar-grid.fade-out {
  opacity: 0;
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

.has-classes {
  background-color: #eef4ff;
  border: 1px solid #6699ff;
}

.dot-indicator {
  display: block;
  width: 6px;
  height: 6px;
  background-color: #3366cc;
  border-radius: 50%;
  margin: 4px auto 0;
}

.day-cell.selected {
  background-color: #e6f0ff;
  border: 2px solid #3366cc;
}

.badge {
  background-color: #3366cc;
  color: white;
  font-size: 0.65rem;
  padding: 2px 6px;
  border-radius: 999px;
  margin-left: 5px;
}

.dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.dot-confirmed {
  background-color: #4CAF50; /* verde */
}
.dot-pending {
  background-color: #FFC107; /* amarillo */
}
.dot-cancelled {
  background-color: #F44336; /* rojo */
}

</style>
