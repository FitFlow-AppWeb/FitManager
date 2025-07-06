<script>
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

export default {
  name: "EmployeeScheduleModal",
  props: {
    employeeId: {
      type: Number,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      allClasses: [],
      loading: true,
      expandedIds: []
    };
  },
  computed: {
    filteredClasses() {
      return this.allClasses.filter(cls => cls.employeeId === this.employeeId);
    }
  },
  methods: {
    async fetchClasses() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${BASE_URL}/api/v1/Classes`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log("✅ Clases recibidas:", response.data.data);
        this.allClasses = response.data.data;
      } catch (error) {
        console.error("❌ Error fetching classes:", error);
      } finally {
        this.loading = false;
      }
    },
    formatDate(dateStr) {
      const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      return new Date(dateStr).toLocaleDateString(undefined, options);
    },
    toggleDetails(id) {
      if (this.expandedIds.includes(id)) {
        this.expandedIds = this.expandedIds.filter(i => i !== id);
      } else {
        this.expandedIds.push(id);
      }
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.fetchClasses();
      }
    }
  }
};
</script>

<template>
  <div class="modal-overlay" v-if="visible">
    <div class="modal-content">
      <pv-button
          icon="pi pi-times"
          class="p-button-rounded p-button-danger close-button"
          @click="$emit('close')"
      />
      <h2 class="modal-title">{{ $t('employees.schedule-title') }}</h2>

      <div v-if="loading" class="loading">{{ $t('general.loading') }}...</div>
      <div v-else-if="filteredClasses.length === 0" class="no-classes">{{ $t('employees.no-classes') }}</div>
      <div v-else class="class-list">
        <div v-for="classItem in filteredClasses" :key="classItem.id" class="class-entry">
          <p><strong>{{ classItem.name }}</strong> - {{ formatDate(classItem.startDate) }}</p>
          <pv-button
              icon="pi pi-info-circle"
              class="details-button"
              @click="toggleDetails(classItem.id)"
              :label="$t('general.details')"
          />
          <div v-if="expandedIds.includes(classItem.id)" class="class-details">
            <p><strong>{{ $t('classes.description') }}:</strong> {{ classItem.description }}</p>
            <p><strong>{{ $t('classes.type') }}:</strong> {{ classItem.type }}</p>
            <p><strong>{{ $t('classes.capacity') }}:</strong> {{ classItem.capacity }}</p>
            <p><strong>{{ $t('classes.duration') }}:</strong> {{ classItem.duration }} min</p>
            <p><strong>{{ $t('classes.status') }}:</strong> {{ classItem.status }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(80, 80, 80, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}
.modal-content {
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
}
.modal-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  top: 0;
  background: white;
  z-index: 1;
  display: flex;
}
.close-button {
  position: absolute;
  top: 3rem;
  left: 90%;
  z-index: 2;
}

.class-list {
  padding-right: 0.5rem;
}

.class-entry {
  border-bottom: 1px solid #ddd;
  padding: 0.5rem 0;
}

.class-details {
  margin-top: 0.5rem;
  padding-left: 1rem;
  color: #555;
}

.details-button {
  background-color: #a7d1d2;
  border: none;
  transition: background-color 0.3s ease;
}
.details-button:hover {
  background-color: rgba(167, 209, 210, 0.8) !important;
}


</style>