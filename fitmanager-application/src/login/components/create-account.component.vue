<!--
// This Vue component defines a button that, when clicked, navigates the user to the "Create Account" page by using Vue Router.
// The `goToCreateAccount` method is responsible for navigating to the "/create-account" route.
// Author: Victor Ortiz
-->

<script>
export default {
  methods: {
    goToCreateAccount() {
      this.$router.push('/create-account');
    },
  },
};
</script>

<template>
  <div class="create-account-btn">
    <button @click="goToCreateAccount">{{ $t('login.register') }}</button>
  </div>
</template>



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
