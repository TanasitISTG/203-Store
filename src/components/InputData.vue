<script setup>
import { defineProps, defineEmits, inject } from 'vue'

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    }
})
const emits = defineEmits(['update:modelValue'])


const add = () => {
    let num = Number(props.modelValue)
    if (isNaN(num)) return
    arr.value.push(num)
    emits('update:modelValue', '')
}

</script>

<template>
    <div class="w-10/12 mt-7 mx-auto">
        <div class="w-full flex space-x-4">
            <input type="text" placeholder="Enter value of item" class="input input-bordered w-11/12" :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)">
            <button class="btn btn-primary w-1/12" @click="add">Add</button>
        </div>
    </div>
</template>

<style scoped></style>
