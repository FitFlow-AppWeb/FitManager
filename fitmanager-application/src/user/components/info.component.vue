<template>
  <div class="header-container">
    <!-- Debug: Muestra los datos recibidos -->
    <!-- <pre>{{ user }}</pre> -->

    <div class="left-image">
      <img
          :src="user.gymLogo"
          alt="Gym Logo"
          class="logo"
          @error="handleImageError"
      >
    </div>

    <div class="center-content">
      <h1 class="gym-title">POWERGYM</h1>
      <p class="user-role">{{ user.role || 'Admin' }}</p>
    </div>

    <div class="right-image">
      <img
          :src="user.avatar"
          alt="User Avatar"
          class="avatar"
          @error="handleImageError"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  methods: {
    handleImageError(e) {
      console.error("Error loading image:", e.target.src);
      // Puedes establecer imágenes por defecto aquí si fallan
      e.target.src = "/assets/default-image.png";
    }
  }
};
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 20px;
}

.left-image, .right-image {
  width: 150px;
  height: 150px;
}

.logo, .avatar {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.center-content {
  text-align: center;
  flex-grow: 1;
}

.gym-title {
  font-size: 2.5rem;
  color: #d32f2f;
  margin-bottom: 5px;
  font-weight: 700;
  text-transform: uppercase;
}

.user-role {
  font-size: 1.2rem;
  color: #555;
  background: #f0f0f0;
  display: inline-block;
  padding: 3px 15px;
  border-radius: 15px;
}
</style>