
<!--
  This Vue component represents the system settings page, where users can customize various settings such as language, measurement units, timezone, notifications, and currency. The settings are passed in as props from a parent component. The component uses the `pv-select` component to allow users to select different options for each setting. Changes to the settings are emitted back to the parent component via the `settings-updated` event. The component also contains computed properties to handle the available options for notifications.

  Author: Juan Alvarado
-->

<script>

export default {
  props: {
    settings: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      selectedLanguage: this.settings.language,
      languages: ['English', 'Español'],
      selectedUnit: this.settings.units,
      units: ['kg/cm', 'lb/in'],
      selectedTimezone: this.settings.timezone,
      timezones: ['GMT-5', 'GMT-4', 'GMT-3'],
      selectedCurrency: this.settings.currency,
      currencies: ['USD', 'EUR', 'PEN', 'BRL'],
      selectedNotifications: this.settings.notifications
    };
  },
  computed: {
    notificationOptions() {
      return [
        { value: 'enabled', label: this.$t('profile.notification-options.enabled') },
        { value: 'disabled', label: this.$t('profile.notification-options.disabled') },
        { value: 'important-only', label: this.$t('profile.notification-options.important-only') }
      ];
    }
  },
  methods: {
    updateSettings(key, value) {
      this.$emit('settings-updated', { key, value });
    }
  }
};
</script>

<template>
  <div v-if="settings" class="settings-container">
    <h2 class="section-title" aria-live="polite">{{ $t('profile.settings.title') }}</h2>
    <div class="divider"></div>

    <div class="settings-group">
      <div class="setting-item">
        <span class="setting-label">{{ $t('profile.settings.language') }}:</span>
        <pv-select
            v-model="selectedLanguage"
            :options="languages"
            @change="updateSettings('language', $event.value)"
            aria-label="Select language"
        />
      </div>

      <div class="setting-item">
        <span class="setting-label">{{ $t('profile.settings.measurementUnit') }}:</span>
        <pv-select
            v-model="selectedUnit"
            :options="units"
            @change="updateSettings('units', $event.value)"
            aria-label="Select measurement unit"
        />
      </div>

      <div class="setting-item">
        <span class="setting-label">{{ $t('profile.settings.timezone') }}:</span>
        <pv-select
            v-model="selectedTimezone"
            :options="timezones"
            @change="updateSettings('timezone', $event.value)"
            aria-label="Select timezone"
        />
      </div>

      <div class="setting-item">
        <span class="setting-label">{{ $t('profile.settings.notifications') }}:</span>
        <pv-select
            v-model="selectedNotifications"
            :options="notificationOptions"
            optionLabel="label"
            optionValue="value"
            @change="updateSettings('notifications', $event.value)"
            aria-label="Select notification option"
        />
      </div>

      <div class="setting-item">
        <span class="setting-label">{{ $t('profile.settings.currency') }}:</span>
        <pv-select
            v-model="selectedCurrency"
            :options="currencies"
            @change="updateSettings('currency', $event.value)"
            aria-label="Select currency"
        />
      </div>

      <div class="setting-item">
        <span class="setting-label">{{ $t('profile.settings.help') }}</span>
        <span class="help-arrow">>></span>
      </div>
    </div>
  </div>

  <div v-else>
    <p aria-live="polite">{{ $t('general.loading') }} . . .</p>
  </div>
</template>


<style scoped>
.settings-container {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.section-title {
  color: #2c3e50;
  font-size: 1.4rem;
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

.p-dropdown {
  padding: 8px 12px;
}
</style>
