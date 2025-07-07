<script>
import { UserApiService } from '../services/user-api.service.js';
import { authApiService } from '../../login/services/auth-api.service.js';

import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';

export default {
  name: 'AccountInfo',
  components: {
    'pv-dialog': Dialog,
    'pv-inputtext': InputText,
    'pv-button': Button,
    'pv-toast': Toast
  },
  data() {
    return {
      currentUser: null,
      userApiService: null,
      displayEditDialog: false,
      editableUser: {
        id: null,
        email: '',
        password: '',
        icon: '',
        subscription: ''
      }
    };
  },
  created() {
    this.userApiService = new UserApiService();
    this.fetchUserProfile();
  },
  methods: {
    async fetchUserProfile() {
      try {
        const userId = localStorage.getItem('userId');
        if (!userId) {
          console.error("User ID not found in localStorage. Cannot fetch profile. Redirecting to Login.");
          this.$router.push({ name: 'Login' });
          return;
        }
        this.currentUser = await this.userApiService.getUserById(parseInt(userId));
        this.editableUser = {
          id: this.currentUser.id,
          email: this.currentUser.email,
          password: '',
          icon: this.currentUser.icon,
          subscription: this.currentUser.subscription
        };
      } catch (error) {
        console.error("Error fetching user profile:", error);
        this.$toast.add({
          severity: 'error',
          summary: this.$t('toast.userProfileErrorSummary'),
          detail: this.$t('toast.userProfileErrorDetail'),
          life: 3000
        });
      }
    },
    openEditDialog() {
      this.editableUser = {
        id: this.currentUser.id,
        email: this.currentUser.email,
        password: '',
        icon: this.currentUser.icon,
        subscription: this.currentUser.subscription
      };
      this.displayEditDialog = true;
    },
    async saveUserProfile() {
      try {
        if (!this.editableUser.email || !this.editableUser.icon || !this.editableUser.subscription) {
          this.$toast.add({
            severity: 'warn',
            summary: this.$t('toast.validationWarningSummary'),
            detail: this.$t('toast.requiredFieldsWarning'),
            life: 3000
          });
          return;
        }

        this.currentUser = await this.userApiService.updateProfile(this.editableUser.id, this.editableUser);
        this.displayEditDialog = false;
        this.$toast.add({
          severity: 'success',
          summary: this.$t('toast.profileUpdateSuccessSummary'),
          detail: this.$t('toast.profileUpdateSuccessDetail'),
          life: 3000
        });
      } catch (error) {
        console.error("Error saving user profile:", error);
        this.$toast.add({
          severity: 'error',
          summary: this.$t('toast.profileUpdateErrorSummary'),
          detail: error.response?.data?.message || this.$t('toast.profileUpdateErrorDetail'),
          life: 3000
        });
      }
    },
    cancelEdit() {
      this.displayEditDialog = false;
      this.editableUser = {
        id: this.currentUser.id,
        email: this.currentUser.email,
        password: '',
        icon: this.currentUser.icon,
        subscription: this.currentUser.subscription
      };
    },
    logout() {
      authApiService.logout();
      this.$router.push({ name: 'Login' });
      this.$toast.add({
        severity: 'info',
        summary: this.$t('toast.logoutSuccessSummary'),
        detail: this.$t('toast.logoutSuccessDetail'),
        life: 3000
      });
    }
  }
};
</script>

<template>
  <pv-toast></pv-toast> <div v-if="currentUser" class="personal-info-container p-card">
  <h2 class="section-title" aria-labelledby="personal-info-title">{{ $t('profile.settings.personalInformation') }}</h2> <div class="divider"></div>

  <div class="info-content">
    <div class="info-row">
      <span class="label" aria-label="Email">{{ $t('profile.settings.email') }}:</span>
      <span class="value" aria-live="polite">{{ currentUser.email }}</span>
    </div>
    <div class="info-row">
      <span class="label" aria-label="Password">{{ $t('profile.settings.password') }}:</span>
      <span class="value" aria-live="polite">*********************</span>
    </div>
    <div class="info-row">
      <span class="label" aria-label="Subscription">{{ $t('profile.settings.subscription') }}:</span>
      <span class="value" aria-live="polite">{{ currentUser.subscription }}</span>
    </div>
  </div>

  <div class="buttons-container">

    <pv-button
        :label="$t('profile.settings.logout')"
        icon="pi pi-sign-out"
        class="p-button-danger"
        @click="logout"
    />
  </div>
</div>

  <div v-else>
    <p aria-live="polite">{{ $t('general.loading') }} . . .</p>
  </div>

  <pv-dialog
      v-model:visible="displayEditDialog"
      :header="$t('profile.settings.editProfile')"
      :modal="true"
      class="p-fluid"
      :style="{width: '40vw'}"
  >
    <div class="p-field">
      <label for="editEmail">{{ $t('profile.settings-email') }}</label>
      <pv-inputtext id="editEmail" v-model="editableUser.email" required="true" :placeholder="$t('profile.settings.emailPlaceholder')"/>
    </div>
    <div class="p-field">
      <label for="editPassword">{{ $t('profile.settings.newPassword') }}</label>
      <pv-inputtext id="editPassword" type="password" v-model="editableUser.password" :placeholder="$t('profile.settings.passwordPlaceholder')"/>
      <small class="p-error">{{ $t('profile.settings.passwordNote') }}</small>
    </div>
    <div class="p-field">
      <label for="editIcon">{{ $t('profile.settings.iconUrl') }}</label>
      <pv-inputtext id="editIcon" v-model="editableUser.icon" required="true" :placeholder="$t('profile.settings.iconPlaceholder')"/>
    </div>
    <div class="p-field">
      <label for="editSubscription">{{ $t('profile.settings.subscription') }}</label>
      <pv-inputtext id="editSubscription" v-model="editableUser.subscription" required="true" :placeholder="$t('profile.settings.subscriptionPlaceholder')"/>
    </div>

    <template #footer>
      <pv-button :label="$t('common.cancel')" icon="pi pi-times" class="p-button-text" @click="cancelEdit"/>
      <pv-button :label="$t('common.save')" icon="pi pi-check" @click="saveUserProfile"/>
    </template>
  </pv-dialog>
</template>

<style scoped>
/* Estilos generales para el contenedor de información personal */
.personal-info-container {
  max-width: 600px;
  margin: 20px auto; /* Ajusta los márgenes según el diseño de tu layout */
  padding: 30px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.section-title {
  font-size: 1.8em;
  color: #333;
  text-align: center;
  font-weight: 600;
  margin-bottom: 15px;
}

.divider {
  border-bottom: 1px solid #eee;
  margin-bottom: 25px;
}

.info-content .info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  padding-bottom: 10px;
  border-bottom: 1px dashed #f0f0f0; /* Separador sutil */
}

.info-content .info-row:last-child {
  border-bottom: none; /* Elimina el borde del último elemento */
  margin-bottom: 0;
  padding-bottom: 0;
}

.info-content .label {
  font-weight: 500;
  color: #555;
  font-size: 1.1em;
  flex-basis: 40%; /* Ajusta el ancho de la etiqueta */
}

.info-content .value {
  font-weight: 700;
  color: #222;
  font-size: 1.1em;
  text-align: right;
  flex-basis: 58%; /* Ajusta el ancho del valor */
}

.buttons-container {
  display: flex;
  justify-content: flex-end; /* Alinea los botones a la derecha */
  gap: 15px; /* Espacio entre botones */
  padding-top: 25px;
  border-top: 1px solid #eee;
  margin-top: 30px;
}

/* Estilos para los botones de PrimeVue */
.p-button-primary {
  background-color: #007bff; /* Azul PrimeVue */
  border-color: #007bff;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 6px;
  transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.p-button-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

.p-button-danger {
  background-color: #dc3545; /* Rojo PrimeVue */
  border-color: #dc3545;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 6px;
  transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.p-button-danger:hover {
  background-color: #c82333;
  border-color: #c82333;
}

.p-mr-2 {
  margin-right: 0.75rem; /* Margen para separar el botón editar del logout */
}

/* Estilos del modal de edición */
.p-fluid .p-field {
  margin-bottom: 1.5rem;
}

.p-fluid .p-field label {
  display: block;
  margin-bottom: .5rem;
  font-weight: 500;
  color: #333;
}

.p-error {
  font-size: 0.85em;
  color: #e53935; /* Color rojo para notas de error/advertencia */
  margin-top: 5px;
}
</style>