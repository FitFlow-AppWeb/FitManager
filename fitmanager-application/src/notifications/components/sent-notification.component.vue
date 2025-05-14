<script>
/**
 * This file defines the SentNotification component, which fetches and displays the list of sent notifications.
 * It uses an API service to fetch the notifications and displays relevant information such as the title, date, body, and recipients
 * for each notification.
 *
 * Author: Victor Ortiz
 */
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
        this.notifications = response; // Store the sent notifications
      } catch (error) {
        console.error('Error fetching sent notifications:', error);
      }
    }
  }
};
</script>

<template>
  <div class="notification-list" role="region" aria-labelledby="sent-notifications-title">
    <h3 id="sent-notifications-title">Notificaciones Enviadas</h3>
    <div v-for="notification in notifications" :key="notification.id" class="notification-item" role="listitem" aria-labelledby="notification-title">
      <div class="notification-header">
        <span id="notification-title" class="notification-title">{{ notification.title }}</span>
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
