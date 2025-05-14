<!--
  This code defines a Vue component called 'AccountInfo'. It displays the personal information of a user, such as username, email, password (hidden), phone, and devices. The data is passed to the component via the `user` prop. If the `user` object is available, the component renders the user’s details. Otherwise, it displays a loading message. Additionally, there are buttons for editing the account and logging out.
  The component also includes internationalization (i18n) for dynamic text rendering based on the user's language preference.

  Author: Juan Alvarado
-->

<script>
import { UserApiService } from '../services/user-api.service.js';

export default {
  name: 'AccountInfo',
  components: { UserApiService },
  props: {
    user: Object,
    required: true
  },
};
</script>

<template>
  <div v-if="user" class="personal-info-container">
    <h2 class="section-title" aria-labelledby="personal-info-title">{{ $t('profile.personal-info.title') }}</h2>
    <div class="divider"></div>

    <div class="info-content">
      <div class="info-row">
        <span class="label" aria-label="Username">{{ $t('profile.personal-info.username') }}</span>
        <span class="value" aria-live="polite">{{ user.username }}</span>
      </div>
      <div class="info-row">
        <span class="label" aria-label="Email">{{ $t('profile.personal-info.email') }}:</span>
        <span class="value" aria-live="polite">{{ user.email }}</span>
      </div>
      <div class="info-row">
        <span class="label" aria-label="Password">{{ $t('profile.personal-info.password') }}:</span>
        <span class="value" aria-live="polite">*********************</span>
      </div>
      <div class="info-row">
        <span class="label" aria-label="Phone number">{{ $t('profile.personal-info.phone') }}:</span>
        <span class="value" aria-live="polite">{{ user.phone }}</span>
      </div>
      <div class="info-row">
        <span class="label" aria-label="Devices">{{ $t('profile.personal-info.devices') }}:</span>
        <span class="value" aria-live="polite">{{ user.devices }}</span>
      </div>
    </div>

    <div class="buttons-container">
      <button class="edit-btn" aria-label="Edit account information">{{ $t('profile.buttons.edit') }}</button>
      <button class="logout-btn" aria-label="Log out of the account">{{ $t('profile.buttons.logout') }}</button>
    </div>
  </div>

  <div v-else>
    <p aria-live="polite">{{ $t('general.loading') }} . . .</p>
  </div>
</template>


<style scoped>
.personal-info-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.section-title {
  color: #2c3e50;
  font-size: 1.3rem;
  margin-bottom: 12px;
}

.divider {
  height: 1px;
  background-color: #a0c4e0;
  margin-bottom: 20px;
}

.info-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.account-info {
  display: flex;
  flex-direction: column;
  gap: 15px; /* Espacio entre elementos */
}

.info-row {
  display: flex;
  justify-content: space-between;
}

.label {
  font-weight: 500;
  color: #555;
}

.value {
  color: #333;
  font-weight: 400;
}

.buttons-container {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
}

.edit-btn, .logout-btn {
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.edit-btn {
  background: white;
  border: 1px solid #3498db;
  color: #3498db;
}

.edit-btn:hover {
  background: #f0f8ff;
}

.logout-btn {
  background: white;
  border: 1px solid #e74c3c;
  color: #e74c3c;
}

.logout-btn:hover {
  background: #fff0f0;
}
</style>