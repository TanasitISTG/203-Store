<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    backgroundColor: {
        type: String,
        default: '#2e3849'
    },
    width: {
        type: String,
        default: 'w-3/5'
    },
    height: {
        type: String,
        default: 'h-4/5'
    },
    firstDiv: {
        type: Boolean,
        default: true
    }
})

const getBackgroundColor = () => {
    return `bg-[${props.backgroundColor}]`
}
</script>

<template>
    <div class="w-full h-full" :class="firstDiv ? 'flex justify-center items-center' : ''">
        <div class="" :class="width + ' ' + height + ' rounded-3xl' + ' ' + getBackgroundColor()">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped></style>
