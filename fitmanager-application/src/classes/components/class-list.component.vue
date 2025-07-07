<!--
// Description: This code defines a `class-list.component` which is a Vue.js component for displaying a list of gym classes in a table format.
// It allows users to view, edit, or delete classes, and includes functionality for searching and filtering by class name, status, and type.
// The component also includes buttons for adding a new class and toggling filters.
// - The `filteredClasses` computed property filters the class list based on search query, status filter, and type filter.
// - The `handleRowSelect` method handles selection of a class row, emitting the selected class data to the parent component.
// - The `toggleFilters`, `applyFilters`, `viewClass`, `editClass`, and `deleteClass` methods handle user interactions with filters and class actions.
// Author: Cassius Martel
-->

<template>
  <div class="table-container">
    <pv-datatable
        :value="filteredClasses"
        selectionMode="single"
        v-model:selection="internalSelection"
        @row-select="handleRowSelect"
        paginator
        :rows="8"
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
                :placeholder="`${$t('classes.search')}...`"
                class="search-bar"
                aria-label="Search for a class"
            />
            <div class="filter-button-container">
              <pv-button
                  icon="pi pi-filter"
                  class="filter-btn"
                  @click="toggleFilters"
                  aria-label="Toggle filters"
              />
              <div v-if="showFilters" class="filter-panel">
                <div class="filter-row">
                  <label>{{ $t('classes.status') }}:</label>
                  <pv-sbutton
                      v-model="statusFilter"
                      :options="statusOptions"
                      class="filter-sbutton"
                      aria-label="Filter by status"
                  />
                </div>
                <div class="filter-row">
                  <label>{{ $t('classes.type') }}:</label>
                  <pv-sbutton
                      v-model="typeFilter"
                      :options="typeOptions"
                      class="filter-sbutton"
                      aria-label="Filter by type"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="right-group">
            <pv-button
                :label="$t('classes.add-class')"
                icon="pi pi-plus"
                class="add-btn"
                @click="$emit('add-request')"
                aria-label="Add a new class"
            />
          </div>
        </div>
      </template>

      <pv-column field="name" :header="$t('classes.name')" sortable style="width:25%"></pv-column>
      <pv-column field="type" :header="$t('classes.type')" sortable style="width:15%"></pv-column>
      <pv-column field="trainerName" :header="$t('classes.trainer')" sortable style="width:15%"/>
      <pv-column field="date" :header="$t('classes.date')" sortable style="width:25%"></pv-column>
      <pv-column field="time" :header="$t('classes.time')" sortable style="width:20%"></pv-column>
      <pv-column field="duration" :header="$t('classes.duration')" sortable style="width:25%"></pv-column>
      <pv-column field="status" :header="$t('classes.status')" sortable style="width:25%"></pv-column>
      <pv-column header="Actions" style="width: 15%">
        <template v-slot:body="{ data }">
          <div class="action-buttons">
            <img src="/assets/eye-svgrepo-com.svg" alt="View" class="action-icon" @click="() => viewClass(data)" aria-label="View class" />
            <img src="/assets/pencil-svgrepo-com.svg" alt="Edit" class="action-icon" @click="() => editClass(data)" aria-label="Edit class" />
            <img src="/assets/close-svgrepo-com.svg" alt="Delete" class="action-icon" @click="() => deleteClass(data)" aria-label="Delete class" />
          </div>
        </template>
      </pv-column>

      <template #empty>{{ $t('classes.not-found') }}.</template>
    </pv-datatable>
  </div>
</template>


<style scoped>
.table-container {
  width: 100%;
}

.datatable {
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
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
  min-height: 250px; /* ajusta a la altura deseada */
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
  width: 360px !important;
  max-width: 90vw;
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