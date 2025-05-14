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
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
}
</style>
