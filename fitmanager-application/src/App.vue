<script setup>
import { ref } from 'vue';
import Login from './login/components/login.component.vue'; // Componente de Login
import Layout from './public/components/app-layout.componet.vue'; // Componente Layout

// Estado para saber si el usuario está autenticado
const isAuthenticated = ref(localStorage.getItem('isAuthenticated') === 'true');

// Método para manejar el evento de login exitoso
const handleLoginSuccess = () => {
  isAuthenticated.value = true;
  console.log('isAuthenticated');
  localStorage.setItem('isAuthenticated', 'true'); // Guardar en localStorage
};
</script>

<template>
  <div id="app">
    <!-- Mostrar Login si el usuario no está autenticado -->
    <Login v-if="!isAuthenticated" @login-exitoso="handleLoginSuccess" />

    <!-- Mostrar Layout si el usuario está autenticado -->
    <Layout v-if="isAuthenticated" />
  </div>
</template>

<style scoped>
/* Estilos para el contenedor de la aplicación */
#app {
  font-family: 'Arial', sans-serif;
}
</style>
