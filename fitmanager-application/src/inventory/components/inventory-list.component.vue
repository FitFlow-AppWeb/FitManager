<script>
export default {
name: "inventory-list.component",
  props: {
    inventory: {
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
    editInventory(inventory) {
      this.$emit('edit-request', inventory);
    },
    deleteInventory(inventory) {
      this.$emit('delete-request', inventory);
    }
  },
  computed: {
    filteredInventory() {
      let list = [...this.inventory];
      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase();
        list = list.filter(m => m.name.toLowerCase().includes(q));
      }

      return list;
    }
  }
}

</script>

<template>
  <div class="table-container">
    <pv-datatable
        :value="filteredInventory"
        selectionMode="single"
        v-model:selection="internalSelection"
        @row-select="handleRowSelect"
        paginator
        :rows="7"
        size="large"
        class="datatable"
    >
      <template #header>
        <div class="header-title">
        </div>
        <div class="subheader">
          <div class="left-group">
            <pv-inputtext
                v-model="searchQuery"
                placeholder="Search by name..."
                class="search-bar"
            />
          </div>
          <div class="right-group">
            <pv-button
                label="Add item"
                icon="pi pi-plus"
                class="add-btn"
                @click="$emit('add-request')"
            />
          </div>
        </div>
      </template>

      <pv-column field="name" header="Name" sortable style="width:25%"></pv-column>
      <pv-column field="description" header="Description" sortable style="width:15%"></pv-column>
      <pv-column field="quantity" header="Quantity" sortable style="width:25%"></pv-column>
      <pv-column field="last_maintenance" header="Last Maintenance" sortable style="width:20%"></pv-column>
      <pv-column field="next_maintenance" header="Next Maintenance" sortable style="width:25%"></pv-column>
      <pv-column field="trainerName" header="Trainer" sortable style="width:15%"/>
      <pv-column header="Actions" style="width: 15%">
        <template v-slot:body="{ data }">
          <div class="action-buttons">
            <img src="/assets/pencil-svgrepo-com.svg" alt="Edit" class="action-icon" @click="() => editInventory(data) "/>
            <img src="/assets/close-svgrepo-com.svg" alt="Delete" class="action-icon" @click="() => deleteInventory(data)" />
          </div>
        </template>
      </pv-column>

      <template #empty>No items found.</template>
    </pv-datatable>
  </div>
</template>

<style scoped>
.table-container {
  width: 100%;
}

/* Estilo general */
.datatable {
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  background-color: white;
  border: 20px solid #fff;
  border-radius: 10px;
}

/* Header de la tabla */
::v-deep(.p-datatable-header) {
  background-color: white;
  color: black;
  font-weight: bold;
  border-bottom: 1px solid #A7D1D2;
}

/* Columnas (encabezados y celdas) */
::v-deep(.p-datatable-thead > tr > th),
::v-deep(.p-datatable-tbody > tr > td) {
  background-color: white;
  color: black;
  border: 1px solid #A7D1D2 !important;
}

/* Hover */
::v-deep(.p-datatable-tbody > tr:not(.p-highlight):hover > td) {
  background-color: #f1f1f1;
  cursor: pointer;
}

/* Fila seleccionada */
::v-deep(.p-datatable-tbody > tr.manual-highlight > td) {
  background-color: #A7D1D2 !important;
  color: black !important;
  font-weight: 600;
  border: 1px solid #A7D1D2;
}


/* Paginador */
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

/* Garantiza altura mínima para no achicar tabla */
.datatable ::v-deep(.p-datatable-tablewrapper) {
  min-height: 250px; /* ajusta a la altura deseada */
}

/* Estilos de subheader */
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




/* Botón seleccionado */
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

.filter-sbutton{
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
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 10;
  width: 360px !important;   /* más ancho */
  max-width: 90vw;           /* nunca mayor al 90% de la ventana */
  right: 0;                  /* alinéalo a la derecha */
  left: auto !important;     /* desactiva el left fijo */
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