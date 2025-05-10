<script>
import {defineComponent} from "vue";
import {Divider as PvDivider} from "primevue";

export default defineComponent({
  components: {PvDivider}
})

</script>

<template>
  <pv-card>
    <template #title>
      General Information
      <pv-divider/>
    </template>
    <template #content>
      Finances Info
    </template>

<!--    <template #footer>-->
<!--&lt;!&ndash;      <pv-button @click="$emit('close')">Download Info</pv-button>&ndash;&gt;-->
<!--    </template>-->
  </pv-card>
</template>

<style scoped>

</style>