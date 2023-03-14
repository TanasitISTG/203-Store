<script setup>
import VCard from './VCard.vue';
import { inject } from 'vue';

const customerType = inject('customerType');
</script>

<template>
    <div class="w-10/12 h-1/5 mx-auto">
        <p>Discount ({{ customerType }}):</p>
        <div class="w-full h-full flex flex-row space-x-4">
            <div class="bg-white rounded-xl w-1/12 h-1/3">
                <p>0%</p>
            </div>
            <div class="bg-white rounded-xl w-1/12 h-1/3">
                <p>5%</p>
            </div>
            <div class="bg-white rounded-xl w-1/12 h-1/3">
                <p>10%</p>
            </div>
            <div class="bg-white rounded-xl w-1/12 h-1/3">
                <p>20%</p>
            </div>

        </div>
    </div>
</template>

<style scoped></style>
