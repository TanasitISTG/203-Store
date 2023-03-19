<script setup>
import BaseCard from '../Base/BaseCard.vue';
</script>

<template>
    <BaseCard width="w-3/5" height="h-2/3" backgroundColor="bg-[#F1F1F1]">
        <div class="flex flex-col mt-5">
            <div class="flex flex-row">
                <div class="w-1/4 flex justify-center">
                    <p class="text-bold text-2xl">Date</p>
                </div>
                <div class="w-1/4 flex justify-center">
                    <p class="text-bold text-2xl">Customer Type</p>
                </div>
                <div class="w-1/4 flex justify-center">
                    <p class="text-bold text-2xl">Discount</p>
                </div>
                <div class="w-1/4 flex justify-center">
                    <p class="text-bold text-2xl">Amount</p>
                </div>
            </div>
        </div>
    </BaseCard>
</template>

<style scoped></style>