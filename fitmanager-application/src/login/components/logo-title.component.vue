<!--
This Vue component displays the logo and title for the application. The logo is an image and the title is "FITMANAGER" in an h1 element.
It is a simple static component used as a branding header in the UI.
Author: Victor Ortiz
-->

<script>
export default {
  name: 'LogoTitle',
};
</script>

<template>
  <div class="logo-title-container">
    <img src="/assets/logo-app.png" alt="FitManager Logo" class="logo" />
    <h1>FITMANAGER</h1>
  </div>
</template>



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
