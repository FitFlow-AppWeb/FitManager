<script>
import Select from 'primevue/select';
import Toast from 'primevue/toast';
import { useI18n } from 'vue-i18n'; // Importar useI18n para usar el sistema de traducción

export default {
  name: 'SystemSettings',
  components: {
    'pv-select': Select,
    'pv-toast': Toast
  },
  setup() {
    const { locale, t } = useI18n(); // Obtener 'locale' para cambiar el idioma, y 't' para traducir
    return { locale, t }; // Exponerlos para usar en el template y methods
  },
  data() {
    return {
      // Inicializar settings desde localStorage o valores por defecto
      // Y DEFINIR LAS OPCIONES COMO ARRAYS DE OBJETOS { label, value }
      selectedLanguage: localStorage.getItem('setting-language') || 'English',
      languages: [
        { label: 'English', value: 'English' },
        { label: 'Español', value: 'Español' }
      ],
      selectedUnit: localStorage.getItem('setting-units') || 'kg/cm',
      units: [
        { label: 'kg/cm', value: 'kg/cm' },
        { label: 'lb/in', value: 'lb/in' }
      ],
      selectedTimezone: localStorage.getItem('setting-timezone') || 'GMT-5',
      timezones: [
        { label: 'GMT-5', value: 'GMT-5' },
        { label: 'GMT-4', value: 'GMT-4' },
        { label: 'GMT-3', value: 'GMT-3' }
      ],
      selectedCurrency: localStorage.getItem('setting-currency') || 'USD',
      currencies: [
        { label: 'USD', value: 'USD' },
        { label: 'EUR', value: 'EUR' },
        { label: 'PEN', value: 'PEN' },
        { label: 'BRL', value: 'BRL' }
      ],
      selectedNotifications: localStorage.getItem('setting-notifications') || 'enabled', // Valor por defecto
    };
  },
  computed: {
    notificationOptions() {
      // Asegúrate de que notificationOptions esté mapeando correctamente al value y label usando this.t
      return [
        { value: 'enabled', label: this.t('profile.notification-options.enabled') },
        { value: 'disabled', label: this.t('profile.notification-options.disabled') },
        { value: 'important-only', label: this.t('profile.notification-options.important-only') }
      ];
    }
  },
  methods: {
    updateSettings(key, value) {
      // Guardar el setting en localStorage
      localStorage.setItem(`setting-${key}`, value);

      // ACTUALIZAR LA DATA REACTIVA DEL COMPONENTE para que la UI refleje el cambio inmediatamente
      switch (key) {
        case 'language':
          this.selectedLanguage = value;
          break;
        case 'units':
          this.selectedUnit = value;
          break;
        case 'timezone':
          this.selectedTimezone = value;
          break;
        case 'currency':
          this.selectedCurrency = value;
          break;
        case 'notifications':
          this.selectedNotifications = value;
          break;
      }

      // Emitir un evento si el padre necesita saber sobre el cambio
      this.$emit('settings-updated', { key, value });

      // Obtener el label traducido para el toast si es una opción con label/value
      let displayValue = value;
      if (key === 'notifications') {
        const selectedOption = this.notificationOptions.find(opt => opt.value === value);
        displayValue = selectedOption ? selectedOption.label : value;
      } else {
        // Para las otras opciones (language, units, timezone, currency) que ahora son objetos,
        // necesitamos encontrar el 'label' si quieres mostrar el texto amigable en el toast
        const currentOptions = this[key + 's']; // Ej. this.languages, this.units
        const selectedOption = currentOptions.find(opt => opt.value === value);
        displayValue = selectedOption ? selectedOption.label : value;
      }


      this.$toast.add({
        severity: 'success',
        summary: this.t('toast.settingsUpdateSuccessSummary'), // Usar this.t aquí
        detail: `${this.t('toast.settingUpdatedDetail')} ${this.t(`profile.settings.${key}`)}: ${displayValue}`, // Usar this.t aquí
        life: 2000
      });

      // Si el setting actualizado es el idioma, cambiar el locale
      if (key === 'language') {
        this.setLocaleFromLanguage(value);
      }
    },
    setLocaleFromLanguage(language) {
      const localeMap = {
        'English': 'en',
        'Español': 'es',
      };
      this.locale = localeMap[language] || 'en'; // Usamos this.locale del setup
    }
  }
};
</script>

<template>
  <pv-toast></pv-toast>
  <div class="settings-container">
    <h2 class="section-title" aria-live="polite">{{ $t('profile.settings.title') }}</h2>
    <div class="divider"></div>

    <div class="settings-group">
      <div class="setting-item">
        <span class="setting-label">{{ $t('profile.settings.language') }}:</span>
        <pv-select
            v-model="selectedLanguage"
            :options="languages"
            optionLabel="label"
            optionValue="value"
            @change="updateSettings('language', $event.value)"
            aria-label="Select language"
        />
      </div>

      <div class="setting-item">
        <span class="setting-label">{{ $t('profile.settings.measurementUnit') }}:</span>
        <pv-select
            v-model="selectedUnit"
            :options="units"
            optionLabel="label"
            optionValue="value"
            @change="updateSettings('units', $event.value)"
            aria-label="Select measurement unit"
        />
      </div>

      <div class="setting-item">
        <span class="setting-label">{{ $t('profile.settings.timezone') }}:</span>
        <pv-select
            v-model="selectedTimezone"
            :options="timezones"
            optionLabel="label"
            optionValue="value"
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
            optionLabel="label"
            optionValue="value"
            @change="updateSettings('currency', $event.value)"
            aria-label="Select currency"
        />
      </div>

      <div class="setting-item">
        <span class="setting-label">{{ $t('profile.settings.help') }}</span>
        <a href="https://www.trainingsolutions.com/pdf/outstanding.pdf" target="_blank" class="help-arrow" aria-label="Go to help documentation">
          >>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Mantén tus estilos aquí */
.settings-container {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  height: fit-content;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.section-title {
  color: #333;
  font-size: 1.8em;
  text-align: center;
  font-weight: 600;
  margin-bottom: 15px;
}

.divider {
  height: 1px;
  background-color: #eee;
  margin-bottom: 25px;
}

.settings-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px dashed #f0f0f0;
}

.setting-item:last-child {
  border-bottom: none;
}

.setting-label {
  font-weight: 500;
  color: #555;
  font-size: 1.1em;
  flex-basis: 60%;
}

.help-arrow {
  color: #3498db;
  font-weight: bold;
  font-size: 1.2em;
  cursor: pointer;
  transition: color 0.2s;
}

.help-arrow:hover {
  color: #217dbb;
}

.p-select {
  width: 150px;
  min-width: 120px;
  font-size: 1em;
}
</style>