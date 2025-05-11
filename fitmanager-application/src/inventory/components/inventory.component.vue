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
      />
      <AddInventory
          v-if="showAddModal"
          @close="showAddModal = false"
          @inventory-added="fetchInventory"
      />
      <EditInventory
          v-if="showEditModal"
          :inventory-data="selectedInventory"
          @close="showEditModal = false"
          @inventory-updated="fetchInventory"
      />
      <DeleteInventory
          v-if="showDeleteModal"
          :inventory-data="selectedInventory"
          :visible="showDeleteModal"
          @close="showDeleteModal = false"
          @deleted-inventory="fetchInventory"
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