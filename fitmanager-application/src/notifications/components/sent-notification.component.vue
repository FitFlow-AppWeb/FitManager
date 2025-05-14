<script>
import { SentNotificationApiService } from '../services/sent-notification-api.service.js';
import { SentNotificationAssembler } from '../services/sent-notification.assembler.js';

export default {
  name: 'SentNotification',
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
        const response = await new SentNotificationApiService().getAllSentNotifications();
        this.notifications = response; // Guardamos las notificaciones enviadas
      } catch (error) {
        console.error('Error fetching sent notifications:', error);
      }
    }
  }
};
</script>

<template>
  <div class="notification-list">
    <h3>Notificaciones Enviadas</h3>
    <div v-for="notification in notifications" :key="notification.id" class="notification-item">
      <div class="notification-header">
        <span class="notification-title">{{ notification.title }}</span>
        <span class="notification-date">{{ notification.date }}</span>
      </div>
      <div class="notification-body">
        <p>{{ notification.body }}</p>
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
