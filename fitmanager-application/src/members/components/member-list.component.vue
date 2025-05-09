<script>
export default {
  name: "MemberList",
  props: {
    members: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      internalSelection: null,
      searchQuery: "",
      showFilters: false,
      ageRange: { min: null, max: null },
      statusOptions: ['active', 'pending', 'inactive'],
      statusFilter: null,
      typeOptions: ['annual', 'quarterly', 'monthly'],
      typeFilter: null
    };
  },
  methods: {
    handleRowSelect(event) {
      this.internalSelection = event.data;
      this.$emit('selected', event.data);
    },
    getRowClass(data) {
      return this.internalSelection && this.internalSelection.id === data.id
          ? 'manual-highlight'
          : '';
    },
    toggleFilters() {
      this.showFilters = !this.showFilters;
    },
    applyFilters() {
      this.showFilters = false;
    },
    clearFilters() {
      this.ageRange = { min: null, max: null };
      this.statusFilter = null;
      this.typeFilter = null;
    }
  },
  computed: {
    filteredMembers() {
      let list = [...this.members];
      // Búsqueda en tiempo real
      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase();
        list = list.filter(m => m.fullName.toLowerCase().includes(q));
      }
      // Rango de edad
      if (this.ageRange.min != null) {
        list = list.filter(m => m.age >= this.ageRange.min);
      }
      if (this.ageRange.max != null) {
        list = list.filter(m => m.age <= this.ageRange.max);
      }
      // Estado
      if (this.statusFilter) {
        list = list.filter(m => m.membershipStatus === this.statusFilter);
      }
      // Tipo
      if (this.typeFilter) {
        list = list.filter(m => m.membershipType === this.typeFilter);
      }
      return list;
    }
  }
};
</script>



<template>
  <div class="table-container">
    <pv-datatable
        :value="filteredMembers"
        selectionMode="single"
        v-model:selection="internalSelection"
        @rowSelect="handleRowSelect"
        paginator
        :rows="9"
        :rowClass="getRowClass"
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
            <pv-button
                icon="pi pi-filter"
                class="filter-btn"
                @click="toggleFilters"
            />
            <div v-if="showFilters" class="filter-panel">
              <div class="filter-row">
                <label>Age Min:</label>
                <input type="number" v-model.number="ageRange.min" min="0" />
                <label>Max:</label>
                <input type="number" v-model.number="ageRange.max" min="0" />
              </div>
              <div class="filter-row">
                <label>Status:</label>
                <pv-sbutton
                    v-model="statusFilter"
                    :options="statusOptions"
                    class="filter-sbutton"
                />
              </div>
              <div class="filter-row">
                <label>Type:</label>
                <pv-sbutton
                    v-model="typeFilter"
                    :options="typeOptions"
                    class="filter-sbutton"
                />
              </div>

            </div>
          </div>
          <div class="right-group">
            <pv-button
                label="Add Member"
                icon="pi pi-plus"
                class="add-btn"
                @click="$emit('add-request')"
            />
          </div>
        </div>
      </template>

      <!-- Columnas -->
      <pv-column field="fullName" header="Name" sortable style="width:25%"></pv-column>
      <pv-column field="age" header="Age" sortable style="width:15%"></pv-column>
      <pv-column field="membershipStatus" header="Membership Status" sortable style="width:25%"></pv-column>
      <pv-column field="membershipType" header="Membership Type" sortable style="width:20%"></pv-column>
      <pv-column field="expirationDate" header="Expiration Date" sortable style="width:25%"></pv-column>

      <template #empty>No members found.</template>
    </pv-datatable>
  </div>
</template>



<style scoped>
.table-container {
  width: 100%;
  max-width: 800px;
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
}

.filter-panel {
  position: absolute;
  top: 2.5rem;
  background: white;
  border: 1px solid #A7D1D2;
  padding: 0.75rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 10;
  width: 350px !important;   /* más ancho */
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


</style>


