<script>
/**
 * This file defines the ReceivedNotification component, which fetches and displays the list of received notifications.
 * It uses an API service to fetch the notifications and displays relevant information such as the title, date, body, sender,
 * and recipients for each notification.
 *
 * Author: Victor Ortiz
 */
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
        this.notifications = response; // Store the received notifications
      } catch (error) {
        console.error('Error fetching received notifications:', error);
      }
    }
  }
};
</script>

<template>
  <div class="notification-list" role="region" aria-labelledby="received-notifications-title">
    <h3 id="received-notifications-title">{{ $t('notification.received-notifications') }}</h3>
    <div v-for="notification in notifications" :key="notification.id" class="notification-item" role="listitem" aria-labelledby="notification-title">
      <div class="notification-header">
        <span id="notification-title" class="notification-title">{{ notification.title }}</span>
        <span class="notification-date">{{ notification.date }}</span>
      </div>
      <div class="notification-body">
        <p>{{ notification.body }}</p>
        <p><strong>{{ $t('notification.sender') }}:</strong> {{ notification.sender }}</p>
        <p><strong>{{ $t('notification.recipients2') }}:</strong> {{ notification.recipients.join(', ') }}</p>
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
