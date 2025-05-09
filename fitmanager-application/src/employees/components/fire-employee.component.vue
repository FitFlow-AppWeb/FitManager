<script>
import { EmployeeApiService } from "../services/employee-api.service.js"

export default {
  name: "fire-employee.component",
  props: {
    employee: {
      type: Object,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      localVisible: this.visible
    };
  },

  watch: {
    visible(val) {
      this.localVisible = val;
    }
  },

  methods: {
    closeDialog() {
      this.localVisible = false;
      this.$emit("close");
    },
    fireEmployee() {
      const service = new EmployeeApiService();
      service.fireEmployee(this.employee).then(() => {
        this.$emit("employee-fire", this.employee);
        this.closeDialog();
      }).catch(error => {
        console.error("Error firing employee:", error);
      });
    }
  }
}
</script>

<template>
  <pv-dialog
      header="Fire employee"
      :visible="visible"
      @update:visible="closeDialog"
      modal
  >
    <p>Are you sure you want to fire this employee?</p>
    <div class="dialog-actions">
      <pv-button label="Cancel" class="p-button-secondary" @click="closeDialog" />
      <pv-button label="Fire" class="p-button-danger" @click="fireEmployee" />
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