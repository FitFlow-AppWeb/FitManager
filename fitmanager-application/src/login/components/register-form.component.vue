<script>
import axios from 'axios';
import { AuthApiService } from '../services/auth-api.service.js';

export default {
  name: 'RegisterForm',
  emits: ['registered'],
  data() {
    return {
      email: '',
      password: '',
      icon: '',
      subscription: '',
      error: null,
      success: null,
      showSnackbar: false,
      snackbarMessage: '',
      snackbarType: '',
    };
  },
  methods: {
    showSnack(message, type) {
      this.snackbarMessage = message;
      this.snackbarType = type;
      this.showSnackbar = true;
      setTimeout(() => this.showSnackbar = false, 3000);
    },
    async onSubmit() {
      if (!this.email || !this.password || !this.icon || !this.subscription) {
        this.showSnack('Missing items, complete the form', 'error');
        return;
      }
      this.error = this.success = null;
      try {
        const api = new AuthApiService();
        await api.signUp({
          email:        this.email,
          password:     this.password,
          icon:         this.icon,
          subscription: this.subscription,
        });
        // mostrar snackbar de éxito antes de emitir
        this.showSnack('Registration successful! Redirecting to login…', 'success');
        setTimeout(() => this.$emit('registered'), 1000);
      } catch (err) {
        console.error(err);
        const msg = err.response?.data?.message?.value || 'Server error. Please try again.';
        this.showSnack(msg, 'error');
      }
    },
  },
};
</script>


<template>
  <div class="register-form-container">
    <form @submit.prevent="onSubmit" class="register-form" novalidate>
      <h2 class="register-title">Sign Up</h2>
      <label for="email">Email</label>
      <input id="email" v-model="email" type="email" />

      <label for="password">Password</label>
      <input id="password" v-model="password" type="password" />

      <label for="icon">Icon URL</label>
      <input id="icon" v-model="icon" type="text" placeholder="https://..." />

      <label for="subscription">Subscription</label>
      <select id="subscription" v-model="subscription">
        <option disabled value="">Please select a subscription</option>
        <option value="Basic">Basic</option>
        <option value="Advanced">Advanced</option>
        <option value="Premium">Premium</option>
      </select>

      <button type="submit">Sign Up</button>

      <div v-if="showSnackbar" :class="['snackbar', snackbarType]">
        {{ snackbarMessage }}
      </div>
    </form>
  </div>
</template>

<style scoped>
.register-form-container {
  width: 320px;
  margin: 0px auto;
  padding: 1rem;
  border-radius: 16px;
  box-shadow:
    0 10px 20px rgba(167, 209, 210, 0.3),
    0 20px 40px rgba(167, 209, 210, 0.2),
    0 30px 60px rgba(167, 209, 210, 0.1),
    0 0 0 10px rgba(167, 209, 210, 0.05);
  border: 1px solid #A7D1D2;
}

.register-title {
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5em;
  color: #333;
  letter-spacing: 0.5px;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.register-form label {
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.2em;
  margin-top: 0.5em;
}

.register-form input,
.register-form select {
  padding: 12px 14px;
  border: 1px solid #A7D1D2;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
  background: #f9f9f9;
}

.register-form input:focus,
.register-form select:focus {
  border-color: #7aa4a4;
  background: #fff;
}

.register-form button[type="submit"] {
  margin-top: 1.5em;
  padding: 12px 0;
  background: #DFEEEF;
  color: #3b3b3b;
  border: 2px solid #A7D1D2;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border 0.2s;
}

.register-form button[type="submit"]:hover {
  background: #8BB5B6;
  color: #fff;
  border: 2px solid #8BB5B6;
}

.snackbar {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 200px;
  padding: 14px 24px;
  color: #fff;
  border-radius: 4px;
  text-align: center;
  z-index: 1000;
  opacity: 0.9;
}
.snackbar.error {
  background-color: #e74c3c;
}
.snackbar.success {
  background-color: #27ae60;
}
</style>