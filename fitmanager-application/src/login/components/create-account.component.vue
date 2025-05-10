<template>
  <div class="create-account-btn">
    <button @click="goToCreateAccount">Crear Cuenta</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToCreateAccount() {
      // Lógica para navegar a la página de creación de cuenta
      this.$router.push('/create-account');
    },
  },
};
</script>

<style scoped>
.create-account-btn {
  text-align: center;
  margin-top: 20px;
}

button {
  padding: 12px 30px;
  font-size: 16px;
  background-color: #fff;
  color: #3b3b3b;
  border: 2px solid #A7D1D2;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  width: 100%;
  max-width: 300px;
}

button:hover {
  background-color: #A7D1D2;
  color: #fff;
}
</style>
