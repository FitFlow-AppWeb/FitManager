<script>
import { InventoryApiService } from "../services/inventory-api.service.js";

export default {
  name: "DeleteInventory",
  props: {
    inventoryData: {
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
    deleteInventory() {
      const service = new InventoryApiService();
      service.deleteInventory(this.inventoryData).then(() => {
        this.$emit("deleted-inventory", this.inventoryData);
        this.closeDialog();
      }).catch(error => {
        console.error("Error deleting item:", error);
      });
    }
  }
}
</script>

<template>
  <pv-dialog
      :header="$t('inventory.delete-item')"
      :visible="visible"
      @update:visible="closeDialog"
      modal
  >
    <p>{{ $t('inventory.delete-confirmation') }}</p>
    <div class="dialog-actions">
      <pv-button :label="$t('general.cancel')" class="p-button-secondary" @click="closeDialog" />
      <pv-button :label="$t('inventory.delete')" class="p-button-danger" @click="deleteInventory" />
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