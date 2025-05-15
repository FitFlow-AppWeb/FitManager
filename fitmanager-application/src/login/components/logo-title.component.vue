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
    <img src="/assets/fit-manager-logo.svg" alt="FitManager Logo" class="logo" />
    <h1>FITMANAGER</h1>
  </div>
</template>



<style scoped>
.logo-title-container {
  text-align: center;
}

.logo {
  width: 140px;
  height: auto;
}

h1 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 75px;
  font-weight: 400;
  color: #545353;
  margin: 0px;
}
</style>
