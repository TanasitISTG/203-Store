<script setup>
import InputData from './components/InputData.vue';
import VCard from './components/VCard.vue';
import ListPrice from './components/ListPrice.vue';
import { ref, provide } from 'vue';

let arr = ref([])
const modelValue = ref('');

provide('arr', arr)
</script>

<template>
  <div class="w-screen h-screen">
    <VCard>
      <InputData v-model="modelValue" />
      <ListPrice />
    </VCard>
  </div>
</template>

<style scoped></style>
