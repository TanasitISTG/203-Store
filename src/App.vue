<script setup>
import InputData from './components/InputData.vue';
import VCard from './components/VCard.vue';
import ListPrice from './components/ListPrice.vue';
import CustomerType from './components/CustomerType.vue';
import Discount from './components/Discount.vue';
import { ref, provide } from 'vue';

let arr = ref([])
let customerType = ref('Guest')
const modelValue = ref('');

provide('arr', arr)
provide('customerType', customerType)
</script>

<template>
  <div class="w-screen h-screen">
    <VCard>
      <InputData v-model="modelValue" />
      <ListPrice />
      <CustomerType />
      <Discount />
    </VCard>
  </div>
</template>

<style scoped></style>
