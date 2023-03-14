<script setup>
// send value if input is guest or member to Discount.vue
import { ref, inject } from 'vue'

const customerType = inject('customerType')
</script>

<template>
    <div class="w-10/12 mx-auto mt-4">
        <div class="flex flex-row space-x-3">
            <p>Customer: </p>
            <div class="space-x-1">
                <input type="radio" name="radio-1" class="radio" v-model="customerType" value="Guest" checked />
                <span>Guest</span>
            </div>
            <div class="space-x-1">
                <input type="radio" name="radio-1" class="radio" v-model="customerType" value="Member" />
                <span>Member</span>
            </div>
        </div>
    </div>
</template>

<style scoped></style>