<template>
  <div class="dashboard-container" v-if="userLoaded">
    <!-- Cuadro superior -->
    <div class="top-section">
      <PermissionPersonal :user="userData" />
    </div>

    <!-- Cuadros inferiores -->
    <div class="bottom-sections">
      <div class="bottom-left">
        <EditorCuenta :user="userData" />
      </div>
      <div class="bottom-right">
        <VehicleModels />
      </div>
    </div>
  </div>
  <div v-else class="loading-screen">
    Cargando datos del usuario...
  </div>
</template>

<script>
import { ref } from 'vue';
import { getUserInfo } from '../services/user-info-api.service.js';
import PermissionPersonal from './info.component.vue';
import EditorCuenta from './settings.component.vue';
import VehicleModels from './gym-profile.component.vue';

export default {
  components: {
    PermissionPersonal,
    EditorCuenta,
    VehicleModels
  },
  setup() {
    const userData = ref(null);
    const userLoaded = ref(false);

    const loadUserData = async () => {
      try {
        // Datos mockeados como fallback
        userData.value = {
          username: "powergym_peru",
          email: "messi@gmail.com",
          phone: "+51 999 530 751",
          plan: "Platino",
          devices: 3,
          managementTeam: "Team Alpha",
          telecom: "Commercial Plus",
          remoteAssociate: "-13 1995 802 751",
          disparities: "Vendrides 2",
          planAssist: "Active"
        };

        // Intentar cargar datos reales
        const apiData = await getUserInfo();
        userData.value = { ...userData.value, ...apiData };
      } catch (error) {
        console.error("Error loading user:", error);
      } finally {
        userLoaded.value = true;
      }
    };

    loadUserData();

    return {
      userData,
      userLoaded
    };
  }
};
</script>

<style scoped>
.dashboard-container {
  padding: 20px;
  background-color: #e0e0e0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.loading-screen {
  padding: 40px;
  text-align: center;
  font-size: 1.2rem;
}

.top-section {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.bottom-sections {
  display: flex;
  gap: 20px;
}

.bottom-left, .bottom-right {
  flex: 1;
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
</style>