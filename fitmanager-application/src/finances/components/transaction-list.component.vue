<script setup>
import { ref, onMounted } from 'vue';
import { SalaryPaymentApiService } from '../services/salary-payment-api.service.js';
import { EmployeeApiService } from '../../employees/services/employee-api.service.js';
import { MembershipPaymentApiService } from '../services/membership-payment-api.service.js';
import { MemberApiService } from '../../members/services/member-api.service.js';
import { SupplyPurchaseApiService } from '../services/supply-purchase-api.service.js';


const transactions = ref([]);
const isLoading = ref(true);

const salaryPaymentService = new SalaryPaymentApiService();
const employeeApiService = new EmployeeApiService();
const membershipPaymentService = new MembershipPaymentApiService();
const memberApiService = new MemberApiService();
const supplyPurchaseService = new SupplyPurchaseApiService();


const filters = ref({
  'global': {value: null, matchMode: 'contains'},
  'id': {operator: 'and', constraints: [{value: null, matchMode: 'startsWith'}]},
  'recipient': {operator: 'and', constraints: [{value: null, matchMode: 'startsWith'}]},
  'payer': {operator: 'and', constraints: [{value: null, matchMode: 'startsWith'}]},
  'concept': {operator: 'and', constraints: [{value: null, matchMode: 'startsWith'}]},
  'date': {operator: 'and', constraints: [{value: null, matchMode: 'dateIs'}]},
  'currency': {operator: 'and', constraints: [{value: null, matchMode: 'equals'}]}
});

onMounted(async () => {
  isLoading.value = true;
  let allCombinedTransactions = [];
  let employeeMap = new Map();
  let memberMap = new Map();

  try {
    const employees = await employeeApiService.getAllEmployees();
    employees.forEach(emp => {
      employeeMap.set(emp.id, emp.fullName);
    });

    const members = await memberApiService.getAllMembers();
    members.forEach(mem => {
      memberMap.set(mem.id, mem);
    });


    const fetchedSalaryPayments = await salaryPaymentService.getAllSalaryPayments();
    const salaryPaymentTransactions = fetchedSalaryPayments.map(sp => {
      return {
        id: `SP0${sp.id}`,
        date: sp.date,
        recipient: employeeMap.get(sp.employeeId) || 'Empleado Desconocido',
        payer: 'Gimnasio',
        concept: `Salary payment for ${employeeMap.get(sp.employeeId) || 'Empleado Desconocido'}`,
        amount: sp.amount,
        currency: sp.currency
      };
    });
    allCombinedTransactions.push(...salaryPaymentTransactions);

    const fetchedMembershipPayments = await membershipPaymentService.getAllMembershipPayments();
    const membershipPaymentTransactions = fetchedMembershipPayments.map(mp => {
      const member = memberMap.get(mp.memberId);
      const memberName = member ? member.fullName : 'Miembro Desconocido';
      const membershipType = member ? member.membershipType : 'Membresía Desconocida';

      return {
        id: `MP0${mp.id}`,
        date: mp.date,
        recipient: 'Gimnasio',
        payer: memberName,
        concept: `Pago por membresía: ${membershipType}`,
        amount: mp.amount,
        currency: mp.currency
      };
    });
    allCombinedTransactions.push(...membershipPaymentTransactions);

    const fetchedSupplyPurchases = await supplyPurchaseService.getAllSupplyPurchases();
    const supplyPurchaseTransactions = fetchedSupplyPurchases.map(sp => {
      return {
        id: `IP0${sp.id}`,
        date: sp.date,
        recipient: sp.vendorName || 'Proveedor Desconocido',
        payer: 'Gimnasio',
        concept: 'Compra de insumos',
        amount: sp.amount,
        currency: sp.currency
      };
    });
    allCombinedTransactions.push(...supplyPurchaseTransactions);


    transactions.value = allCombinedTransactions;

  } catch (error) {
    console.error("Error al cargar datos en el componente TransactionList:", error);
    transactions.value = [];
  } finally {
    isLoading.value = false;
  }
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
    console.warn(`No se pudo formatear la moneda para el código: ${currencyCode}. Mostrando como número.`);
    return new Intl.NumberFormat('es-PE').format(value) + (currencyCode ? ` ${currencyCode}` : '');
  }
};

const formatDate = (value) => {
  if (!value) return '';
  const date = (value instanceof Date) ? value : new Date(value);
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
                  v-model:filters="filters" filterDisplay="menu"
                  :globalFilterFields="['id', 'recipient', 'payer', 'concept', 'date', 'amount', 'currency']"
                  aria-live="polite" aria-busy="isLoading" aria-labelledby="transactions-table">

      <template #header>
        <div class="flex justify-content-between align-items-center">
          <h5 id="transactions-table" class="m-0">{{ $t('finances.transactions') }}</h5>
          <span class="p-input-icon-left">
            <pv-inputtext v-model="filters['global'].value" :placeholder="$t('finances.search')"
                          aria-label="Search transactions"/>
          </span>
        </div>
      </template>

      <template #empty>
        {{ $t('finances.transactions-not-found') }}
      </template>
      <template #loading>
        {{ $t('finances.transactions-loading') }}
      </template>

      <pv-column field="id" header="ID" :sortable="true" style="min-width: 8rem" aria-sort="none">
        <template #body="{data}">
          {{ data.id }}
        </template>
        <template #filter="{filterModel,filterCallback}">
          <pv-inputtext type="text" v-model="filterModel.value" @keydown.enter="filterCallback()"
                        class="p-column-filter" placeholder="Search by ID" aria-label="Filter by ID"/>
        </template>
      </pv-column>

      <pv-column field="date" :header="$t('finances.date')" :sortable="true" style="min-width: 10rem" aria-sort="none">
        <template #body="{data}">
          {{ formatDate(data.date) }}
        </template>
        <template #filter="{filterModel,filterCallback}">
          <pv-calendar v-model="filterModel.value" dateFormat="yy-mm-dd" placeholder="yyyy-mm-dd"
                       @date-select="filterCallback()" aria-label="Filter by date"/>
        </template>
      </pv-column>

      <pv-column field="recipient" :header="$t('finances.recipient')" :sortable="true" style="min-width: 12rem"
                 aria-sort="none">
        <template #body="{data}">
          {{ data.recipient }}
        </template>
        <template #filter="{filterModel,filterCallback}">
          <pv-inputtext type="text" v-model="filterModel.value" @keydown.enter="filterCallback()"
                        class="p-column-filter" placeholder="Search by recipient" aria-label="Filter by recipient"/>
        </template>
      </pv-column>

      <pv-column field="payer" :header="$t('finances.payer')" :sortable="true" style="min-width: 12rem"
                 aria-sort="none">
        <template #body="{data}">
          {{ data.payer }}
        </template>
        <template #filter="{filterModel,filterCallback}">
          <pv-inputtext type="text" v-model="filterModel.value" @keydown.enter="filterCallback()"
                        class="p-column-filter" placeholder="Search by payer" aria-label="Filter by payer"/>
        </template>
      </pv-column>

      <pv-column field="concept" :header="$t('finances.concept')" :sortable="true" style="min-width: 14rem"
                 aria-sort="none">
        <template #body="{data}">
          {{ data.concept }}
        </template>
        <template #filter="{filterModel,filterCallback}">
          <pv-inputtext type="text" v-model="filterModel.value" @keydown.enter="filterCallback()"
                        class="p-column-filter" placeholder="Search by concept" aria-label="Filter by concept"/>
        </template>
      </pv-column>

      <pv-column field="amount" :header="$t('finances.amount')" :sortable="true" style="min-width: 10rem"
                 aria-sort="none">
        <template #body="{data}">
          {{ formatCurrency(data.amount, data.currency) }}
        </template>
      </pv-column>

      <pv-column field="currency" :header="$t('finances.currency')" :sortable="true" style="min-width: 8rem"
                 aria-sort="none">
        <template #body="{data}">
          {{ data.currency }}
        </template>
        <template #filter="{filterModel,filterCallback}">
          <pv-inputtext type="text" v-model="filterModel.value" @keydown.enter="filterCallback()"
                        class="p-column-filter" placeholder="Search by currency" aria-label="Filter by currency"/>
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
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12);
}

h5 {
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