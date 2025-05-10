<template>
  <div class="logo-title-container">
    <img src="/assets/logo-app.png" alt="FitManager Logo" class="logo" />
    <h1>FITMANAGER</h1>
  </div>
</template>

<script>
export default {
  name: 'LogoTitle',
};
</script>

<style scoped>
.logo-title-container {
  text-align: center;
  margin-bottom: 10px;
}

.logo {
  width: 120px;
  height: auto;
}

h1 {
  font-size: 36px;
  font-weight: bold;
  color: #3b3b3b;
}
</style>
