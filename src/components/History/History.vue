<script setup>
import { onMounted, ref, computed } from 'vue';

import BaseCard from '../Base/BaseCard.vue';
import EditIcon from '../Icons/EditIcon.vue';
import Row from './Row.vue';
import { getAllHistory, getHistoryById } from '../../composables/getHistory';

let historyItems = ref([]);

const deleteHistory = async (id) => {
    try {
        const response = await fetch(`http://localhost:3001/history/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            historyItems.value = historyItems.value.filter((item) => { return item.id !== id });
        } else {
            throw new Error('Something went wrong');
        }
    } catch (error) {
        console.log(error);
    }
};

const getTotalAmount = computed(() => {
    return historyItems.value.reduce((total, item) => {
        return total + item.amount;
    }, 0);
});

onMounted(async () => {
    historyItems.value = await getAllHistory();
    console.log(historyItems.value);
});
</script>

<template>
    <div class="w-3/5 h-2/3">
        <BaseCard width="w-full" height="h-full" backgroundColor="bg-[#F1F1F1]" class="scrollbar overflow-auto">
            <Row>
                <template #firstRow>
                    <p class="text-bold text-2xl">Date</p>
                </template>
                <template #secondRow>
                    <p class="text-bold text-2xl">Customer Type</p>
                </template>
                <template #thirdRow>
                    <p class="text-bold text-2xl">Discount</p>
                </template>
                <template #fourthRow>
                    <p class="text-bold text-2xl">Amount</p>
                </template>
            </Row>


            <div v-for="item in historyItems" :key="item.id">
                <Row>
                    <template #firstRow>
                        <EditIcon class="mr-2 my-auto" />
                        <p>{{ item.date }} - {{ item.time }}</p>
                    </template>
                    <template #secondRow>
                        <p>{{ item.customerType }}</p>
                    </template>
                    <template #thirdRow>
                        <p class="text-red-500">{{ item.discount }}</p>
                    </template>
                    <template #fourthRow>
                        <p>{{ item.amount }} ฿</p>
                    </template>
                </Row>
            </div>
        </BaseCard>
        <div class="flex flex-row mt-5">
            <div class="w-1/4 flex justify-center"></div>
            <div class="w-1/4 flex justify-center"></div>
            <div class="w-1/4 flex justify-center"></div>
            <div class="w-1/4 flex justify-center">
                <p class="text-extrabold text-3xl">Total {{ getTotalAmount }} ฿</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>