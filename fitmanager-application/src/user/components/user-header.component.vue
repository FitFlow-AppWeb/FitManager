<script>
export default {
  name: 'UserHeader',
  props: {
    user: Object,
    required: true
  },
  methods: {
    handleImageError(e) {
      e.target.src = 'https://www.primefaces.org/primevue/showcase/resources/images/avatar/amyelsner.png'; // Ejemplo de avatar por defecto de PrimeVue
      console.error("Error loading user icon image:", e.target.src);
    }
  }
};
</script>

<template>
  <div v-if="user" class="header-container">
    <div class="center-content">
      <h1 class="gym-title" aria-label="Gym name">FitManager</h1>
    </div>

    <div class="right-image">
      <img
          v-if="user.icon && user.icon.trim() !== ''"
          :src="user.icon"
          alt="User Avatar"
          class="avatar"
          @error="handleImageError"  aria-label="User avatar"
      >
      <img
          v-else
          src="https://www.primefaces.org/primevue/showcase/resources/images/avatar/amyelsner.png"
          alt="Default User Avatar"
          class="avatar"
          aria-label="Default user avatar"
      >
    </div>
  </div>

  <div v-else>
    <p aria-live="polite">{{ $t('general.loading') }} . . .</p>
  </div>
</template>




<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}


.center-content {
  flex-grow: 1;
  text-align: center;
}

.gym-title {
  font-size: 2.8em;
  color: #a7d1d2;
  margin: 0;
  font-weight: 700;
  letter-spacing: 1px;
}

.user-role {
  color: #666;
  font-size: 1.1em;
  margin-top: 5px;
}

.right-image {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #f0f0f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>