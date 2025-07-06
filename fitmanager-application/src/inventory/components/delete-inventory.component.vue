<script>
/**
 * Delete Inventory Component
 *
 * This component provides a modal dialog for confirming and executing the deletion of an individual inventory item.
 * It takes the `inventoryData` (which is assumed to have an `id`) and a `visible` prop to control its display.
 *
 * It interacts with the `ItemApiService` to perform the actual deletion operation.
 *
 * The component emits the following events:
 * - `close`: When the dialog is closed, either by clicking cancel or after a successful deletion.
 * - `deleted-inventory`: When an item is successfully deleted, passing the ID of the deleted item.
 *
 * Author: Tomio Nakamurakare
 */
import { ItemApiService } from "../services/item-api.service.js";

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
    async deleteInventory() {
      const service = new ItemApiService();

      try {
        await service.deleteItem(this.inventoryData.id);
        this.$emit("deleted-inventory", this.inventoryData.id);
        this.closeDialog();
      } catch (error) {
        console.error("Error deleting item:", error);
      }
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