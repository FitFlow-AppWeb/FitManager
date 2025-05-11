<script>

import { InventoryApiService } from "../services/inventory-api.service.js";
import axios from "axios";


export default {
  name: "EditInventory",
  props: {
    inventoryData: Object,
  },
  data() {
    return {
      localInventoryData: { ...this.inventoryData },
      trainers: []
    };
  },
  methods: {
    async updateInventory() {
      const service = new InventoryApiService();
      await service.updateInventory(this.localInventoryData);

      this.$emit("inventory-updated");
      this.closeModal();
    },
    closeModal() {
      this.$emit("close");
    },
    async fetchTrainers() {
      try {
        const response = await axios.get("http://localhost:3000/employees");
        this.trainers = response.data
            .filter(emp => emp.role === "group instructor" || emp.role === "trainer")
            .map(emp => ({ name: emp.fullName, value: emp.id }));
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
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <h2 class="modal-title">Edit Inventory</h2>
      <form @submit.prevent="updateInventory">
        <pv-inputtext v-model="localInventoryData.name" placeholder="Name" class="input-field" required />
        <pv-inputtext v-model="localInventoryData.description" placeholder="Description" class="input-field" required />
        <pv-inputtext v-model.number="localInventoryData.quantity" placeholder="Quantity" type="number" class="input-field" required />
        <pv-datepicker v-model="localInventoryData.last_maintenance" placeholder="Last Maintenance" class="input-field" required />
        <pv-datepicker v-model="localInventoryData.next_maintenance" placeholder="Next Maintenance" class="input-field" required />

        <pv-select
            v-model="localInventoryData.trainer_id"
            :options="trainers"
            placeholder="Select Trainer"
            option-label="name"
            option-value="value"
            class="input-field"
            required
        />

        <div class="actions">
          <pv-button label="Update" type="submit" class="update-button" />
          <pv-button label="Cancel" type="button" @click="closeModal" class="cancel-button" />
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
</style>