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
    <form @submit.prevent="submitForm">
      
      <pv-floatlabel variant="on" class="input-group">
        <pv-inputtext id="email" v-model="email" required aria-label="Email" />
        <label for="email">Email</label>
      </pv-floatlabel>

      <pv-floatlabel variant="on" class="input-group">
        <pv-inputtext :type="passwordVisible ? 'text' : 'password'" id="password" v-model="password" required aria-label="Contraseña" />
        <label for="password">Contraseña</label>
      </pv-floatlabel>
      

      <button type="submit" class="submit-btn" aria-label="Iniciar sesión">{{ $t('login.login') }}</button>

      <p class="forgot-password">
        <a href="#" aria-label="Olvidé mi contraseña">{{ $t('login.forget') }}</a>
      </p>
    </form>

    <div v-if="error" class="error-message" role="alert">{{ error }}</div>

    <div class="divider-container">
      <pv-divider /> <span>O</span> <pv-divider />
    </div>

    <div class="social-login">
      <button class="google-btn" aria-label="Iniciar sesión con Google">
        <img src="/assets/google.svg" alt="Google Logo" class="social-logo" />
        Iniciar Sesión con Google
      </button>
      <button class="apple-btn" aria-label="Iniciar sesión con Apple">
        <span class="logo-circle">
          <img src="/assets/apple.svg" alt="Apple Logo" class="social-logo" />
        </span>
        Iniciar Sesión con Apple
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
  background-color: #ffffff;
  border: 1px solid #A7D1D2;
  border-radius: 15px;
  text-align: left;
  font-family: 'Arial', sans-serif;
  box-shadow: 
    0 10px 20px rgba(167, 209, 210, 0.3),
    0 20px 40px rgba(167, 209, 210, 0.2),
    0 30px 60px rgba(167, 209, 210, 0.1),
    0 0 0 10px rgba(167, 209, 210, 0.05);
}

h2 {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.input-group {
  width: 70%;
  margin: 0 auto;
  margin-bottom: 10px;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  color: #555;
}

.input-group input {
  width: 100%;
  padding: 14px 12px;
  font-size: 16px;
  border: 1px solid #A7D1D2;
  border-radius: 10px;
  outline: none;
  transition: all 0.3s ease;
}

.input-group input:focus {
  border-color: #7aa4a4;
}

button[type="button"] {
  margin-top: 5px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
}

.submit-btn {
  width: 50%;
  padding: 10px;
  font-size: 16px;
  background-color: #DFEEEF;
  color: #3b3b3b;
  border: 2px solid #A7D1D2;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 auto;
  display: block;
}

.submit-btn:hover {
  background-color: #8BB5B6;
  color: #000000;
  border: 2px solid #8BB5B6;
}

.forgot-password {
  text-align: center;
  margin-top: 10px;
}

.forgot-password a {
  color: #595959;
  text-decoration: none;
  font-size: 13px;
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
  transition: background-color 0.3s ease;
  color: #000000;
  border: none;
  height: 53px;
}

.google-btn:hover{
  background-color:#DFEEEF;
}

.apple-btn {
  background-color: #ffff;
  transition: background-color 0.3s ease;
  color: #000000;
  border: none;
}

.apple-btn:hover{
  background-color:#DFEEEF;
}

.apple-btn .logo-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: #000;    
  border-radius: 50%;
}

.social-logo {
  width: 20px;
  height: 20px;
}

.apple-btn .social-logo {
  width: 14px;         
  height: 16px;
  display: block;
}

.social-login button:hover {
  opacity: 0.8;
}

.divider-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.divider-container span {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #595959;
}


</style>
