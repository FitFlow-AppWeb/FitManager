<script>
/**
 * Inventory List Component
 *
 * This component displays a list of inventory items, grouped by their item type, in a data table format.
 * It provides features for searching items by name and description, and allows for interaction with individual items.
 *
 * The component receives an array of `items` (which are already grouped) as a prop.
 *
 * It includes the following functionalities:
 * - **Item Selection:** Allows single row selection in the data table.
 * - **Search:** Filters the displayed items based on a search query applied to item name and description.
 * - **Date Formatting:** Formats dates for 'Last Maintenance' and 'Next Maintenance' columns.
 * - **Actions:** Provides buttons for:
 * - Adding a new item, emitting an `add-request` event.
 * - Viewing more details for a grouped item type, emitting a `view-more-request` event.
 * - (Potentially) Editing an individual item (though the direct edit functionality is commented out in the template).
 *
 * @emits selected - Emitted when a row in the data table is selected, with the `groupedItem` data.
 * @emits add-request - Emitted when the "Add Item" button is clicked.
 * @emits view-more-request - Emitted when the "View More" icon is clicked for a grouped item, with the `groupedItem` data.
 * @emits edit-request - (Potentially) Emitted when an edit action is triggered for an individual item.
 *
 * Author: Tomio Nakamurakare
 */
export default {
  name: "inventory-list.component",
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      internalSelection: null,
      searchQuery: "",
      showFilters: false,
    };
  },
  methods: {
    handleRowSelect(event) {
      this.internalSelection = event.data;
      this.$emit('selected', event.data);
    },
    toggleFilters() {
      this.showFilters = !this.showFilters;
    },
    applyFilters() {
      this.showFilters = false;
    },
    editInventory(groupedItem) {
      if (groupedItem.individualItems && groupedItem.individualItems.length > 0) {
        this.$emit('edit-request', groupedItem.individualItems[0]);
      } else {
        console.warn("No individual item found to edit for this grouped item type.");
      }
    },
    showDetails(groupedItem) {
      this.$emit('view-more-request', groupedItem);
      console.log("Activando 'Ver más' para:", groupedItem.name);
    },
    formatDate(dateString) {
      if (!dateString) return 'N/A';
      try {
        const date = new Date(dateString);
        const options = {year: 'numeric', month: '2-digit', day: '2-digit'};
        return date.toLocaleDateString('es-ES', options);
      } catch (e) {
        console.error("Error formatting date:", dateString, e);
        return 'Fecha inválida';
      }
    }
  },
  computed: {
    filteredItems() {
      let list = [...this.items];
      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase();
        list = list.filter(item =>
            item.name.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q)
        );
      }
      return list;
    }
  }
}
</script>

<template>
  <div class="table-container">
    <pv-datatable
        :value="filteredItems"
        selectionMode="single"
        v-model:selection="internalSelection"
        @row-select="handleRowSelect"
        paginator
        :rows="7"
        size="large"
        class="datatable"
        aria-labelledby="inventory-table"
    >
      <template #header>
        <div class="header-title">
        </div>
        <div class="subheader">
          <div class="left-group">
            <pv-inputtext
                v-model="searchQuery"
                :placeholder="`${$t('inventory.search')}...`"
                class="search-bar"
                aria-label="Search inventory"
            />
          </div>
          <div class="right-group">
            <pv-button
                :label="$t('inventory.add-item')"
                icon="pi pi-plus"
                class="add-btn"
                @click="$emit('add-request')"
                aria-label="Add new inventory item"
            />
          </div>
        </div>
      </template>

      <pv-column field="name" :header="$t('inventory.name')" sortable style="width:17%"
                 aria-header="Item Name"></pv-column>
      <pv-column field="description" :header="$t('inventory.description')" sortable style="width:50%"
                 aria-header="Description"></pv-column>
      <pv-column field="quantity" :header="$t('inventory.quantity')" sortable style="width:17%"
                 aria-header="Quantity"></pv-column>

      <pv-column header="Actions" style="width: 16%" aria-header="Actions">
        <template v-slot:body="{ data }">
          <div class="action-buttons">
            <img src="/assets/eye-svgrepo-com.svg" alt="View More" class="action-icon"
                 @click="() => showDetails(data)" aria-label="View more items of this type"/>
          </div>
        </template>
      </pv-column>

      <template #empty>{{ $t('inventory.not-found') }}.</template>
    </pv-datatable>
  </div>
</template>

<style scoped>
.table-container {
  width: 100%;
}

.datatable {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  border: 20px solid #fff;
  border-radius: 10px;
}

::v-deep(.p-datatable-header) {
  background-color: white;
  color: black;
  font-weight: bold;
  border-bottom: 1px solid #A7D1D2;
}

::v-deep(.p-datatable-thead > tr > th),
::v-deep(.p-datatable-tbody > tr > td) {
  background-color: white;
  color: black;
  border: 1px solid #A7D1D2 !important;
}

::v-deep(.p-datatable-tbody > tr:not(.p-highlight):hover > td) {
  background-color: #f1f1f1;
  cursor: pointer;
}

::v-deep(.p-datatable-tbody > tr.manual-highlight > td) {
  background-color: #A7D1D2 !important;
  color: black !important;
  font-weight: 600;
  border: 1px solid #A7D1D2;
}


::v-deep(.p-paginator) {
  background-color: white;
  color: black;
  border-top: 1px solid #A7D1D2;
}

::v-deep(.p-paginator .p-paginator-page),
::v-deep(.p-paginator .p-paginator-next),
::v-deep(.p-paginator .p-paginator-prev),
::v-deep(.p-paginator .p-paginator-first),
::v-deep(.p-paginator .p-paginator-last) {
  color: black;
  background-color: white;
  border: none;
}

::v-deep(.p-paginator .p-highlight) {
  background-color: #d0ebff;
  color: black;
}

.datatable ::v-deep(.p-datatable-tablewrapper) {
  min-height: 250px;
}

.header-title {
  margin-bottom: 0.5rem;
}

.subheader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
}

.left-group {
  display: flex;
  align-items: center;
  position: relative;
}

.search-bar ::v-deep(.p-inputtext),
.filter-panel input {
  background: white !important;
  border: 1px solid #A7D1D2 !important;
  color: black !important;
}

.search-bar .p-inputtext {
  background-color: white !important;
  border: 1px solid #A7D1D2 !important;
  color: black !important;
}

.search-bar {
  background-color: white !important;
  border-color: #A7D1D2 !important;
}

.search-bar:focus {
  border-color: #85a6a6 !important;
}


::v-deep(.filter-sbutton .p-highlight) {
  background-color: #A7D1D2 !important;
  color: white !important;
  font-weight: bold;
}

.filter-btn {
  background: white !important;
  border: 1px solid #A7D1D2 !important;
  color: black !important;
  margin-left: 0.5rem;
}

.filter-sbutton {
  background: white !important;
  border: 1px solid #A7D1D2 !important;
  color: black !important;
  width: 275px;
}

.filter-panel {
  position: absolute;
  top: 2.5rem;
  background: white;
  border: 1px solid #A7D1D2;
  padding: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: 360px !important;
  max-width: 90vw;
  right: 0;
  left: auto !important;
}

.filter-row {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.filter-row label {
  margin-right: 0.5rem;
}

.filter-row input {
  width: 60px;
  margin-right: 1rem;
  border: 1px solid #A7D1D2;
  padding: 0.25rem;
}


.right-group .add-btn {
  background-color: #A7D1D2 !important;
  color: white !important;
  border: none !important;
}

.right-group .add-btn:hover {
  background-color: #8FBFC0 !important;
}


.action-buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.action-icon {
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: opacity 0.3s;
  padding-left: 0.1rem;
  padding-right: 0.1rem;

}

.action-icon:hover {
  opacity: 0.2;
}
</style>