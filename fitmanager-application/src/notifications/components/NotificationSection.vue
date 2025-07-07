<template>
  <div class="notification-section">
    <h1 class="section-title">Notifications Management</h1>

    <div class="actions">
      <button @click="toggleAddNotificationForm" class="add-notification-btn">
        <i class="fas fa-plus"></i> {{ showAddForm ? 'Hide Notification Form' : 'Send New Notification' }}
      </button>
    </div>

    <div v-if="showAddForm" class="add-form-container">
      <AddNotificationForm @notification-sent="handleNotificationSent" />
    </div>

    <div class="list-container">
      <NotificationList ref="notificationList" />
    </div>
  </div>
</template>

<script>
import NotificationList from './NotificationList.vue';
import AddNotificationForm from './AddNotificationForm.vue';

export default {
  name: 'NotificationSection',
  components: {
    NotificationList,
    AddNotificationForm,
  },
  data() {
    return {
      showAddForm: false,
    };
  },
  methods: {
    toggleAddNotificationForm() {
      this.showAddForm = !this.showAddForm;
    },
    handleNotificationSent() {
      this.showAddForm = false;
      if (this.$refs.notificationList) {
        this.$refs.notificationList.refreshNotifications();
      }
    }
  },
};
</script>

<style scoped>
.notification-section {
  padding: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9fbfd; /* Fondo muy claro, similar al de la tabla */
  min-height: 100vh;
  box-sizing: border-box;
}

.section-title {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5em;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.05);
}

.actions {
  text-align: center;
  margin-bottom: 30px;
}

.add-notification-btn {
  background-color: #8FBFC0; /* Verde para el botón de acción, como "Add Class" */
  color: white;
  padding: 10px 20px; /* Ajustado para ser similar a los botones de la tabla */
  border: none;
  border-radius: 6px; /* Bordes más suaves */
  cursor: pointer;
  font-size: 1em; /* Un poco más pequeño para coherencia */
  font-weight: 500;
  display: flex; /* Para el icono y texto */
  align-items: center;
  gap: 8px; /* Espacio entre icono y texto */
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra sutil */
}

.add-notification-btn i {
  font-size: 1.1em; /* Ajuste del tamaño del icono */
}

.add-notification-btn:hover {
  background-color: #8FBFC0;
  transform: translateY(-1px); /* Efecto hover sutil */
}

.add-notification-btn:active {
  transform: translateY(0);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.add-form-container {
  margin-bottom: 30px;
  border: 1px solid #e0e0e0; /* Borde más suave */
  border-radius: 8px; /* Bordes redondeados */
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05); /* Sombra más prominente */
}

.list-container {
  margin-top: 30px;
}
</style>