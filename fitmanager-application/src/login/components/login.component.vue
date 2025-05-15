<!--
// This Vue component renders the login page. It includes the following components:
// 1. `LogoTitle`: Displays the logo and title of the application.
// 2. `LoginForm`: Handles user authentication, emitting a `login-success` event upon successful login.
// 3. `CreateAccountButton`: Displays a button for creating a new account.
//
// The component listens for the `login-success` event emitted by the `LoginForm` component.
// When the login is successful (i.e., `authenticated` is true), it emits the `login-exitoso` event to notify the parent component.
// Author: Victor Ortiz
-->

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
  methods: {
    loginFinished(authenticated) {
      if (authenticated) {
        this.$emit("login-exitoso", authenticated);
      }
    }
  }
};
</script>

<template>
  <div class="login-container">
    <LogoTitle />

    <LoginForm @login-success="loginFinished" />

    <CreateAccountButton />
  </div>
</template>


<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 20px;
  
  background: #ffffff;
  background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(51, 51, 51, 1) 100%);

}
</style>
