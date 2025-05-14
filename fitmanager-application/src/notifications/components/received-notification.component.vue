<script>
import { ReceivedNotificationApiService } from '../services/received-notification-api.service.js';
import { ReceivedNotificationAssembler } from '../services/received-notification.assembler.js';

export default {
  name: 'ReceivedNotification',
  data() {
    return {
      notifications: []
    };
  },
  mounted() {
    this.fetchNotifications();
  },
  methods: {
    async fetchNotifications() {
      try {
        const response = await new ReceivedNotificationApiService().getAllReceivedNotifications();
        this.notifications = response; // Guardamos las notificaciones recibidas
      } catch (error) {
        console.error('Error fetching received notifications:', error);
      }
    }
  }
};
</script>

<template>
  <div class="notification-list">
    <h3>Notificaciones Recibidas</h3>
    <div v-for="notification in notifications" :key="notification.id" class="notification-item">
      <div class="notification-header">
        <span class="notification-title">{{ notification.title }}</span>
        <span class="notification-date">{{ notification.date }}</span>
      </div>
      <div class="notification-body">
        <p>{{ notification.body }}</p>
        <p><strong>Remitente:</strong> {{ notification.sender }}</p>
        <p><strong>Destinatarios:</strong> {{ notification.recipients.join(', ') }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.notification-list {
  padding: 20px;
}

.notification-item {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
}

.notification-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.notification-title {
  font-weight: bold;
}

.notification-body {
  color: #555;
}

.notification-date {
  font-size: 0.9em;
  color: #888;
}
</style>
