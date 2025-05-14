<script setup>
/**
 * Finance Layout Component
 *
 * This component is responsible for displaying the finance layout in the application, divided into two sections:
 * - The top section, which includes a graphic and financial information.
 * - The bottom section, which shows a list of transactions.
 * The components used are:
 * - `GraphicList`: Displays a graphic related to finance.
 * - `FinancesInfo`: Displays a summary or details of the finances.
 * - `TransactionList`: Displays a list of transactions.
 *
 * Author: Renzo Luque
 */
import FinancesInfo from './finances-info.component.vue'
import TransactionList from './transaction-list.component.vue'
import GraphicList from './graphic.component.vue'
</script>

<template>
  <div class="finances-layout">
    <div class="layout-top">
      <GraphicList aria-label="Financial graphic" />
      <FinancesInfo aria-label="Financial information" />
    </div>
    <div class="layout-bottom">
      <TransactionList aria-label="Transaction list" />
    </div>
  </div>
</template>


<style scoped>

.finances-layout {
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
}

.layout-top {
  display:flex;
  justify-content: space-evenly;
}

.layout-bottom {
  display:flex;
  justify-content: space-around;
}

</style>