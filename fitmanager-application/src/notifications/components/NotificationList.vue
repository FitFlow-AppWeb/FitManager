<template>
  <div class="notification-list">
    <h2>Employee Notifications</h2>
    <div v-if="loadingEmployeeNotifications" class="loading-message">
      <p>Loading employee notifications...</p>
    </div>
    <div v-else-if="employeeNotifications.length === 0">
      <p class="no-notifications">No employee notifications found.</p>
    </div>
    <div v-else class="notifications-grid">
      <div v-for="notification in employeeNotifications" :key="notification.id" class="notification-card">
        <h3>{{ notification.title }}</h3>
        <p>{{ notification.message }}</p>
      </div>
    </div>

    <hr class="separator">

    <h2>Member Notifications</h2>
    <div v-if="loadingMemberNotifications" class="loading-message">
      <p>Loading member notifications...</p>
    </div>
    <div v-else-if="memberNotifications.length === 0">
      <p class="no-notifications">No member notifications found.</p>
    </div>
    <div v-else class="notifications-grid">
      <div v-for="notification in memberNotifications" :key="notification.id" class="notification-card">
        <h3>{{ notification.title }}</h3>
        <p>{{ notification.message }}</p>
      </div>
    </div>

    <div v-if="error" class="error-message">
      <p>Error: {{ error }}</p>
    </div>
  </div>
</template>

<script>
// ... (script content remains the same)
import { NotificationApiService } from '../services/notification.api.service.js';

export default {
  name: 'NotificationList',
  data() {
    return {
      employeeNotifications: [],
      memberNotifications: [],
      notificationApiService: new NotificationApiService(),
      loadingEmployeeNotifications: false,
      loadingMemberNotifications: false,
      error: null,
    };
  },
  created() {
    this.fetchEmployeeNotifications();
    this.fetchMemberNotifications();
  },
  methods: {
    async fetchEmployeeNotifications() {
      this.loadingEmployeeNotifications = true;
      this.error = null;
      try {
        this.employeeNotifications = await this.notificationApiService.getAllEmployeeNotifications();
      } catch (err) {
        console.error('Failed to fetch employee notifications:', err);
        this.error = 'Failed to load employee notifications.';
      } finally {
        this.loadingEmployeeNotifications = false;
      }
    },
    async fetchMemberNotifications() {
      this.loadingMemberNotifications = true;
      this.error = null;
      try {
        this.memberNotifications = await this.notificationApiService.getAllMemberNotifications();
      } catch (err) {
        console.error('Failed to fetch member notifications:', err);
        this.error = 'Failed to load member notifications.';
      } finally {
        this.loadingMemberNotifications = false;
      }
    },
    refreshNotifications() {
      this.fetchEmployeeNotifications();
      this.fetchMemberNotifications();
    }
  },
};
</script>

<style scoped>
.notification-list {
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Misma fuente */
  background-color: #ffffff; /* Fondo blanco para las listas internas */
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05); /* Sombra similar a la tabla */
  border: 1px solid #e0e0e0; /* Borde suave */
}

h2 {
  color: #333;
  border-bottom: 2px solid #8FBFC0; /* Línea inferior azul */
  padding-bottom: 10px;
  margin-bottom: 20px;
  font-size: 1.8em; /* Tamaño consistente con el formulario */
  font-weight: 600;
}

.notifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); /* Columnas responsivas */
  gap: 15px; /* Espacio entre tarjetas */
  margin-top: 15px;
}

.notification-card {
  background-color: #f7f9fc; /* Fondo ligeramente más oscuro que el contenedor */
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.03); /* Sombra más ligera para tarjetas individuales */
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.notification-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}

.notification-card h3 {
  margin-top: 0;
  color: #8FBFC0; /* Azul para el título */
  font-size: 1.2em;
  margin-bottom: 8px;
  word-break: break-word; /* Para manejar títulos largos */
}

.notification-card p {
  color: #555;
  font-size: 0.95em;
  margin-bottom: 8px;
  line-height: 1.4;
  word-break: break-word; /* Para manejar mensajes largos */
}

.notification-date { /* Estilo si decides mostrar la fecha en el futuro */
  color: #888;
  font-size: 0.8em;
}

.separator {
  margin: 30px 0;
  border: 0;
  border-top: 1px dashed #d0d0d0; /* Línea de separación suave */
}

.loading-message, .no-notifications {
  text-align: center;
  padding: 15px;
  color: #666;
  font-style: italic;
}

.loading-message {
  background-color: #e6f7ff;
  border-radius: 5px;
  border: 1px solid #b3e0ff;
  color: #8FBFC0;
}

.error-message {
  background-color: #ffe6e6;
  color: #dc3545;
  border: 1px solid #dc3545;
  padding: 10px;
  border-radius: 5px;
  margin-top: 15px;
  text-align: center;
  font-weight: 500;
}
</style>