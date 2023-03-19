<script setup>
import NavBar from './components/NavBar.vue';
import Header from './components/Header.vue';
import Cashier from './components/Cashier/Cashier.vue';
</script>

<template>
    <NavBar />
    <Header title="Cashier" />
    <div class="w-full h-full flex justify-center">
        <Cashier />
    </div>
</template>

<style scoped></style>
