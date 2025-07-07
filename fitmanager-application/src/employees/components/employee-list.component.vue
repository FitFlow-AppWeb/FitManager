<script>
/**
 * Employee List Component
 *
 * This component is designed to display a list of employees in a table format with filtering options. It allows
 * users to filter employees based on various criteria such as age, salary, hours per week, and role. The component
 * supports searching by employee name and dynamically applies filters to narrow down the results. It also supports
 * selecting a specific employee row and emitting an event when the row is selected.
 *
 * The component also includes a button to add a new employee, which triggers an event for the parent component.
 *
 * Author: Cassius Martel
 */

export default {
  name: "EmployeeList",
  props: {
    employees: {
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
      salaryRange: { min: null, max: null },
      hoursRange: { min: null, max: null },
      roleFilter: ""
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
    clearFilters() {
      this.ageRange = { min: null, max: null };
      this.salaryRange = { min: null, max: null };
      this.hoursRange = { min: null, max: null };
      this.roleFilter = "";
    }
  },
  computed: {
    filteredEmployees() {
      let result = this.employees.filter(emp =>
          emp.fullName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      if (this.ageRange.min !== null) result = result.filter(emp => emp.age >= this.ageRange.min);
      if (this.ageRange.max !== null) result = result.filter(emp => emp.age <= this.ageRange.max);

      if (this.salaryRange.min !== null) result = result.filter(emp => emp.wage >= this.salaryRange.min);
      if (this.salaryRange.max !== null) result = result.filter(emp => emp.wage <= this.salaryRange.max);

      if (this.hoursRange.min !== null) result = result.filter(emp => emp.workHours >= this.hoursRange.min);
      if (this.hoursRange.max !== null) result = result.filter(emp => emp.workHours <= this.hoursRange.max);

      if (this.roleFilter) {
        result = result.filter(emp => emp.role.toLowerCase().includes(this.roleFilter.toLowerCase()));
      }

      return result;
    }
  }
};

</script>

<template>
  <div class="table-container">
    <pv-datatable
        :value="filteredEmployees"
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
                :placeholder="`${$t('employees.search')}...`"
                class="search-bar"
                aria-label="Search employee"
            />
            <pv-button
                icon="pi pi-filter"
                class="filter-btn"
                @click="toggleFilters"
                aria-label="Toggle filters"
            />

            <div v-if="showFilters" class="filter-panel" aria-expanded="true">
              <!-- Edad -->
              <div class="filter-row">
                <label>{{ $t("employees.age") }} Min:</label>
                <input type="number" v-model.number="ageRange.min" min="0" aria-label="Minimum age" />
                <label>Max:</label>
                <input type="number" v-model.number="ageRange.max" min="0" aria-label="Maximum age" />
              </div>

              <!-- Sueldo por hora -->
              <div class="filter-row">
                <label>{{ $t("employees.wage") }} Min:</label>
                <input type="number" v-model.number="salaryRange.min" min="0" aria-label="Minimum wage" />
                <label>Max:</label>
                <input type="number" v-model.number="salaryRange.max" min="0" aria-label="Maximum wage" />
              </div>

              <!-- Horas por semana -->
              <div class="filter-row">
                <label>{{ $t("employees.hours") }} Min:</label>
                <input type="number" v-model.number="hoursRange.min" min="0" aria-label="Minimum hours" />
                <label>Max:</label>
                <input type="number" v-model.number="hoursRange.max" min="0" aria-label="Maximum hours" />
              </div>

              <!-- Rol como texto libre -->
              <div class="filter-row">
                <label>{{ $t("employees.role") }}:</label>
                <input
                    type="text"
                    v-model="roleFilter"
                    aria-label="Filter by role"
                    class="filter-text-role"
                />
              </div>

              <!-- Botón limpiar -->
              <div class="filter-row filter-row-full">
                <pv-button
                    icon="pi pi-times"
                    :label="$t('clearfilters')"
                    class="clear-filters-btn"
                    @click="clearFilters"
                    aria-label="Clear all filters"
                />
              </div>
            </div>

          </div>

          <div class="right-group">
            <pv-button
                :label="$t('employees.add-employee')"
                icon="pi pi-plus"
                class="add-btn"
                @click="$emit('add-request')"
                aria-label="Add new employee"
            />
          </div>
        </div>
      </template>

      <!-- Columnas -->
      <pv-column field="fullName" :header="$t('employees.name')" sortable style="width:25%"></pv-column>
      <pv-column field="age" :header="$t('employees.age')" sortable style="width:15%"></pv-column>
      <pv-column field="role" :header="$t('employees.role')" sortable style="width:25%"></pv-column>
      <pv-column field="wage" :header="$t('employees.wage')" sortable style="width:20%"></pv-column>
      <pv-column field="workHours" :header="$t('employees.hours')" sortable style="width:25%"></pv-column>

      <template #empty>{{ $t('employees.not-found') }}.</template>
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



.filter-panel {
  position: absolute;
  top: 2.5rem;
  background-color: white;
  border: 1px solid #A7D1D2;
  padding: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  width: 350px !important;
  max-width: 90vw;
  left: auto !important;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.filter-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.filter-row label {
  min-width: 50px;
  font-size: 0.9rem;
  color: #333;
}

.filter-row input {
  flex: 1;
  width: 100%;
  padding: 0.25rem 0.5rem;
  border: 1px solid #A7D1D2;
  border-radius: 4px;
  color: black;
  background-color: white;
  font-size: 0.9rem;
}

.filter-text-role {
  padding: 0.25rem 0.5rem;
  border: 1px solid #A7D1D2;
  border-radius: 4px;
  color: black;
  background-color: white;
}

.filter-row-full {
  justify-content: center;
}

.clear-filters-btn {
  background-color: #F1F5F9 !important;
  color: #333 !important;
  border: 0 !important;
  width: 100%;
  border-radius: 4px;
  font-weight: 500;
  padding: 0.5rem;
  font-size: 1rem;
}

.clear-filters-btn:hover {
  background-color: #dcdcdc !important;
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