<script setup>
const props = defineProps({
    width: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    backgroundColor: {
        type: String,
        required: true
    },
})
</script>

<template>
    <div class="rounded-2xl" :class="`${width} ${height} ${backgroundColor}`">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped></style>