<template>
  <div class="header-container">
    <!-- Imagen izquierda -->
    <div class="left-image">
      <img src="/assets/gimnasio-profile.PNG" alt="Logo PowerGym" class="logo">
    </div>

    <!-- Contenido central -->
    <div class="center-content">
      <h1 class="gym-title">POWERGYM</h1>
      <p class="user-role">Admin</p>
    </div>

    <!-- Imagen derecha -->
    <div class="right-image">
      <img src="/assets/logo-profile.PNG" alt="Usuario" class="avatar">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 20px;
}

/* Tamaños aumentados */
.left-image, .right-image {
  width: 150px;  /* Aumentado de 80px a 150px */
  height: 150px; /* Aumentado de 80px a 150px */
}

.logo, .avatar {
  width: 100%;   /* Ocupa todo el espacio disponible */
  height: 100%;  /* Ocupa todo el espacio disponible */
  object-fit: contain; /* Mantiene proporciones */
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