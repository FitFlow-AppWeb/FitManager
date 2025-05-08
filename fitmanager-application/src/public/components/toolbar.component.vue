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
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText placeholder="Búsqueda" />
        </IconField>
      </template>
      <template #center>
        <Button label="Test"/>
        <pv-button label="Pv-Button-Test"/>
      </template>
      <template #end>
        <span class="temp-text">Profile</span>
      </template>
    </Toolbar>
  </Card>
</template>

<style scoped>

Card {
  display: flex;
  background-color: gray;
  height: 68px;
  width: 100%;
}

.app-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.temp-text {
  color:black;
}

</style>