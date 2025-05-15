<!--
// The `DeleteInventory` is a Vue.js component that handles the deletion of an inventory item.
// It displays a confirmation dialog to the user, asking whether they are sure they want to delete the item.
// The component accepts two props: `inventoryData`, which contains the data of the inventory item to be deleted,
// and `visible`, which controls the visibility of the confirmation dialog. When the user confirms the deletion,
// the item is sent to the backend for removal via the `InventoryApiService`. After the deletion, the component emits
// an event to notify the parent component that the item has been deleted and closes the dialog.
// The component also handles errors in case the deletion process fails.
//
// Author: Cassius Martel
-->

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
      aria-labelledby="delete-inventory-dialog-header"
      aria-describedby="delete-inventory-dialog-description"
  >
    <p id="delete-inventory-dialog-description">{{ $t('inventory.delete-confirmation') }}</p>
    <div class="dialog-actions">
      <pv-button
          :label="$t('general.cancel')"
          class="p-button-secondary"
          @click="closeDialog"
          aria-label="Cancel deletion"
      />
      <pv-button
          :label="$t('inventory.delete')"
          class="p-button-danger"
          @click="deleteInventory"
          aria-label="Delete inventory item"
      />
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