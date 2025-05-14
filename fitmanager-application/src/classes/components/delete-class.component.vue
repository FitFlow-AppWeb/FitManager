<!--
// Description: This code defines the `DeleteClass` component, which is used to show a confirmation dialog for deleting a class.
// It receives two props: `classData` (the class to be deleted) and `visible` (a boolean indicating whether the dialog is visible or not).
// The `deleteClass` method sends a request to delete the class via the `ClassApiService`. Upon successful deletion, it emits a `deleted-gymClass` event with the deleted class data and closes the dialog.
// The dialog can be closed either by clicking the cancel button or by deleting the class.
// Author: Cassius Martel
-->

<script>
import { ClassApiService } from "../services/class-api.service.js";

export default {
  name: "DeleteClass",
  props: {
    classData: {
      type: Object,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    closeDialog() {
      this.$emit("close");
    },
    deleteClass() {
      const service = new ClassApiService();
      service.deleteClass(this.classData).then(() => {
        this.$emit("deleted-gymClass", this.classData);

        this.closeDialog();
      }).catch(error => {
        console.error("Error deleting class:", error);
      });
    }
  },
  mounted() {

  }
}
</script>

<template>
  <pv-dialog
      :header="$t('classes.delete-class')"
      :visible="visible"
      @update:visible="closeDialog"
      modal
      aria-labelledby="delete-class-dialog"
  >
    <p id="delete-class-dialog-description">{{ $t('classes.delete-confirmation') }}</p>
    <div class="dialog-actions">
      <pv-button :label="$t('general.cancel')" class="p-button-secondary" @click="closeDialog" aria-label="Cancel deletion" />
      <pv-button :label="$t('classes.delete')" class="p-button-danger" @click="deleteClass" aria-label="Delete class" />
    </div>
  </pv-dialog>
</template>


<style scoped>
.dialog-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}
</style>