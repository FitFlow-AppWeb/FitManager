<script>
/**
 * Fire Employee Component
 *
 * This component is responsible for displaying a dialog that allows the user to confirm the firing of an employee.
 * The dialog is triggered by the parent component and shows the employee's firing confirmation message.
 * If confirmed, the employee is fired through an API call and the dialog closes.
 * The component listens to visibility changes and emits events to notify the parent when the employee is fired or the dialog is closed.
 *
 * Author: Cassius Martel
 */

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
      :header="$t('employees.fire-employee')"
      :visible="visible"
      @update:visible="closeDialog"
      modal
      aria-labelledby="fire-employee-dialog"
  >
    <p>{{ $t('employees.fire-confirmation') }}</p>
    <div class="dialog-actions">
      <pv-button :label="$t('general.cancel')" class="p-button-secondary" @click="closeDialog" aria-label="Cancel" />
      <pv-button :label="$t('employees.fire')" class="p-button-danger" @click="fireEmployee" aria-label="Fire employee" />
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