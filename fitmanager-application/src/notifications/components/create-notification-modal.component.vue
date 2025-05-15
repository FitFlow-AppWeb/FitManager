<script>
/**
 * This file contains the NotificationModal component which allows the user to create a new notification.
 * It displays a modal with a form for entering the notification's title, body, recipients, and date.
 * The modal can be opened and closed with the appropriate methods, and the form can be submitted to create a notification.
 *
 * Author: Victor Ortiz
 */
export default {
  data() {
    return {
      showModal: false,
      title: '',
      body: '',
      recipients: '',
      date: ''
    };
  },
  methods: {
    openModal() {
      this.showModal = true; // Show the modal
    },
    closeModal() {
      this.showModal = false; // Close the modal
    },
    submitForm() {
      // Handle logic to send notification to the API or store it
      const newNotification = {
        title: this.title,
        body: this.body,
        recipients: this.recipients.split(',').map((recipient) => recipient.trim()),
        date: this.date,
        status: 'sent', // Default status for the notification
      };

      console.log('Notification created:', newNotification);
      // Reset form values
      this.title = '';
      this.body = '';
      this.recipients = '';
      this.date = '';
      this.closeModal(); // Close the modal
    }
  }
};
</script>

<template>
  <div v-if="showModal" class="modal-overlay" role="dialog" aria-labelledby="modalTitle" aria-hidden="false">
    <div class="modal" role="document">
      <h2 id="modalTitle">{{ $t('notification.create-button') }}</h2>
      <form @submit.prevent="submitForm">
        <!-- Title -->
        <div class="input-group">
          <label for="title">{{ $t('notification.title') }}</label>
          <input type="text" id="title" v-model="title" required aria-required="true" />
        </div>

        <!-- Body -->
        <div class="input-group">
          <label for="body">{{ $t('notification.body') }}</label>
          <textarea id="body" v-model="body" required aria-required="true"></textarea>
        </div>

        <!-- Recipients -->
        <div class="input-group">
          <label for="recipients">{{ $t('notification.recipients') }}</label>
          <input type="text" id="recipients" v-model="recipients" required aria-required="true" />
        </div>

        <!-- Date -->
        <div class="input-group">
          <label for="date">{{ $t('notification.date') }}</label>
          <input type="datetime-local" id="date" v-model="date" required aria-required="true" />
        </div>

        <!-- Buttons -->
        <div class="modal-buttons">
          <button type="submit" class="submit-btn" aria-label="Create notification">{{ $t('notification.create-button') }}</button>
          <button type="button" @click="closeModal" class="cancel-btn" aria-label="Cancel creating notification">{{ $t('notification.cancel') }}</button>
        </div>
      </form>
    </div>
  </div>
</template>


<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  color: #6c757d;
}

.input-group input,
.input-group textarea {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;
}

.input-group input:focus,
.input-group textarea:focus {
  border-color: #007bff;
}

textarea {
  height: 100px;
  resize: none;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
}

.submit-btn,
.cancel-btn {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
}

.submit-btn {
  background-color: #28a745;
  color: white;
  border: none;
}

.submit-btn:hover {
  background-color: #218838;
}

.cancel-btn {
  background-color: #dc3545;
  color: white;
  border: none;
}

.cancel-btn:hover {
  background-color: #c82333;
}
</style>
