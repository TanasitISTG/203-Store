<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <h1 class="text-2xl font-semibold text-black">{{ title }}</h1>
</template>

<style scoped></style>