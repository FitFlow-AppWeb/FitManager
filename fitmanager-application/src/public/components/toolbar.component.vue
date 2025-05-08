<script setup>
  import {ref} from "vue";
  import Toolbar from 'primevue/toolbar';
  import IconField from 'primevue/iconfield';
  import InputIcon from 'primevue/inputicon';
  import InputText from "primevue/inputtext";
  import Button from 'primevue/button';

</script>

<template>
  <Card>
    <Toolbar class="app-toolbar">
      <template #start>
        <IconField class="toolbar-search">
          <InputIcon class="pi pi-search" />
          <InputText class="search-input-text" placeholder="Search" />
        </IconField>
      </template>
      <template #end>
        <Button class="toolbar-profile-pic" variant="outlined" icon="pi pi-user"/>
      </template>
    </Toolbar>
  </Card>
</template>

<style scoped>

Card {
  display: flex;
  height: 70px;
  width: 100%;
}

.app-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
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