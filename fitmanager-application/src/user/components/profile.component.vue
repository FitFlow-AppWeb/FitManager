<script>
import {UserApiService} from '../services/user-api.service.js';
import UserHeaderComponent from './user-header.component.vue';
import SystemSettings from './settings.component.vue'; // ¡Descomentamos esta línea!
import UserInfoComponent from './user-info.component.vue';
import {useI18n} from 'vue-i18n';

export default {
  name: 'UserProfilePage',
  components: {
    UserHeaderComponent,
    UserInfoComponent,
    SystemSettings // ¡Descomentamos esta línea!
  },
  setup() {
    const { locale } = useI18n();
    return { locale };
  },
  data() {
    return {
      user: null,
      userApiService: null,
      error: null
    };
  },
  methods: {
    async fetchUserInfo() {
      try {
        this.userApiService = new UserApiService();
        const userId = localStorage.getItem('userId');

        if (!userId) {
          console.error("User ID not found in localStorage. Cannot fetch profile.");
          this.error = "User not logged in or ID not found.";
          this.$router.push({ name: 'Login' });
          return;
        }

        this.user = await this.userApiService.getUserById(parseInt(userId));
        console.log("Fetched user data:", this.user);
      } catch (err) {
        this.error = "Error fetching user information.";
        console.error("Error fetching user info in ProfileComponent:", err);
      }
    },

    handleSettingsUpdate({ key, value }) {
      // Si el setting actualizado es el idioma, cambiar el locale
      if (key === 'language') {
        this.setLocaleFromLanguage(value);
      }
      // Nota: ya no llamamos a UserApiService.updateUserSettings aquí,
      // porque SystemSettings ahora guarda en localStorage.
      console.log(`Setting updated in localStorage: ${key} = ${value}`);
    },
    setLocaleFromLanguage(language) {
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
    <div class="top-section">
      <UserHeaderComponent :user="user" aria-live="polite"/>
    </div>

    <div class="bottom-container">
      <div class="left-section">
        <UserInfoComponent :user="user" aria-live="polite"/>
      </div>
      <div class="right-section">
        <SystemSettings
            @settings-updated="handleSettingsUpdate"
            aria-live="polite"
        />
      </div>
    </div>
  </div>

  <div v-else>
    <p aria-live="polite">{{ $t('general.loading') }} . . .</p>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<style scoped>
/* ... (mantener los estilos existentes) ... */
.dashboard-container {
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px; /* Espacio entre cuadros */
  background-color: #f5f5f5; /* Fondo ligero para el dashboard */
}

.top-section {
  height: auto;
}

.bottom-container {
  display: flex;
  gap: 30px;
  flex: 1;
}

.left-section, .right-section {
  height: fit-content;
  flex: 1;
}

@media (max-width: 768px) {
  .bottom-container {
    flex-direction: column;
  }
  .left-section, .right-section {
    flex: unset;
    width: 100%;
  }
}

.error-message {
  color: #e53935;
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
}
</style>