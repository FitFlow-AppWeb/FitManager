<!--
  This Vue.js component displays a paginated table of transactions using the 'pv-datatable' component from PrimeVue.
  The table allows filtering on various fields such as ID, date, recipient, payer, concept, amount, and currency.
  The component fetches transaction data asynchronously from a service and displays it, including formatted currency and date values.
  Filters are applied in real-time, with the ability to search across multiple columns.

  Author: Renzo Luque
-->

<script setup>
import { ref, onMounted } from 'vue';
// Ensure this path is correct for your project structure:
import { TransactionApiService } from '../services/transaction-api.service.js';

const transactions = ref([]);
const isLoading = ref(true);
const transactionService = new TransactionApiService();

// Filters for DataTable using string literals for match modes
const filters = ref({
  'global': { value: null, matchMode: 'contains' },
  'id': { operator: 'and', constraints: [{ value: null, matchMode: 'startsWith' }] },
  'recipient': { operator: 'and', constraints: [{ value: null, matchMode: 'startsWith' }] },
  'payer': { operator: 'and', constraints: [{ value:null, matchMode: 'startsWith' }] },
  'concept': { operator: 'and', constraints: [{ value: null, matchMode: 'startsWith' }] },
  'date': { operator: 'and', constraints: [{ value: null, matchMode: 'dateIs' }] },
  'currency': { operator: 'and', constraints: [{ value: null, matchMode: 'equals' }] }
});

onMounted(() => {
  isLoading.value = true;
  transactionService.getTransactions()
      .then(data => {
        transactions.value = data;
        isLoading.value = false;
      })
      .catch(error => {
        console.error("Failed to load transactions in component:", error);
        transactions.value = [];
        isLoading.value = false;
      });
});

const formatCurrency = (value, currencyCode) => {
  if (typeof value !== 'number') {
    return value;
  }
  const displayCurrency = currencyCode || 'PEN';
  try {
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: displayCurrency
    }).format(value);
  } catch (e) {
    console.warn(`Could not format currency for code: ${currencyCode}. Displaying as number.`);
    return new Intl.NumberFormat('es-PE').format(value) + (currencyCode ? ` ${currencyCode}` : '');
  }
};

const formatDate = (value) => {
  if (!value) return '';
  const date = new Date(value);
  return date.toLocaleDateString('en-CA');
};
</script>

<template>
  <div class="card">
    <pv-datatable :value="transactions" :paginator="true" :rows="5"
                  paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                  :rowsPerPageOptions="[10,20,50]" responsiveLayout="scroll"
                  currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                  :loading="isLoading"
                  v-model:filters="filters" filterDisplay="menu" :globalFilterFields="['id', 'recipient', 'payer', 'concept', 'date']"
                  aria-live="polite" aria-busy="isLoading" aria-labelledby="transactions-table">

      <template #header>
        <div class="flex justify-content-between align-items-center">
          <h5 id="transactions-table" class="m-0">{{ $t('finances.transactions') }}</h5>
          <span class="p-input-icon-left">
            <pv-inputtext v-model="filters['global'].value" :placeholder="$t('finances.search')" aria-label="Search transactions" />
          </span>
        </div>
      </template>

      <template #empty>
        {{ $t('finances.transactions-not-found') }}
      </template>
      <template #loading>
        Loading transaction data. Please wait.
      </template>

      <pv-column field="id" header="ID" :sortable="true" style="min-width: 8rem" aria-sort="none">
        <template #body="{data}">
          {{data.id}}
        </template>
        <template #filter="{filterModel,filterCallback}">
          <pv-inputtext type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by ID" aria-label="Filter by ID"/>
        </template>
      </pv-column>

      <pv-column field="date" :header="$t('finances.date')" :sortable="true" style="min-width: 10rem" aria-sort="none">
        <template #body="{data}">
          {{formatDate(data.date)}}
        </template>
        <template #filter="{filterModel,filterCallback}">
          <pv-calendar v-model="filterModel.value" dateFormat="yy-mm-dd" placeholder="yyyy-mm-dd" @date-select="filterCallback()" aria-label="Filter by date"/>
        </template>
      </pv-column>

      <pv-column field="recipient" :header="$t('finances.recipient')" :sortable="true" style="min-width: 12rem" aria-sort="none">
        <template #body="{data}">
          {{data.recipient}}
        </template>
        <template #filter="{filterModel,filterCallback}">
          <pv-inputtext type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by recipient" aria-label="Filter by recipient"/>
        </template>
      </pv-column>

      <pv-column field="payer" :header="$t('finances.payer')" :sortable="true" style="min-width: 12rem" aria-sort="none">
        <template #body="{data}">
          {{data.payer}}
        </template>
        <template #filter="{filterModel,filterCallback}">
          <pv-inputtext type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by payer" aria-label="Filter by payer"/>
        </template>
      </pv-column>

      <pv-column field="concept" :header="$t('finances.concept')"  :sortable="true" style="min-width: 14rem" aria-sort="none">
        <template #body="{data}">
          {{data.concept}}
        </template>
        <template #filter="{filterModel,filterCallback}">
          <pv-inputtext type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by concept" aria-label="Filter by concept"/>
        </template>
      </pv-column>

      <pv-column field="amount" :header="$t('finances.amount')"  :sortable="true" style="min-width: 10rem" aria-sort="none">
        <template #body="{data}">
          {{formatCurrency(data.amount, data.currency)}}
        </template>
      </pv-column>

      <pv-column field="currency" :header="$t('finances.currency')"  :sortable="true" style="min-width: 8rem" aria-sort="none">
        <template #body="{data}">
          {{data.currency}}
        </template>
        <template #filter="{filterModel,filterCallback}">
          <pv-inputtext type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by currency" aria-label="Filter by currency"/>
        </template>
      </pv-column>

    </pv-datatable>
  </div>
</template>




<style scoped>
.card {
  background: #ffffff;
  padding: 5px;
  border-radius: 10px;
  font-size: 0.8rem;
  width: 85%;
  height: auto;
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
}

h5{
  font-size: 0.9rem;
  color: #595959;
}

.p-datatable {
  width: 100%;
}

.p-inputtext {
  width: 250px;
  height: 20px;
  font-size: 12px;
}

:deep(.p-datatable-header) {
  padding: 5px;
}

:deep(.p-paginator) {
  padding: 0;
}

:deep(.p-datatable-header-cell) {
  padding: 0px 15px;
}

:deep(.p-datatable-thead) {
  padding: 0;
}

:deep(.p-column-filter) {
  width: 100%;
}
</style>
