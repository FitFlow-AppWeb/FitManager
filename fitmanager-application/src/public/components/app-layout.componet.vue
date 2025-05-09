<script setup>
  import Sidebar from './sidebar.component.vue'
  import Toolbar from './toolbar.component.vue'

</script>

<template>
  <div class="app-layout">
    <Sidebar/>
    <div class="app-content">
      <Toolbar/>
      <main class="page-content">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<style scoped>
  .app-layout {
    display: flex;
    height: 100vh;
    overflow: hidden;
  }

  .app-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  .page-content {
    flex: 1;
    padding: 20px;
  }

</style>