//
// The `InventoryComponent` is a Vue.js component responsible for managing the inventory. It includes functionality
// for listing, adding, editing, and deleting inventory items. The component renders multiple child components,
// including `InventoryList`, `AddInventory`, `EditInventory`, and `DeleteInventory`.
// - `InventoryList` displays the list of inventory items and provides options for selecting, adding, editing,
// and deleting items.
// - `AddInventory` is used for adding new items to the inventory,
// - `EditInventory` is used for editing the details of a selected item, and
// - `DeleteInventory` is used for confirming and deleting an item.
// The component maintains a list of inventory items (`inventory`) and tracks the selected inventory item (`selectedInventory`).
// It manages the visibility of modals for adding, editing, and deleting inventory through `showAddModal`,
// `showEditModal`, and `showDeleteModal`. It fetches the inventory data from the API when the component is mounted,
// and after an action like adding, editing, or deleting, the inventory list is refreshed.
//
// Author: Cassius Martel
//

<script>
import { InventoryApiService } from "../services/inventory-api.service.js";
import InventoryList from "./inventory-list.component.vue"
import AddInventory from ".//add-inventory.component.vue"
import EditInventory from "./edit-inventory.component.vue";
import DeleteInventory from "./delete-inventory.component.vue";
import DeleteClass from "../../classes/components/delete-class.component.vue";

export default {
  name: "InventoryComponent",
  components: {DeleteClass, EditInventory, InventoryApiService, InventoryList, AddInventory, DeleteInventory},
  data() {
    return {
      inventory: [],
      selectedInventory: null,
      showAddModal: false,
      showEditModal: false,
      showDeleteModal: false,
    }
  },
  methods: {
    onInventorySelected(inventory) {
      this.selectedInventory = inventory;
    },
    onEditRequest(inventory) {
      this.selectedInventory = inventory;
      this.showEditModal = true;
    },
    ondDeleteRequest(inventory) {
      this.selectedInventory = inventory;
      this.showDeleteModal = true;
    },

    fetchInventory() {
      const service = new InventoryApiService();
      service.getInventory().then(data => {
        this.inventory = data;
      });
    }
  },
  mounted(){
    this.fetchInventory();
  }
}
</script>

<template>
  <div class="inventory-container">
    <!-- Panel de lista -->
    <div class="list-pane">
      <InventoryList
          :inventory="inventory"
          @selected="onInventorySelected"
          @add-request="showAddModal = true"
          @edit-request="onEditRequest"
          @delete-request="ondDeleteRequest"
          aria-label="Inventory list"
      />
      <AddInventory
          v-if="showAddModal"
          @close="showAddModal = false"
          @inventory-added="fetchInventory"
          aria-labelledby="add-inventory-modal-title"
      />
      <EditInventory
          v-if="showEditModal"
          :inventory-data="selectedInventory"
          @close="showEditModal = false"
          @inventory-updated="fetchInventory"
          aria-labelledby="edit-inventory-modal-title"
      />
      <DeleteInventory
          v-if="showDeleteModal"
          :inventory-data="selectedInventory"
          :visible="showDeleteModal"
          @close="showDeleteModal = false"
          @deleted-inventory="fetchInventory"
          aria-labelledby="delete-inventory-modal-title"
      />
    </div>
  </div>
</template>

<style scoped>
.inventory-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
}

.list-pane {
  flex: 2;
  display: flex;
  justify-content: center;
}
</style>