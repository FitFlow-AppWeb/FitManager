<!--
// The `AddInventoryComponent` is a Vue.js component that enables users to add new inventory items.
// It provides a form where the user can input inventory details including name, description, quantity,
// last maintenance date, next maintenance date, and the trainer responsible for the item. The component
// fetches a list of trainers from the backend and populates a dropdown menu for selecting a trainer.
// Upon form submission, the data is formatted and sent to the backend via the `InventoryApiService`.
// After successful submission, it emits events to notify that the inventory has been added and to close the modal.
//
// Author: Cassius Martel
-->

<script>
import {InventoryApiService} from "../services/inventory-api.service.js";
import axios from "axios";

export default {
  name: "add-inventory.component",
  data() {
    return {
      name: "",
      trainer_id: null,
      trainers: [],
      description: "",
      last_maintenance: "",
      next_maintenance: "",
      quantity: "",
    };
  },
  methods: {
    async submitForm() {
      const formattedLast = this.last_maintenance instanceof Date
          ? this.last_maintenance.toISOString().split('T')[0]
          : this.last_maintenance;
      const formattedNext = this.next_maintenance instanceof Date
          ? this.next_maintenance.toISOString().split('T')[0]
          : this.next_maintenance;
      const inventory = {

        name: this.name,
        description: this.description,
        quantity: this.quantity,
        last_maintenance: formattedLast,
        next_maintenance: formattedNext,
        trainer_id: this.trainer_id,
      };

      const service = new InventoryApiService();
      await service.addInventory(inventory);
      this.$emit("inventory-added");
      this.$emit("close");
    },
    async fetchTrainers() {
      try {
        const response = await axios.get("https://fitmanager.onrender.com/employees");
        this.trainers = response.data
            .filter(emp => emp.role === "group instructor" || emp.role === "trainer")
            .map(emp => ({name: emp.fullName, value: emp.id}));
      } catch (error) {
        console.error("Error fetching trainers:", error);
      }
    }
  },
  mounted() {
    this.fetchTrainers();
  }
}
</script>

<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h2 class="modal-title">{{ $t('inventory.add-new-item') }}</h2>
      <form @submit.prevent="submitForm">
        <pv-inputtext v-model="name" :placeholder="$t('inventory.name')" class="input-field" required aria-label="Inventory name" />
        <pv-inputtext v-model="description" :placeholder="$t('inventory.description')" class="input-field" required aria-label="Inventory description" />
        <pv-inputtext v-model.number="quantity" :placeholder="$t('inventory.quantity')" type="number" class="input-field" required aria-label="Inventory quantity" />
        <pv-datepicker v-model="last_maintenance" :placeholder="$t('inventory.last-maintenance')" class="input-field" required aria-label="Last maintenance date" />
        <pv-datepicker v-model="next_maintenance" :placeholder="$t('inventory.next-maintenance')" class="input-field" required aria-label="Next maintenance date" />

        <pv-select
            v-model="trainer_id"
            :options="trainers"
            :placeholder="$t('inventory.select-trainer')"
            option-label="name"
            option-value="value"
            class="input-field"
            required aria-label="Select trainer"
        />

        <div class="actions">
          <pv-button :label="$t('general.add')" type="submit" class="add-button" aria-label="Add inventory" />
          <pv-button :label="$t('general.cancel')" type="button" @click="$emit('close')" class="cancel-button" aria-label="Cancel" />
        </div>
      </form>
    </div>
  </div>
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

.add-button {
  background-color: #A7D1D2;
  color: white;
  border: none;
  width: 100%;
  margin-top: 1rem;
}


.add-button:hover {
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
</style>