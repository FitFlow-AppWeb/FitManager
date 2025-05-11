<template>
  <div class="dashboard-container">
    <!-- 1. CUADRO SUPERIOR (Header) -->
    <div class="top-section">
      <HeaderComponent :user="user" />
    </div>

    <!-- 2. CUADROS INFERIORES (Mitad izquierda/derecha) -->
    <div class="bottom-container">
      <div class="left-section">
        <AccountInfo :user="user" />
      </div>
      <div class="right-section">
        <SystemSettings
            :settings="user.settings"
            @settings-updated="handleSettingsUpdate"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '../services/user-info-api.service';
import HeaderComponent from './info.component.vue';
import AccountInfo from './settings.component.vue';
import SystemSettings from './gym-profile.component.vue';
import { useI18n } from 'vue-i18n';

export default {
  components: {
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
  async created() {
    try {
      this.user = await getUserInfo();
      console.log("Datos del usuario:", this.user);
      // Establecer el idioma inicial basado en los settings del usuario
      if (this.user.settings?.language) {
        this.setLocaleFromLanguage(this.user.settings.language);
      }
    } catch (error) {
      console.error("Error:", error);
      this.error = "Error loading data";
      this.user = this.getDefaultUserData();
    }
  },
  methods: {
    handleSettingsUpdate({ key, value }) {
      // Actualizar el setting en el objeto user
      this.user.settings[key] = value;

      // Si el setting actualizado es el idioma, cambiar el locale
      if (key === 'language') {
        this.setLocaleFromLanguage(value);
      }
    },
    setLocaleFromLanguage(language) {
      // Mapear el lenguaje seleccionado al código de locale
      const localeMap = {
        'English': 'en',
        'Español': 'es',
        'Português': 'pt'
      };
      this.locale = localeMap[language] || 'en';
    },
    getDefaultUserData() {
      return {
        role: "Admin",
        gymLogo: "/assets/gimnasio-profile.PNG",
        avatar: "/assets/logo-profile.PNG",
        settings: {
          language: "English",
          units: "kg/cm",
          timezone: "GMT-5",
          notifications: "Enabled",
          currency: "USD"
        },
        username: "powergym_peru",
        email: "messi@gmail.com",
        phone: "+51 999 530 751",
        plan: "Platinum",
        devices: 3
      };
    }
  }
};
</script>

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