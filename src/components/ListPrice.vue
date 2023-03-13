<script setup>
import VCard from './VCard.vue';
import { inject } from 'vue';

const arr = inject('arr');
</script>

<template>
    <div class="w-10/12 h-2/5 mx-auto">
        <VCard backgroundColor="#243c5a" :firstDiv="false" width="w-full" height="h-full" class="mt-7">
            <div class="pl-4 pt-4">
                <p>No.</p>
                <p v-for="(element, index) in arr" :key="index">{{ index + 1 }}.) {{ element }}฿</p>
            </div>
        </VCard>
    </div>
</template>

<style scoped></style>
