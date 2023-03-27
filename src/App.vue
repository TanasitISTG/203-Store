<script setup>
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';

import { RouterView } from 'vue-router';
</script>

<template>
    <Navbar />
    <div class="w-full h-full flex justify-center">
        <RouterView />
    </div>
</template>

<style scoped></style>
