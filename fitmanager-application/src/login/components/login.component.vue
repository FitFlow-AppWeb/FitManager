

<script>
import LogoTitle from "./logo-title.component.vue";
import LoginForm from "./login-form.component.vue";
import CreateAccountButton from "./create-account.component.vue";

export default {
  components: {
    LogoTitle,
    LoginForm,
    CreateAccountButton,
  },
};
</script>

<template>
  <div class="login-container">
    <!-- Logo y Título -->
    <LogoTitle />

    <!-- Formulario de Login -->
    <LoginForm />

    <!-- Botón de Crear Cuenta -->
    <CreateAccountButton />
  </div>
</template>
<style scoped>
.login-container {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
}
</style>
