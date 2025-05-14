<!--
* This file defines the main layout for the application, which includes a Sidebar and a Toolbar.
* It uses Vue's composition API with the <script setup> syntax. The layout consists of two main
* parts: the sidebar (Sidebar component) and the content area (with the Toolbar component and
* dynamic page content via <router-view>). This layout serves as a container for different views
* in the app, providing consistent navigation and actions across pages.
*
* Author: Renzo Luque
-->

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