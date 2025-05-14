<script>
/**
 * This file contains the definition of the NotificationHeader component.
 * It renders a header with a button to trigger the creation of a notification.
 * When the button is clicked, it emits an event to create a notification.
 *
 * Author: Victor Ortiz
 */
export default {
  name: 'NotificationHeader',
  methods: {
    createNotification() {
      this.$emit('create-notification');
    }
  }
};
</script>

<template>
  <div class="notification-header">
    <!-- ARIA-Label added to improve accessibility -->
    <button
        @click="createNotification"
        class="create-btn"
        aria-label="Create a new notification"
    >
      {{ $t('notification.create-button') }}
    </button>
  </div>
</template>

<style scoped>
.notification-header {
  position: absolute;
  top: 20px;
  right: 20px;
}

.create-btn {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #A7D1D2;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.create-btn:hover {
  background-color: #A7D1D2;
}
</style>
