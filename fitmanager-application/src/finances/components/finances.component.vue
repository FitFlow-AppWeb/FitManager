<script setup>
import FinancesInfo from './finances-info.component.vue'
import TransactionList from './transaction-list.component.vue'
import GraphicList from './graphic.component.vue'
</script>

<template>
  <div class="finances-layout">
    <div class="layout-top">
      <GraphicList/>
      <FinancesInfo/>
    </div>
    <div class="layout-bottom">
      <TransactionList/>
    </div>
  </div>
</template>

<style scoped>

.finances-layout {
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
}

.layout-top {
  display:flex;
  justify-content: space-around;
}

.layout-bottom {
  display:flex;
  justify-content: space-around;
}

</style>