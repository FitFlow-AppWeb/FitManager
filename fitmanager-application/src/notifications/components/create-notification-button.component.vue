<script>
export default {
  name: 'NotificationHeader',
  methods: {
    createNotification() {
      this.$emit('create-notification'); // Emite el evento para abrir el modal
    }
  }
};
</script>

<template>
  <div class="notification-header">
    <button @click="createNotification" class="create-btn">Crear Notificación</button>
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
