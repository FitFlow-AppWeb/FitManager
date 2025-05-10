<template>
  <div class="settings-container">
    <h2 class="section-title">Settings</h2>
    <div class="divider"></div>

    <div class="settings-group">
      <div class="setting-item">
        <span class="setting-label">Language:</span>
        <Dropdown v-model="selectedLanguage" :options="languages" />
      </div>

      <div class="setting-item">
        <span class="setting-label">Measurement Unit:</span>
        <Dropdown v-model="selectedUnit" :options="units" />
      </div>

      <div class="setting-item">
        <span class="setting-label">Timezone:</span>
        <Dropdown v-model="selectedTimezone" :options="timezones" />
      </div>

      <div class="setting-item">
        <span class="setting-label">Notifications:</span>
        <Dropdown v-model="selectedNotifications" :options="notificationOptions" />
      </div>

      <div class="setting-item">
        <span class="setting-label">Currency:</span>
        <Dropdown v-model="selectedCurrency" :options="currencies" />
      </div>

      <div class="setting-item">
        <span class="setting-label">Help</span>
        <span class="help-arrow">>></span>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from 'primevue/dropdown';

export default {
  components: {
    Dropdown
  },
  data() {
    return {
      selectedLanguage: 'Español',
      languages: ['Español', 'English', 'Português'],

      selectedUnit: 'kg/cm',
      units: ['kg/cm', 'lb/in'],

      selectedTimezone: 'GMT-5',
      timezones: ['GMT-5', 'GMT-4', 'GMT-3', 'GMT-6'],

      selectedNotifications: 'Activadas',
      notificationOptions: ['Activadas', 'Desactivadas', 'Solo importantes'],

      selectedCurrency: 'S/ (PEN)',
      currencies: ['S/ (PEN)', '$ (USD)', '€ (EUR)', 'R$ (BRL)']
    };
  }
};
</script>

<style scoped>
.settings-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.section-title {
  color: #2c3e50;
  font-size: 1.3rem;
  margin-bottom: 20px;
}

.divider {
  height: 1px;
  background-color: #a0c4e0; /* Celeste-gris */
  margin-bottom: 2px;
}

.settings-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
}

.setting-label {
  font-weight: 500;
  color: #555;
}

.help-arrow {
  color: #3498db;
  font-weight: bold;
  font-size: 1.1rem;
}

/* Estilos para el dropdown */
.p-dropdown {
  width: 150px;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
}

.p-dropdown-trigger {
  color: #666;
}
</style>