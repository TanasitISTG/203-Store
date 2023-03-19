<script setup>
import { onMounted, ref, computed } from 'vue';

import BaseCard from '../Base/BaseCard.vue';
import EditIcon from '../Icons/EditIcon.vue';
import { getAllHistory, getHistoryById } from '../../composables/getHistory';

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

const getTotalAmount = computed(() => {
    let total = 0
    historyItems.value.forEach((item) => {
        total += parseInt(item.amount);
    });

    return total;
});

onMounted(async () => {
    historyItems.value = await getAllHistory();
    console.log(historyItems.value);
});
</script>

<!-- could've improve with slot, will do it later. -->
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


        <div v-for="item in historyItems" :key="item.id">
            <div class="flex flex-col mt-5">
                <div class="flex flex-row">
                    <div class="w-1/4 flex justify-center items-center">
                        <EditIcon class="mr-2" />
                        <p>{{ item.date }} - {{ item.time }}</p>
                    </div>
                    <div class="w-1/4 flex justify-center">
                        <p>{{ item.customerType }}</p>
                    </div>
                    <div class="w-1/4 flex justify-center">
                        <p class="text-red-500">{{ item.discount }}</p>
                    </div>
                    <div class="w-1/4 flex justify-center">
                        <p>{{ item.amount }} ฿</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-row mt-5">
            <div class="w-1/4 flex justify-center"></div>
            <div class="w-1/4 flex justify-center"></div>
            <div class="w-1/4 flex justify-center"></div>
            <div class="w-1/4 flex justify-center">
                <p class="text-bold text-2xl">Total {{ getTotalAmount }} ฿</p>
            </div>
        </div>
    </BaseCard>
</template>

<style scoped></style>