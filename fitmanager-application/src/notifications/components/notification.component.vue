<script>
/**
 * This file contains the NotificationComponent which manages the display of sent and received notifications.
 * It also includes the ability to create new notifications via a modal. The component allows the user to switch between
 * the "Sent" and "Received" notifications tabs and open the modal to create a new notification.
 *
 * Author: Victor Ortiz
 */
import NotificationHeader from './create-notification-button.component.vue'; // Button for creating notification
import CreateNotificationModalComponent from './create-notification-modal.component.vue'; // Modal for creating notification
import SentNotification from './sent-notification.component.vue'; // Component for sent notifications
import ReceivedNotification from './received-notification.component.vue'; // Component for received notifications

export default {
  name: 'NotificationComponent',
  data() {
    return {
      showSent: true, // State to determine whether to show "Sent" or "Received" notifications
    };
  },
  components: {
    NotificationHeader,
    CreateNotificationModal: CreateNotificationModalComponent,
    SentNotification,
    ReceivedNotification
  },
  methods: {
    switchTab(tab) {
      this.showSent = tab === 'sent'; // Switch between "Sent" and "Received"
    },
    openCreateNotificationModal() {
      this.$refs.createNotificationModal.openModal(); // Call the 'openModal' method from the modal
    }
  }
};
</script>

<template>
  <div class="notification-container">
    <!-- Tabs for navigating between Sent and Received notifications -->
    <div class="tabs" role="tablist">
      <button @click="switchTab('sent')" :class="{ active: showSent }" role="tab" aria-selected="showSent">Notificaciones Enviadas</button>
      <button @click="switchTab('received')" :class="{ active: !showSent }" role="tab" aria-selected="!showSent">Notificaciones Recibidas</button>
      <button @click="openCreateNotificationModal" class="create-btn" aria-label="Create notification">Crear Notificación</button>
    </div>

    <!-- Section for Sent Notifications -->
    <div v-if="showSent" role="tabpanel" aria-labelledby="sent-tab">
      <SentNotification />
    </div>

    <!-- Section for Received Notifications -->
    <div v-else role="tabpanel" aria-labelledby="received-tab">
      <ReceivedNotification />
    </div>

    <!-- Modal Component for Creating Notification -->
    <CreateNotificationModal ref="createNotificationModal" />
  </div>
</template>

<style scoped>
.notification-container {
  padding: 20px;
  background-color: #F2EDED;
}

.tabs {
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.tabs button {
  background-color: #A7D1D2;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.tabs button.active {
  background-color: #A7D1D2;
}

.tabs button:hover {
  opacity: 0.8;
}


.create-btn {
  background-color: #A7D1D2;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.create-btn:hover {
  background-color: #A7D1D2;
  color: white;
}
</style>
