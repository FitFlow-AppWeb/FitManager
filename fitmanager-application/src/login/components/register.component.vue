<!--
This Vue component renders the registration page. It includes the following components:
1. `LogoTitle`: Displays the logo and title of the application.
2. `RegisterFormComponent`: Handles user registration, emitting a `registered` event upon success.

When the `registered` event is emitted, the page navigates back to the login screen.
Author: Renzo Luque
-->

<template>
  <div class="register-container">
    <LogoTitle />

    <RegisterFormComponent @registered="onRegistered" />

    <button class="back-btn" @click="$router.push({ name: 'Login' })">
      Back to Login
    </button>
  </div>
</template>

<script>
import LogoTitle from './logo-title.component.vue';
import RegisterFormComponent from './register-form.component.vue';

export default {
  name: 'RegisterPage',
  components: { LogoTitle, RegisterFormComponent },
  methods: {
    /**
     * Navigate back to login after successful registration
     */
    onRegistered() {
      this.$router.push({ name: 'Login' });
    }
  }
};
</script>

<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.back-btn {
  margin-top: 20px;
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
}
</style>
