<script>/**
 * Member List Component
 *
 * This component displays a searchable and filterable table of members.
 * Users can search by name, filter by age range, membership status, or type,
 * and select a member row to trigger parent component interactions.
 * Also includes pagination and the ability to initiate adding a new member.
 *
 * Author: Cassius Martel
 */
import {Select as PvSelect} from "primevue";
import axios from "axios";
import { MemberApiService } from '../services/member-api.service.js';


const BASE_URL = import.meta.env.VITE_API_URL;


export default {
  name: "MemberList",
  components: {PvSelect},
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
      statusOptions: [
        { label: 'Active', value: 'active' },
        { label: 'Pending', value: 'pending' },
        { label: 'Inactive', value: 'inactive' }
      ],
      statusFilter: null,
      typeOptions: [],
      typeFilter: null,
      allMembers: []
    };
  },
  methods: {
    async fetchMembershipTypes() {
      try {
        const api = new MemberApiService();
        const types = await api.getMembershipTypes();
        this.typeOptions = types.map(type => ({
          label: type.name,
          value: type.name
        }));
      } catch (error) {
        console.error('❌ Error loading membership types:', error);
      }
    },
    handleRowSelect(event) {
      this.internalSelection = event.data;
      this.$emit('selected', event.data);
    },
    capitalize(text) {
      return text ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() : '';
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
      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase();
        list = list.filter(m => m.fullName.toLowerCase().includes(q));
      }
      if (this.ageRange.min != null) {
        list = list.filter(m => m.age >= this.ageRange.min);
      }
      if (this.ageRange.max != null) {
        list = list.filter(m => m.age <= this.ageRange.max);
      }
      if (this.statusFilter) {
        list = list.filter(m => m.membershipStatus === this.statusFilter);
      }
      if (this.typeFilter) {
        list = list.filter(m => m.membershipType === this.typeFilter);
      }
      return list;
    }
  },
  async mounted() {
    try {
      const service = new MemberApiService();

      const types = await service.getMembershipTypes();
      this.typeOptions = types.map(t => ({
        label: t.name,
        value: t.name
      }));

      this.allMembers = await service.getAllMembers();
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }
};
</script>

<template>
  <div class="table-container" role="region" aria-label="Member list">
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
        aria-label="Filtered members table"
    >
      <template #header>
        <div class="header-title"></div>
        <div class="subheader" role="search">
          <div class="left-group">
            <pv-inputtext
                v-model="searchQuery"
                :placeholder="`${$t('members.search')}...`"
                class="search-bar"
                aria-label="Search by member name"
            />
            <pv-button
                icon="pi pi-filter"
                class="filter-btn"
                @click="toggleFilters"
                aria-label="Toggle filters"
            />
            <div v-if="showFilters" class="filter-panel" role="region" aria-label="Filter panel">
              <div class="filter-row">
                <label>{{ $t("members.age") }} Min:</label>
                <input type="number" v-model.number="ageRange.min" min="0" aria-label="Minimum age filter" />
                <label>Max:</label>
                <input type="number" v-model.number="ageRange.max" min="0" aria-label="Maximum age filter" />
              </div>
              <div class="filter-row">
                <label>{{ $t("members.status") }}:</label>
                <pv-sbutton
                    v-model="statusFilter"
                    :options="statusOptions"
                    optionLabel="label"
                    optionValue="value"
                    class="filter-sbutton"
                    aria-label="Membership status filter"
                />
              </div>
              <div class="filter-row">
                <label>{{ $t("members.type") }}:</label>
                <pv-select
                    v-model="typeFilter"
                    :options="typeOptions"
                    optionLabel="label"
                    optionValue="value"
                    placeholder="Select Type"
                    class="filter-dropdown"
                    aria-label="Membership type filter"
                />
              </div>
              <div class="filter-row">
                <pv-button
                    :label="$t('clearfilters')"
                    icon="pi pi-times"
                    class="clear-filters-btn"
                    severity="secondary"
                    @click="clearFilters"
                    aria-label="Clear all filters"
                />
              </div>
            </div>
          </div>
          <div class="right-group">
            <pv-button
                :label="$t('members.add-member')"
                icon="pi pi-plus"
                class="add-btn"
                @click="$emit('add-request')"
                aria-label="Add new member"
            />
          </div>
        </div>
      </template>

      <pv-column field="fullName" :header="$t('members.name')" sortable style="width:25%"></pv-column>
      <pv-column field="age" :header="$t('members.age')" sortable style="width:15%"></pv-column>
      <pv-column field="membershipStatus" :header="$t('members.membership-status')" sortable style="width:25%">

        <template #body="{ data }">
          {{ capitalize(data.membershipStatus) }}
        </template>
      </pv-column>
      <pv-column field="membershipType" :header="$t('members.membership-type')" sortable style="width:20%"></pv-column>
      <pv-column field="expirationDate" :header="$t('members.expiration-date')" sortable style="width:25%"></pv-column>

      <template #empty>
        {{ $t('members.not-found') }}.
      </template>
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
  width: 350px !important;
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

.filter-dropdown {
  width: 100%;
  margin-top: 4px;
}


.right-group .add-btn {
  background-color: #A7D1D2 !important;
  color: white !important;
  border: none !important;
}

.right-group .add-btn:hover {
  background-color: #8FBFC0 !important;
}
.clear-filters-btn {
  width: 100%;
  margin-top: 0.5rem;
}

</style>


