<!--
This Vue component defines a login form for an admin to sign in. It accepts an email and password and verifies the credentials by calling the `AdminApiService` to fetch all admins.
If the provided credentials match any admin, the login is successful, and an event `login-success` is emitted. Otherwise, an error message is displayed.
It also allows toggling the visibility of the password input field.
Author: Victor Ortiz
-->

<script>
import { AdminApiService } from "../services/admin-api.service.js";

export default {
  data() {
    return {
      email: '',
      password: '',
      passwordVisible: false,
      error: null,
    };
  },
  methods: {
    async submitForm() {
      this.error = null;

      try {
        const admins = await new AdminApiService().getAllAdmins();

        const admin = admins.find(
            (admin) => admin.email === this.email && admin.password === this.password
        );

        console.log("Admin encontrado:", admin);

        if (admin) {
          this.$emit('login-success', true);
        } else {
          this.error = "Correo o contraseña incorrectos.";
        }
      } catch (error) {
        console.error('Error al intentar iniciar sesión:', error);
        this.error = 'Hubo un error al procesar tu solicitud.';
      }
    },
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
};
</script>

<template>
  <div class="login-form-container">
    <h2>{{ $t('login.login') }}</h2>
    <form @submit.prevent="submitForm">
      <div class="input-group">
        <label for="email">{{ $t('login.email') }}</label>
        <input type="email" id="email" v-model="email" required aria-label="Email" />
      </div>

      <div class="input-group">
        <label for="password">{{ $t('login.password') }}</label>
        <input :type="passwordVisible ? 'text' : 'password'" id="password" v-model="password" required aria-label="Contraseña" />
        <button type="button" @click="togglePasswordVisibility" aria-label="Toggle password visibility">
          {{ passwordVisible ? $t('login.hide') : $t('login.show') }}

        </button>
      </div>

      <button type="submit" class="submit-btn" aria-label="Iniciar sesión">{{ $t('login.login') }}</button>

      <p class="forgot-password">
        <a href="#" aria-label="Olvidé mi contraseña">{{ $t('login.forget') }}</a>
      </p>
    </form>

    <div v-if="error" class="error-message" role="alert">{{ error }}</div>

    <div class="social-login">
      <button class="google-btn" aria-label="Iniciar sesión con Google">
        <img src="/assets/google-logo.png" alt="Google Logo" class="social-logo" />
        {{ $t('login.google') }}
      </button>
      <button class="apple-btn" aria-label="Iniciar sesión con Apple">
        <img src="/assets/apple-logo.png" alt="Apple Logo" class="social-logo" />
        {{ $t('login.apple') }}
      </button>
    </div>
  </div>
</template>


<style scoped>
.login-form-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: left;
  font-family: 'Arial', sans-serif;
}

h2 {
  font-size: 30px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.input-group {
  margin-bottom: 25px;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  color: #555;
}

.input-group input {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #A7D1D2;
  border-radius: 10px;
  outline: none;
  transition: all 0.3s ease;
}

.input-group input:focus {
  border-color: #007bff;
}

button[type="button"] {
  margin-top: 5px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
}

.submit-btn {
  width: 100%;
  padding: 14px;
  font-size: 16px;
  background-color: #A7D1D2;
  color: #3b3b3b;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #8BB5B6;
}

.forgot-password {
  text-align: right;
  margin-top: 10px;
}

.forgot-password a {
  color: #000000;
  text-decoration: none;
  font-size: 14px;
}

.error-message {
  color: red;
  margin-top: 15px;
}

.social-login {
  margin-top: 20px;
}

.social-login button {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border-radius: 15px;
  border: 1px solid #A7D1D2;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.google-btn {
  background-color: #fff;
  color: #000000;
  border: none;
}

.apple-btn {
  background-color: #ffff;
  color: #000000;
  border: none;
}

.social-logo {
  width: 20px;
  height: auto;
}

.social-login button:hover {
  opacity: 0.8;
}
</style>
