<script setup>
import NavBar from './components/NavBar.vue';
import Header from './components/Header.vue';
import Cashier from './components/Cashier/Cashier.vue';
</script>

<template>
    <NavBar />
    <div class="w-1/2 flex justify-center -ml-14 mt-12">
        <Header title="Cashier" style="color: teal" />
    </div>
    <div class="w-full h-full flex justify-center">
        <Cashier />
    </div>
</template>

<style scoped></style>
