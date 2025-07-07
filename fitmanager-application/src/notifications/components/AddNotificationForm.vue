<template>
  <div class="add-notification-form">
    <h2>Send New Notification</h2>

    <form @submit.prevent="sendNotification">
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="notification.title" required>
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="notification.message" required></textarea>
      </div>

      <div class="form-group recipient-options">
        <label>Recipients:</label>
        <div>
          <input type="radio" id="sendToEmployees" value="employees" v-model="recipientType">
          <label for="sendToEmployees">Employees</label>
          <input type="radio" id="sendToMembers" value="members" v-model="recipientType">
          <label for="sendToMembers">Members</label>
        </div>
      </div>

      <div v-if="recipientType === 'employees'" class="form-group">
        <label for="selectEmployees">Select Employees:</label>
        <select id="selectEmployees" multiple v-model="selectedEmployeeIds">
          <option v-if="loadingEmployees">Loading employees...</option>
          <option v-else-if="employees.length === 0">No employees available</option>
          <option v-for="employee in employees" :key="employee.id" :value="employee.id">
            {{ employee.fullName }}
          </option>
        </select>
        <small>Hold Ctrl/Cmd to select multiple.</small>
      </div>

      <div v-if="recipientType === 'members'" class="form-group">
        <label for="selectMembers">Select Members:</label>
        <select id="selectMembers" multiple v-model="selectedMemberIds">
          <option v-if="loadingMembers">Loading members...</option>
          <option v-else-if="members.length === 0">No members available</option>
          <option v-for="member in members" :key="member.id" :value="member.id">
            {{ member.fullName }}
          </option>
        </select>
        <small>Hold Ctrl/Cmd to select multiple.</small>
      </div>

      <button type="submit" :disabled="sending || !isFormValid">
        {{ sending ? 'Sending...' : 'Send Notification' }}
      </button>
      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
// ... (script content remains the same)
import { NotificationApiService } from '../services/notification.api.service.js';
import { MemberApiService } from '../../members/services/member-api.service.js';
import { EmployeeApiService } from '../../employees/services/employee-api.service.js';

export default {
  name: 'AddNotificationForm',
  data() {
    return {
      notification: {
        title: '',
        message: '',
      },
      recipientType: 'employees',
      selectedEmployeeIds: [],
      selectedMemberIds: [],
      employees: [],
      members: [],
      notificationApiService: new NotificationApiService(),
      memberApiService: new MemberApiService(),
      employeeApiService: new EmployeeApiService(),
      loadingEmployees: false,
      loadingMembers: false,
      sending: false,
      successMessage: '',
      errorMessage: '',
    };
  },
  computed: {
    isFormValid() {
      if (!this.notification.title || !this.notification.message) {
        return false;
      }
      if (this.recipientType === 'employees' && this.selectedEmployeeIds.length === 0) {
        return false;
      }
      if (this.recipientType === 'members' && this.selectedMemberIds.length === 0) {
        return false;
      }
      return true;
    }
  },
  created() {
    this.fetchEmployees();
    this.fetchMembers();
  },
  methods: {
    async fetchEmployees() {
      this.loadingEmployees = true;
      try {
        this.employees = await this.employeeApiService.getAllEmployees();
      } catch (error) {
        console.error('Error loading employees:', error);
        this.errorMessage = 'Failed to load employees for selection.';
      } finally {
        this.loadingEmployees = false;
      }
    },
    async fetchMembers() {
      this.loadingMembers = true;
      try {
        this.members = await this.memberApiService.getAllMembers();
      } catch (error) {
        console.error('Error loading members:', error);
        this.errorMessage = 'Failed to load members for selection.';
      } finally {
        this.loadingMembers = false;
      }
    },
    async sendNotification() {
      this.sending = true;
      this.successMessage = '';
      this.errorMessage = '';

      try {
        if (this.recipientType === 'employees') {
          if (this.selectedEmployeeIds.length === 0) {
            this.errorMessage = 'Please select at least one employee.';
            this.sending = false;
            return;
          }
          await this.notificationApiService.createEmployeeNotification(
              this.notification.title,
              this.notification.message,
              this.selectedEmployeeIds
          );
          this.successMessage = 'Notification sent to employees successfully!';
        } else if (this.recipientType === 'members') {
          if (this.selectedMemberIds.length === 0) {
            this.errorMessage = 'Please select at least one member.';
            this.sending = false;
            return;
          }
          await this.notificationApiService.createMemberNotification(
              this.notification.title,
              this.notification.message,
              this.selectedMemberIds
          );
          this.successMessage = 'Notification sent to members successfully!';
        }

        this.notification.title = '';
        this.notification.message = '';
        this.selectedEmployeeIds = [];
        this.selectedMemberIds = [];

        this.$emit('notification-sent');

      } catch (error) {
        console.error('Error sending notification:', error);
        if (error.response && error.response.data && error.response.data.message) {
          this.errorMessage = error.response.data.message.value || error.response.data.message;
        } else {
          this.errorMessage = 'Failed to send notification. Please try again.';
        }
      } finally {
        this.sending = false;
      }
    },
  },
};
</script>

<style scoped>
.add-notification-form {
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Usar la misma fuente */
  max-width: 600px;
  margin: 20px auto;
  border: 1px solid #e0e0e0; /* Borde suave */
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 2px 8px rgba(0,0,0,0.05); /* Sombra sutil */
  background-color: #ffffff;
}

h2 {
  color: #333;
  text-align: center;
  margin-bottom: 25px;
  border-bottom: 2px solid #8FBFC0; /* Línea inferior azul */
  padding-bottom: 10px;
  font-size: 1.8em; /* Ajuste del tamaño del título */
  font-weight: 600;
}

.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500; /* Menos negrita */
  color: #555;
  font-size: 0.95em;
}

.form-group input[type="text"],
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 10px 12px; /* Ajuste de padding */
  border: 1px solid #d0d0d0; /* Borde más claro */
  border-radius: 6px; /* Bordes más suaves */
  box-sizing: border-box;
  font-size: 1em;
  outline: none; /* Quitar el outline al enfocar */
  transition: border-color 0.3s, box-shadow 0.3s;
}

.form-group input[type="text"]:focus,
.form-group textarea:focus,
.form-group select:focus {
  border-color: #8FBFC0;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1); /* Sombra de enfoque azul */
}

.form-group textarea {
  min-height: 100px;
  resize: vertical;
}

.form-group select[multiple] {
  min-height: 120px;
  padding: 8px 12px; /* Ajuste de padding para select multiple */
}

.form-group small {
  display: block;
  margin-top: 5px;
  color: #777;
  font-size: 0.85em;
}

.recipient-options {
  display: flex;
  align-items: center;
  gap: 20px; /* Espacio entre el label y las opciones de radio */
}

.recipient-options > div {
  display: flex;
  gap: 15px; /* Espacio entre los radios */
}

.recipient-options input[type="radio"] {
  margin-right: 5px;
  /* Estilos básicos para radios, considerar CSS-only radio custom si quieres más control */
}

.recipient-options label {
  display: inline-flex; /* Para alinear el radio con el texto */
  align-items: center;
  margin-right: 0; /* Quitar margen que conflicte */
  font-weight: normal;
  cursor: pointer;
  color: #444; /* Color de texto más oscuro */
}

button[type="submit"] {
  background-color: #8FBFC0; /* Azul para el botón de enviar */
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 6px; /* Bordes más suaves */
  cursor: pointer;
  font-size: 1.1em;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* Sombra sutil */
}

button[type="submit"]:hover:not(:disabled) {
  background-color: #8FBFC0;
  transform: translateY(-1px);
}

button[type="submit"]:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
}

.success-message {
  color: #8FBFC0; /* Verde para éxito */
  background-color: #e6ffe6; /* Fondo verde claro */
  border: 1px solid #8FBFC0;
  padding: 10px;
  border-radius: 5px;
  margin-top: 15px;
  text-align: center;
  font-weight: 500;
}

.error-message {
  color: #dc3545; /* Rojo para error */
  background-color: #ffe6e6; /* Fondo rojo claro */
  border: 1px solid #dc3545;
  padding: 10px;
  border-radius: 5px;
  margin-top: 15px;
  text-align: center;
  font-weight: 500;
}
</style>