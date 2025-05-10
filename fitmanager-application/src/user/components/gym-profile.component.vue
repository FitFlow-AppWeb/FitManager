<template>
  <div class="settings-container">
    <h2 class="section-title">Settings</h2>
    <div class="divider"></div>

    <div class="settings-group">
      <div class="setting-item">
        <span class="setting-label">Language:</span>
        <Dropdown
            v-model="selectedLanguage"
            :options="languages"
            @change="updateSettings('language', $event.value)"
        />
      </div>

      <div class="setting-item">
        <span class="setting-label">Measurement Unit:</span>
        <Dropdown
            v-model="selectedUnit"
            :options="units"
            @change="updateSettings('units', $event.value)"
        />
      </div>

      <div class="setting-item">
        <span class="setting-label">Timezone:</span>
        <Dropdown
            v-model="selectedTimezone"
            :options="timezones"
            @change="updateSettings('timezone', $event.value)"
        />
      </div>

      <div class="setting-item">
        <span class="setting-label">Notifications:</span>
        <Dropdown
            v-model="selectedNotifications"
            :options="notificationOptions"
            @change="updateSettings('notifications', $event.value)"
        />
      </div>

      <div class="setting-item">
        <span class="setting-label">Currency:</span>
        <Dropdown
            v-model="selectedCurrency"
            :options="currencies"
            @change="updateSettings('currency', $event.value)"
        />
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
  components: { Dropdown },
  props: {
    settings: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedLanguage: this.settings.language,
      languages: ['English', 'Español', 'Português'],
      selectedUnit: this.settings.units,
      units: ['kg/cm', 'lb/in'],
      selectedTimezone: this.settings.timezone,
      timezones: ['GMT-5', 'GMT-4', 'GMT-3'],
      selectedNotifications: this.settings.notifications,
      notificationOptions: ['Enabled', 'Disabled', 'Important only'],
      selectedCurrency: this.settings.currency,
      currencies: ['USD', 'EUR', 'PEN', 'BRL']
    };
  },
  methods: {
    updateSettings(key, value) {
      this.$emit('settings-updated', { key, value });
    }
  }
};
</script>

<style scoped>
.settings-container {
  background: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.section-title {
  color: #2c3e50;
  font-size: 1.4rem;
  margin-bottom: 15px;
}

.divider {
  height: 1px;
  background-color: #e0e0e0;
  margin-bottom: 20px;
}

.settings-group {
  display: flex;
  flex-direction: column;
  gap: 18px;
  flex-grow: 1;
}

.settings-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.settings-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f5f5f5;
}

.setting-label {
  font-weight: 500;
  color: #555;
  font-size: 0.95rem;
}

.help-arrow {
  color: #3498db;
  font-weight: bold;
  font-size: 1.1rem;
}

/* Ajustes para PrimeVue Dropdown */
.p-dropdown {
  width: 180px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.p-dropdown .p-dropdown-label {
  padding: 8px 12px;
}
</style>