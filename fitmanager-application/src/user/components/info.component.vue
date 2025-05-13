<script>
export default {
  props: {
    user: Object,
    required: true
  },
  methods: {
    handleImageError(e) {
      console.error("Error loading image:", e.target.src);
    }
  }
};
</script>

<template>
  <div v-if="user" class="header-container">
    <div class="left-image">
      <img
          :src="user.gymLogo"
          alt="User gym logo"
          class="logo"
          @error="handleImageError"
      >
    </div>

    <div class="center-content">
      <h1 class="gym-title">{{user.name}}</h1>
      <p class="user-role">{{ user.role }}</p>
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

  <div v-else>
    {{ $t('general.loading') }} . . .
  </div>
</template>

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