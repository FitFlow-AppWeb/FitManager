<!--
  This Vue component is used to display a user profile header with the user's gym logo, name, role, and avatar. It takes a `user` object as a prop, and if the `user` object exists, it displays the gym logo on the left, the user's name and role in the center, and the user's avatar on the right. If any of the images fail to load, an error message is logged to the console using the `handleImageError` method. If the `user` object is not available, a loading message is shown instead.

  Author: Juan Alvarado
-->

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
          aria-label="User gym logo"
      >
    </div>

    <div class="center-content">
      <h1 class="gym-title" aria-label="Gym name">{{user.name}}</h1>
      <p class="user-role" aria-label="User role">{{ user.role }}</p>
    </div>

    <div class="right-image">
      <img
          :src="user.avatar"
          alt="User Avatar"
          class="avatar"
          @error="handleImageError"
          aria-label="User avatar"
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