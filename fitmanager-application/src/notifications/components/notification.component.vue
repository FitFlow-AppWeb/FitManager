<script>
import NotificationHeader from './create-notification-button.component.vue'; // Botón de crear notificación
import CreateNotificationModal from './CreateNotificationModal.component.vue'; // Modal para crear notificación
import SentNotification from './sent-notification.component.vue'; // Componente de notificaciones enviadas
import ReceivedNotification from './received-notification.component.vue'; // Componente de notificaciones recibidas

export default {
  name: 'NotificationComponent',
  data() {
    return {
      showSent: true, // Estado para saber si mostramos "Enviadas" o "Recibidas"
    };
  },
  components: {
    NotificationHeader,
    CreateNotificationModal,
    SentNotification,
    ReceivedNotification
  },
  methods: {
    switchTab(tab) {
      this.showSent = tab === 'sent'; // Cambia entre "Enviadas" y "Recibidas"
    },
    openCreateNotificationModal() {
      this.$refs.createNotificationModal.openModal(); // Llama al método 'openModal' del modal
    }
  }
};
</script>

<template>
  <div class="notification-container">
    <!-- Botones en la parte superior (con clase sticky) -->
    <div class="tabs">
      <button @click="switchTab('sent')" :class="{ active: showSent }">Notificaciones Enviadas</button>
      <button @click="switchTab('received')" :class="{ active: !showSent }">Notificaciones Recibidas</button>
      <button @click="openCreateNotificationModal" class="create-btn">Crear Notificación</button>
    </div>

    <!-- Sección de Notificaciones Enviadas -->
    <div v-if="showSent">
      <SentNotification />
    </div>

    <!-- Sección de Notificaciones Recibidas -->
    <div v-else>
      <ReceivedNotification />
    </div>

    <!-- Componente Modal para Crear Notificación -->
    <CreateNotificationModal ref="createNotificationModal" />
  </div>
</template>

<style scoped>
.notification-container {
  padding: 20px;
  background-color: #F2EDED;
}

/* Tabs (botones) con posición sticky */
.tabs {
  top: 0;
  z-index: 10; /* Para que se mantengan por encima del contenido al hacer scroll */
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

/* Estilo del botón Crear Notificación */
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
