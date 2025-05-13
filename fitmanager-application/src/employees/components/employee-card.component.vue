<script>
import { Button as PvButton } from "primevue";

export default {
  name: "EmployeeCard",
  components: { PvButton },
  props: {
    employee: {
      type: Object,
      required: true
    }
  },
  computed: {
    statusColor() {
      switch (this.employee.role) {
        case 'trainer':
          return 'darkgreen';
        case 'group instructor':
          return 'darkgoldenrod';
        case 'cleaning':
          return 'darkred';
        case 'reception':
          return 'darkblue';
        default:
          return 'black';
      }
    }
  }
};
</script>

<template>
  <pv-card v-if="employee" class="employee-card">
    <!-- Profile picture + Name header -->
    <template #header>
      <div class="header">
        <img :src="employee.profilePicture" alt="Profile" class="profile-img" />
        <h2 class="name">{{ employee.fullName }}</h2>
      </div>

      <!-- Status text -->
      <p class="status" :style="{ color: statusColor }">
        <strong>{{ employee.role.toUpperCase() }}</strong>
      </p>

      <hr />
    </template>

    <template #content>
      <!-- Personal info -->
      <div class="section">
        <p><strong>DNI:</strong> {{ employee.dni }}</p>
        <p><strong>{{ $t('employees.age')}}:</strong> {{ employee.age }}</p>
        <p><strong>{{ $t('employees.email')}}:</strong> {{ employee.email }}</p>
        <p><strong>{{ $t('employees.phone')}}:</strong> {{ employee.phone }}</p>
        <p><strong>{{ $t('employees.address')}}:</strong> {{ employee.address }}</p>
      </div>

      <hr />

      <!-- Membership dates & type -->
      <div class="section">
        <p><strong>{{ $t('employees.weekly-hours')}}:</strong> {{ employee.hoursPerWeek }}</p>
        <p><strong>{{ $t('employees.hourly-wage')}}: </strong> {{ employee.hourlyWage }}</p>
        <p><strong>{{ $t('employees.specialities')}}: </strong>
          <span v-if="employee.specialties.length">{{ employee.specialties.join(', ') }}</span>
          <span v-else>None</span>
        </p>
        <p><strong>{{ $t('employees.certifications')}}: </strong>
          <span v-if="employee.certifications.length">{{ employee.certifications.join(', ') }}</span>
          <span v-else>None</span>
        </p>

      </div>

      <hr />

      <!-- Action buttons -->
      <div class="actions">
        <pv-button :label="$t('employees.edit-details')" class="action-btn" @click="$emit('edit-request')"/>
        <pv-button :label="$t('employees.schedule-assignment')" class="action-btn" />
        <pv-button :label="$t('employees.fire')" class="action-btn"  @click="$emit('fire-request')"/>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.p-card {
  background-color: white;
  color: black;
  width: 100%;
  max-width: 400px;
}

.employee-card {
  max-width: 400px;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.profile-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.75rem;
}

.name {
  margin: 0;
  font-size: 1.5rem;
}

.status {
  font-weight: bold;
}

.section {
  margin: 0.75rem 0;
}

/* Celeste lineas (hr) */
hr {
  border: 1px solid #A7D1D2;
  margin: 1rem 0;
}

/* Action buttons */
.actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}

.action-btn {
  width: 100%;
  background-color: white;
  border: 1px solid #A7D1D2;
  color: black; /* Texto negro */
}

/* Hover, ahora con !important para asegurar que no sea sobrescrito */
.action-btn:hover {
  background-color: #A7D1D2 !important; /* Fondo celeste en hover */
  color: white !important; /* Texto blanco en hover */
  border-color: #8FBFC0 !important;
}
</style>
