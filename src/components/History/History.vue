<script setup>
import { onMounted, ref } from 'vue';

import BaseCard from '../Base/BaseCard.vue';
import { getAllHistory, getHistoryById } from '../../composables/history';

let historyItems = ref([]);

const deleteHistory = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/history/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            historyItems.value = historyItems.value.filter((item) => { return item.id !== id });


        }
    } catch (error) {
        console.log(error);
    }
};

onMounted(async () => {
    historyItems.value = await getAllHistory();
    console.log(historyItems.value);
});
</script>

<template>
    <BaseCard width="w-3/5" height="h-2/3" backgroundColor="bg-[#F1F1F1]">
        <div class="flex flex-col mt-5">
            <div class="flex flex-row">
                <div>

                </div>
                <div class="w-1/6 flex justify-center">
                    <p class="text-bold text-2xl">Date</p>
                </div>
                <div class="w-1/6 flex justify-center">
                    <p class="text-bold text-2xl">Customer Type</p>
                </div>
                <div class="w-1/6 flex justify-center">
                    <p class="text-bold text-2xl">Discount</p>
                </div>
                <div class="w-1/6 flex justify-center">
                    <p class="text-bold text-2xl">Amount</p>
                </div>
            </div>
        </div>

        <!-- now loop all data from history -->
        <div v-for="item in historyItems" :key="item.id">
            <!-- <p>{{ item.id }} {{ item.amount }} {{ item.customerType }} {{ item.discount }}</p> -->
            <div class="flex flex-col mt-5">
                <div class="flex flex-row">
                    <div class="w-1/6 flex justify-center">
                        <p>{{ item.date }} - {{ item.time }}</p>
                    </div>
                    <div class="w-1/6 flex justify-center">
                        <p>{{ item.customerType }}</p>
                    </div>
                    <div class="w-1/6 flex justify-center">
                        <p>{{ item.discount }}</p>
                    </div>
                    <div class="w-1/6 flex justify-center">
                        <p>{{ item.amount }}</p>
                    </div>
                </div>
            </div>
        </div>
    </BaseCard>
</template>

<style scoped></style>