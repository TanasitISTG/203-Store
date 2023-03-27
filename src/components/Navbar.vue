<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="navbar bg-[#DFE6F9] p-0 h-16 min-h-0">
        <div class="w-1/12 h-full bg-[#304477] max-sm:w-3/12">
            <p class="text-3xl text-[#FFC635] font-bold mx-auto max-sm:text-lg">203 Store</p>
        </div>
        <div class="w-1/12 h-full max-sm:w-3/12">
            <RouterLink :to="{ name: 'Cashier' }" class="text-xl font-poppins mx-auto max-sm:text-lg" active-class="active">
                Cashier
            </RouterLink>
        </div>
        <div class="w-1/12 h-full max-sm:w-3/12">
            <RouterLink :to="{ name: 'History' }" class="text-xl font-poppins mx-auto max-sm:text-lg" active-class="active">
                History
            </RouterLink>
        </div>
    </div>
</template>

<style scoped></style>