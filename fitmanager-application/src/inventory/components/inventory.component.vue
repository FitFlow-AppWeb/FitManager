<script>
/**
 * Inventory Component
 *
 * This is the main component for the inventory management feature. It orchestrates the display,
 * addition, deletion, viewing, and maintenance of inventory items. It interacts with the
 * `ItemApiService` to fetch and manage item data and utilizes several child components
 * to handle specific UI/UX functionalities.
 *
 * The component manages the state for:
 * - The list of items, grouped by their type (`groupedItems`).
 * - Currently selected individual item or grouped item.
 * - Visibility of various modal dialogs for adding, deleting, viewing details, and performing maintenance.
 *
 * It provides the following core functionalities:
 * - **Data Fetching:** Retrieves all inventory items from the backend and groups them by `ItemType`.
 * - **Item Grouping:** Organizes individual items into logical groups based on their type, providing
 * a count and aggregated information for each type.
 * - **Modal Management:** Controls the display of different modals for specific actions:
 * - `AddPurchase`: To add new inventory items (integrated via a purchase flow).
 * - `DeleteInventory`: To confirm and delete an individual item.
 * - `ViewItems`: To display a detailed list of individual items within a selected type.
 * - `Maintenance`: To update maintenance details and assigned trainers for individual items.
 * - **Event Handling:** Responds to events from child components to trigger data updates or modal changes.
 *
 * Author: Tomio Nakamurakare
 */
import { ItemApiService } from "../services/item-api.service.js";
import InventoryList from "./inventory-list.component.vue";
import AddPurchase from "../../finances/components/add-purchase.component.vue";
import DeleteInventory from "./delete-inventory.component.vue";
import ViewItems from "./view-items.component.vue";
import Maintenance from "./maintenance.component.vue";

export default {
  name: "InventoryComponent",
  components: {
    InventoryList,
    AddPurchase,
    DeleteInventory,
    ViewItems,
    Maintenance
  },
  data() {
    return {
      itemService: null,
      items: [],
      selectedItem: null,
      selectedGroupedItem: null,
      showAddModal: false,
      showDeleteModal: false,
      showViewItemsModal: false,
      showMaintenanceModal: false,
    };
  },
  methods: {
    onOpenMaintenanceModalRequest(item) {
      this.selectedItem = item;
      this.showMaintenanceModal = true;
    },
    onDeleteRequest(item) {
      this.selectedItem = item;
      this.showDeleteModal = true;
    },
    onViewMoreRequest(groupedItem) {
      this.selectedGroupedItem = groupedItem;
      this.showViewItemsModal = true;
    },
    closeViewItemsModal() {
      this.showViewItemsModal = false;
      this.selectedGroupedItem = null;
    },
    closeMaintenanceModal() {
      this.showMaintenanceModal = false;
      this.selectedItem = null;
    },
    onPurchaseAdded() {
      this.fetchItems();
    },

    async fetchItems() {
      try {
        const data = await this.itemService.getAllItems();
        this.items = data;
        if (this.selectedItem) {
          const updatedItem = this.items.find(i => i.id === this.selectedItem.id);
          this.selectedItem = updatedItem || null;
        }
      } catch (error) {
        console.error("Error al obtener ítems:", error);
      }
    }
  },
  computed: {
    groupedItems() {
      const grouped = {};
      this.items.forEach(item => {
        const itemTypeId = item.itemTypeId;

        if (!grouped[itemTypeId]) {
          grouped[itemTypeId] = {
            id: item.itemTypeId,
            name: item.name,
            description: item.description,
            lastMaintenanceDate: item.lastMaintenanceDate,
            nextMaintenanceDate: item.nextMaintenanceDate,
            assignedTrainerFullName: item.assignedTrainerFullName,
            status: item.status,
            quantity: 0,
            individualItems: []
          };
        }
        grouped[itemTypeId].quantity++;
        grouped[itemTypeId].individualItems.push(item);
      });
      return Object.values(grouped);
    }
  },
  created() {
    this.itemService = new ItemApiService();
    this.fetchItems();
  }
};
</script>

<template>
  <div class="inventory-container">
    <div class="list-pane">
      <InventoryList
          :items="groupedItems"
          @add-request="showAddModal = true" @view-more-request="onViewMoreRequest"
          aria-label="Inventory list"
      />

      <AddPurchase
          v-if="showAddModal"
          @close="showAddModal = false"
          @purchase-added="onPurchaseAdded" aria-labelledby="add-purchase-modal-title"
      />

      <DeleteInventory
          v-if="showDeleteModal"
          :inventory-data="selectedItem"
          :visible="showDeleteModal"
          @close="showDeleteModal = false"
          @deleted-inventory="fetchItems"
          aria-labelledby="delete-inventory-modal-title"
      />
      <ViewItems
          v-if="showViewItemsModal"
          :grouped-item-data="selectedGroupedItem"
          :visible="showViewItemsModal"
          @close="closeViewItemsModal"
          @open-maintenance-modal-request="onOpenMaintenanceModalRequest"
          @delete-individual-request="onDeleteRequest"
          aria-labelledby="view-items-modal-title"
      />
      <Maintenance
          v-if="showMaintenanceModal"
          :item-data="selectedItem"
          :visible="showMaintenanceModal"
          @close="closeMaintenanceModal"
          @item-updated="fetchItems"
          aria-labelledby="maintenance-modal-title"
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