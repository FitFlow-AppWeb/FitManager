<template>
  <div class="personal-info-container">
    <h2 class="section-title">Personal Information </h2>
    <div class="divider"></div>

    <div class="info-content">
      <div class="info-row">
        <span class="label">Username:</span>
        <span class="value">powergym_peru</span>
      </div>
      <div class="info-row">
        <span class="label">Email:</span>
        <span class="value">messi@gmail.com</span>
      </div>
      <div class="info-row">
        <span class="label">Password:</span>
        <span class="value">*********************</span>
      </div>
      <div class="info-row">
        <span class="label">Phone Number:</span>
        <span class="value">+51 999 530 751</span>
      </div>
      <div class="info-row">
        <span class="label">Linked Devices:</span>
        <span class="value">3</span>
      </div>
      <div class="info-row">
        <span class="label">Current Plan:</span>
        <span class="value">Platino</span>
      </div>
    </div>

    <div class="buttons-container">
      <button class="edit-btn">Edit Account</button>
      <button class="logout-btn">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditorCuenta',
  props: {
    user: {
      type: Object,
      required: true,
      default: () => ({
        username: '',
        email: '',
        phone: '',
        plan: '',
        devices: 0
      })
    }
  }
}
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
  background-color: #a0c4e0; /* Celeste-gris */
  margin-bottom: 20px;
}

.info-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
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
  border: 1px solid #3498db; /* Celeste */
  color: #3498db;
}

.edit-btn:hover {
  background: #f0f8ff; /* Celeste muy claro */
}

.logout-btn {
  background: white;
  border: 1px solid #e74c3c; /* Rojo */
  color: #e74c3c;
}

.logout-btn:hover {
  background: #fff0f0; /* Rojo muy claro */
}
</style>