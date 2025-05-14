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
  }
}
</script>

<template>
  <pv-dialog
      :header="$t('classes.delete-class')"
      :visible="visible"
      @update:visible="closeDialog"
      modal
  >
    <p>{{ $t('classes.delete-confirmation') }}</p>
    <div class="dialog-actions">
      <pv-button :label="$t('general.cancel')" class="p-button-secondary" @click="closeDialog" />
      <pv-button :label="$t('classes.delete')" class="p-button-danger" @click="deleteClass" />
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