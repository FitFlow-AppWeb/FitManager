<!--
* This code defines a toolbar component that includes a search field and a user profile button.
* The toolbar uses PrimeVue's `Toolbar`, `IconField`, `InputIcon`, `InputText`, and `Button` components to create the layout.
* On the left side of the toolbar, there is a search field with an icon and a text input for search functionality.
* On the right side, there is a button that redirects the user to the profile page when clicked.
* The toolbar is wrapped inside a div with the class `app-card`.
*
* Author: Renzo Luque
-->

<script setup>
import Toolbar from 'primevue/toolbar';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from "primevue/inputtext";
import Button from 'primevue/button';
</script>

<template>
  <div class="app-card">
    <Toolbar class="app-toolbar" role="toolbar" aria-label="Main Toolbar">
      <template #start>
        <IconField class="toolbar-search">
          <InputIcon class="pi pi-search" aria-hidden="true" />
          <InputText class="search-input-text" placeholder="Search" aria-label="Search input" />
        </IconField>
      </template>
      <template #end>
        <RouterLink to="/profile" aria-label="Go to Profile">
          <Button class="toolbar-profile-pic" variant="outlined" icon="pi pi-user" aria-label="Profile Button"/>
        </RouterLink>
      </template>
    </Toolbar>
  </div>
</template>


<style scoped>

.app-card {
  display: flex;
  min-height: 70px;
  height: 70px;
  width: 100%;
}

.app-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  padding: 0 50px;
}

:deep(.search-input-text:focus) {
  background-color: #e6e6e6	;
}

:deep(.p-button.p-button-outlined), :deep(.p-button.p-button-outlined .p-button-icon) {
  border-color: #96bcbd;
    color: #96bcbd;
}

:deep(.p-button.p-button-outlined:hover) {
  background-color: #759293;
  border-color: #759293;
}
:deep(.p-button.p-button-outlined:hover .p-button-icon) {
  color: #ffffff;
}

:deep(.p-inputtext:focus), :deep(.p-inputwrapper:focus-within) {
  border-color: #94A3B8 !important;
}

:deep(.p-button:focus), :deep(.p-element:focus) {
  outline: 1px solid #96bcbd !important;
  box-shadow: 0 0 0 0.2rem #a7d1d2 !important;
}

</style>