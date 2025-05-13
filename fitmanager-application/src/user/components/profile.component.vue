<script>
import { UserApiService } from '../services/user-api.service.js';
import HeaderComponent from './info.component.vue';
import SystemSettings from './settings.component.vue';
import AccountInfo from './gym-profile.component.vue';
import { useI18n } from 'vue-i18n';

export default {
  components: {
    UserApiService,
    HeaderComponent,
    AccountInfo,
    SystemSettings
  },
  setup() {
    const { locale } = useI18n();
    return { locale };
  },
  data() {
    return {
      user: null,
      error: null
    };
  },
  methods: {
    fetchUserInfo() {
      const service = new UserApiService();
      service.getUserById(1).then(data => {
        this.user = data;
      });

    },
    handleSettingsUpdate({ key, value }) {
      // Actualizar el setting en el objeto user
      this.user.settings[key] = value;
      // Si el setting actualizado es el idioma, cambiar el locale
      if (key === 'language') {
        this.setLocaleFromLanguage(value);
      }
      const service = new UserApiService();
      service.updateUserSettings(this.user.id, { [key]: value });
    },
    setLocaleFromLanguage(language) {
      // Mapear el lenguaje seleccionado al código de locale
      const localeMap = {
        'English': 'en',
        'Español': 'es',
      };
      this.locale = localeMap[language] || 'en';
    },
  },
  mounted(){
    this.fetchUserInfo();
  }
};
</script>

<template>
  <div v-if="user" class="dashboard-container">
    <!-- 1. CUADRO SUPERIOR (Header) -->
    <div class="top-section">
      <HeaderComponent v-if="user" :user="user" />
    </div>

    <!-- 2. CUADROS INFERIORES (Mitad izquierda/derecha) -->
    <div class="bottom-container">
      <div class="left-section">
        <AccountInfo v-if="user" :user="user" />
      </div>
      <div class="right-section">
        <SystemSettings
            v-if="user"
            :settings="user.settings"
            @settings-updated="handleSettingsUpdate"
        />
      </div>
    </div>
  </div>

  <div v-else>
    {{ $t('general.loading') }} . . .
  </div>
</template>

<style scoped>
.dashboard-container {
  padding: 20px;
  background-color: #f0f2f5;
  min-height: 100vh;
}

.top-section {
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  height: auto; /* Altura automática según contenido */
}

.bottom-container {
  display: flex;
  gap: 20px;
  height: auto; /* Cambiamos de min-height a height auto */
}

.dashboard-container {
  padding: 20px;
  background-color: #f0f2f5; /* Fondo gris claro */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px; /* Espacio entre cuadros */
}

/* CUADRO SUPERIOR */
.top-section {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  height: auto; /* Se ajusta al contenido */
}

/* CONTENEDOR DE MITADES INFERIORES */
.bottom-container {
  display: flex;
  gap: 20px;
  flex: 1; /* Ocupa el espacio restante */
}

/* CUADROS IZQUIERDO Y DERECHO */
.left-section, .right-section {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  height: fit-content; /* Altura según contenido */
}

/* Responsive */
@media (max-width: 768px) {
  .bottom-container {
    flex-direction: column;
  }
}

.left-section, .right-section {
  flex: 1;
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  height: fit-content; /* Ajusta altura al contenido */
  max-height: 400px; /* Altura máxima opcional */
  overflow-y: auto; /* Scroll si el contenido excede la altura */
}

/* Versión móvil */
@media (max-width: 768px) {
  .bottom-container {
    flex-direction: column;
  }

  .left-section, .right-section {
    max-height: none; /* Eliminamos límite en móvil */
  }
}
</style>