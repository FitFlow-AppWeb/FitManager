<script>
/**
 * Maintenance Component
 *
 * This component provides a modal dialog for updating an individual inventory **Item**'s details,
 * specifically its **next maintenance date**, **assigned employee (trainer)**, and **status**.
 * It fetches the list of available employees and allows the user to select one.
 * The component includes client-side validation for input fields and handles communication with the backend
 * to persist changes.
 *
 * It receives the `itemData` (an `Item` instance) to pre-populate the form and a `visible` prop
 * to control the dialog's visibility.
 *
 * The component emits the following events:
 * - `close`: When the modal is requested to be closed.
 * - `item-updated`: When an item's details are successfully updated.
 *
 * Author: Tomio Nakamurakare
 */
import { ItemApiService } from "../services/item-api.service.js";
import { EmployeeApiService } from "../../employees/services/employee-api.service.js";
import { Item } from "../model/item.entity.js";
import InputText from 'primevue/inputtext';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';

export default {
  name: "maintenance.component",
  components: {
    'pv-inputtext': InputText,
    'pv-datepicker': DatePicker,
    'pv-select': Select
  },
  props: {
    itemData: {
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
      localItemData: new Item(this.itemData),
      nextMaintenanceDateInput: null,
      employees: [],
      itemApiService: null,
      employeeApiService: null,
      touched: {},
      errors: {},
      errorMessage: "",
    };
  },
  computed: {
    hasErrors() {
      return Object.values(this.errors).some(error => !!error);
    }
  },
  watch: {
    visible(newValue) {
      console.log("Modal visibility changed:", newValue);
      if (newValue && this.itemData) {
        this.localItemData = new Item(this.itemData);

        this.nextMaintenanceDateInput = this.itemData.nextMaintenanceDate
            ? new Date(this.itemData.nextMaintenanceDate)
            : null;

        this.errors = {};
        this.touched = {};
        this.errorMessage = "";

        console.log("itemData al abrir modal:", this.itemData);
        console.log("nextMaintenanceDateInput (precargado):", this.nextMaintenanceDateInput);

      } else if (!newValue) {
        this.nextMaintenanceDateInput = null;
        this.localItemData = new Item(this.itemData);
        this.errors = {};
        this.touched = {};
        this.errorMessage = "";
      }
    },
    nextMaintenanceDateInput(newValue) {
      if (this.touched.nextMaintenanceDateInput) {
        this.validateField('nextMaintenanceDateInput', newValue);
      }
    },
    'localItemData.status'(newValue) {
      if (this.touched.status) {
        this.validateField('status', newValue);
      }
    },
    'localItemData.employeeId'(newValue) {
      if (this.touched.employeeId) {
        this.validateField('employeeId', newValue);
      }
    }
  },
  created() {
    console.log("maintenance.component.vue created!");
    this.itemApiService = new ItemApiService();
    this.employeeApiService = new EmployeeApiService();
    this.fetchEmployees();
  },
  methods: {
    touch(field) {
      this.touched[field] = true;
      if (field === 'status' || field === 'employeeId') {
        this.validateField(field, this.localItemData[field]);
      } else {
        this.validateField(field, this[field]);
      }
    },

    validateField(field, value) {
      switch (field) {
        case "nextMaintenanceDateInput":
          if (!value) {
            this.errors.nextMaintenanceDateInput = "validation.next_maintenance_date_required";
          } else {
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const selectedDate = new Date(value);
            selectedDate.setHours(0, 0, 0, 0);

            if (selectedDate < today) {
              this.errors.nextMaintenanceDateInput = "validation.next_maintenance_date_in_past";
            } else {
              this.errors.nextMaintenanceDateInput = "";
            }
          }
          break;
        case "status":
          this.errors.status = !value ? "validation.status_required" : "";
          break;
        case "employeeId":
          this.errors.employeeId = !value ? "validation.employee_required" : "";
          break;
      }
    },

    async updateItemDetails() {
      this.touch('nextMaintenanceDateInput');
      this.touch('status');
      this.touch('employeeId');

      if (this.hasErrors) {
        return;
      }
      this.errorMessage = "";

      try {
        this.localItemData.lastMaintenanceDate = new Date().toISOString();

        this.localItemData.nextMaintenanceDate = this.nextMaintenanceDateInput
            ? this.nextMaintenanceDateInput.toISOString()
            : null;

        console.log("Datos del ítem a enviar para actualización:", this.localItemData);

        const response = await this.itemApiService.updateItem(this.localItemData);
        console.log("Item actualizado con éxito:", response);

        this.$emit("item-updated");
        this.closeModal();
      } catch (error) {
        console.error("Error al actualizar el ítem o añadir mantenimiento:", error);
        this.errorMessage = this.$t("validation.server_error") + (error.response?.data?.message ? `: ${error.response.data.message}` : "");
      }
    },
    closeModal() {
      this.$emit("close");
      this.nextMaintenanceDateInput = null;
      this.localItemData = new Item(this.itemData);
      this.errors = {};
      this.touched = {};
      this.errorMessage = "";
    },
    async fetchEmployees() {
      try {
        const allEmployees = await this.employeeApiService.getAllEmployees();
        this.employees = allEmployees.map(emp => ({name: emp.fullName, value: emp.id}));
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    }
  }
};
</script>

<template>
  <pv-dialog
      :header="$t('inventory.add-maintenance-and-trainer')"
      :visible="visible"
      @update:visible="closeModal"
      modal
      class="p-fluid"
      :style="{ width: '40vw' }"
      aria-labelledby="edit-item-dialog-header"
      aria-describedby="edit-item-dialog-description"
  >
    <form @submit.prevent="updateItemDetails">
      <div class="field">
        <label for="nextMaintenanceDate" class="font-bold">{{ $t('inventory.next-maintenance') }}</label>
        <pv-datepicker
            id="nextMaintenanceDate"
            v-model="nextMaintenanceDateInput"
            dateFormat="dd/mm/yy"
            showIcon
            class="w-full"
            :placeholder="$t('inventory.select-next-maintenance-date')"
            aria-label="Next maintenance date"
            :showClear="true"
            @blur="touch('nextMaintenanceDateInput')"
        />
        <p v-if="touched.nextMaintenanceDateInput && errors.nextMaintenanceDateInput" class="error">
          {{ $t(errors.nextMaintenanceDateInput) }}
        </p>
      </div>

      <div class="field">
        <label for="employeeSelect" class="font-bold">{{ $t('inventory.assigned-employee') }}</label>
        <pv-select
            id="employeeSelect"
            v-model="localItemData.employeeId"
            :options="employees"
            :placeholder="$t('inventory.select-employee')"
            option-label="name"
            option-value="value"
            class="w-full"
            :showClear="true"
            aria-label="Select assigned employee"
            @blur="touch('employeeId')"
        />
        <p v-if="touched.employeeId && errors.employeeId" class="error">
          {{ $t(errors.employeeId) }}
        </p>
      </div>

      <div class="field">
        <label for="itemStatus" class="font-bold">{{ $t('inventory.status') }}</label>
        <pv-inputtext
            id="itemStatus"
            v-model="localItemData.status"
            :placeholder="$t('inventory.enter-status')"
            class="w-full"
            aria-label="Enter item status"
            @blur="touch('status')"
        />
        <p v-if="touched.status && errors.status" class="error">
          {{ $t(errors.status) }}
        </p>
      </div>

      <p v-if="errorMessage" class="text-red-600 mt-2 error">{{ errorMessage }}</p>

      <div class="actions">
        <pv-button :label="$t('general.confirm')" type="submit" class="update-button" aria-label="Confirm changes"/>
        <pv-button :label="$t('general.cancel')" type="button" @click="closeModal" class="cancel-button"
                   aria-label="Cancel"/>
      </div>
    </form>
  </pv-dialog>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  width: 400px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.modal-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #A7D1D2;
  text-align: center;
}

.input-field {
  width: 100%;
  margin-bottom: 1rem;
  background-color: white;
  border: 1px solid #A7D1D2;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
}

.input-field:focus {
  border-color: #5d7273 !important;
  outline: none;
}

::v-deep(.p-dropdown),
::v-deep(.p-calendar),
::v-deep(.p-inputtext) {
  background-color: white !important;
  border: 1px solid #A7D1D2 !important;
  border-radius: 4px !important;
  color: #333 !important;
  width: 100% !important;
  font-size: 1rem !important;
}

::v-deep(.p-dropdown-label) {
  color: #333 !important;
}

::v-deep(.p-dropdown-item) {
  color: #333 !important;
}

::v-deep(.p-dropdown-item:hover) {
  background-color: #A7D1D2 !important;
  color: white !important;
}

.update-button {
  background-color: #A7D1D2;
  color: white;
  border: none;
  width: 100%;
  margin-top: 1rem;
}

.update-button:hover {
  background-color: #8FBFC0 !important;
  border-color: #8FBFC0 !important;
}

.cancel-button {
  background-color: #f0f0f0;
  color: #A7D1D2;
  border: none;
  width: 100%;
  margin-top: 1rem;
}

.cancel-button:hover {
  background-color: #dcdcdc !important;
  border-color: #8FBFC0 !important;
  color: #000 !important;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.error {
  color: red;
  font-size: 0.85rem;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
}
</style>