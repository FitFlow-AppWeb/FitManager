<template>
  <div class="personal-info-container">
    <h2 class="section-title">{{ $t('personalInfo.title') }}</h2>
    <div class="divider"></div>

    <div class="info-content">
      <div class="info-row">
        <span class="label">{{ $t('personalInfo.username') }}:</span>
        <span class="value">{{ user.username }}</span>
      </div>
      <div class="info-row">
        <span class="label">{{ $t('personalInfo.email') }}:</span>
        <span class="value">{{ user.email }}</span>
      </div>
      <div class="info-row">
        <span class="label">{{ $t('personalInfo.password') }}:</span>
        <span class="value">*********************</span>
      </div>
      <div class="info-row">
        <span class="label">{{ $t('personalInfo.phone') }}:</span>
        <span class="value">{{ user.phone }}</span>
      </div>
      <div class="info-row">
        <span class="label">{{ $t('personalInfo.devices') }}:</span>
        <span class="value">{{ user.devices }}</span>
      </div>
      <div class="info-row">
        <span class="label">{{ $t('personalInfo.plan') }}:</span>
        <span class="value">{{ user.plan }}</span>
      </div>
    </div>

    <div class="buttons-container">
      <button class="edit-btn">{{ $t('buttons.edit') }}</button>
      <button class="logout-btn">{{ $t('buttons.logout') }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountInfo',
  props: {
    user: {
      type: Object,
      required: true,
      default: () => ({
        username: "powergym_peru",
        email: "messi@gmail.com",
        phone: "+51 999 530 751",
        plan: "Platinum",
        devices: 3
      })
    }
  }
};
</script>

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