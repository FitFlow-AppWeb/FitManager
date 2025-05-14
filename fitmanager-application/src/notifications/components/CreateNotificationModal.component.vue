<script>
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
      this.showModal = true; // Mostrar el modal
    },
    closeModal() {
      this.showModal = false; // Cerrar el modal
    },
    submitForm() {
      // Aquí puedes manejar la lógica para enviar la notificación a la API o almacenarla
      const newNotification = {
        title: this.title,
        body: this.body,
        recipients: this.recipients.split(',').map((recipient) => recipient.trim()),
        date: this.date,
        status: 'sent', // Estado predeterminado de la notificación
      };

      console.log('Notificación creada:', newNotification);
      // Resetear los valores del formulario
      this.title = '';
      this.body = '';
      this.recipients = '';
      this.date = '';
      this.closeModal(); // Cerrar el modal
    }
  }
};
</script>

<template>
  <div v-if="showModal" class="modal-overlay">
    <div class="modal">
      <h2>Crear Notificación</h2>
      <form @submit.prevent="submitForm">
        <!-- Título -->
        <div class="input-group">
          <label for="title">Título</label>
          <input type="text" id="title" v-model="title" required />
        </div>

        <!-- Cuerpo -->
        <div class="input-group">
          <label for="body">Cuerpo</label>
          <textarea id="body" v-model="body" required></textarea>
        </div>

        <!-- Destinatarios -->
        <div class="input-group">
          <label for="recipients">Destinatarios (separados por coma)</label>
          <input type="text" id="recipients" v-model="recipients" required />
        </div>

        <!-- Fecha -->
        <div class="input-group">
          <label for="date">Fecha</label>
          <input type="datetime-local" id="date" v-model="date" required />
        </div>

        <!-- Botones -->
        <div class="modal-buttons">
          <button type="submit" class="submit-btn">Crear Notificación</button>
          <button type="button" @click="closeModal" class="cancel-btn">Cancelar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Estilos del modal */
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
