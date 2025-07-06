<script setup>
// import { ref } from 'vue';
// import Login from './login/components/login.component.vue'; // Componente de Login
// import Layout from './public/components/app-layout.componet.vue'; // Componente Layout
//
// // Inicializa el estado como false para que el Login se muestre por defecto
// const isAuthenticated = ref(false); // No usamos localStorage aquí, solo el estado interno
//
// // Método para manejar el evento de login exitoso
// const handleLoginSuccess = (authenticated) => {
//   if (authenticated) {
//     isAuthenticated.value = true; // Cambiar el estado a autenticado
//     console.log("Login exitoso: Usuario autenticado.");
//   }
// };
</script>

<template>
  <router-view/>

  <!--  <div id="app">-->
<!--    &lt;!&ndash; Mostrar Login si el usuario no está autenticado &ndash;&gt;-->
<!--    <Login v-if="!isAuthenticated" @login-exitoso="handleLoginSuccess" />-->

<!--    &lt;!&ndash; Mostrar Layout si el usuario está autenticado &ndash;&gt;-->
<!--    <Layout v-if="isAuthenticated" />-->
<!--  </div>-->
</template>

<style scoped>
#app {
  font-family: 'Arial', sans-serif;
  height: 100%;
}
</style>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>