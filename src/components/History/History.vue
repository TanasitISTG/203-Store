<script setup>
import { onMounted, ref, computed } from 'vue';

import BaseCard from '../Base/BaseCard.vue';
import EditIcon from '../Icons/EditIcon.vue';
import Row from './Row.vue';
import Header from '../Header.vue';

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
    <div class="w-full h-full flex flex-col items-center">
        <Header title="History" class="m-5" />
        <BaseCard width="w-3/5" height="h-2/3" backgroundColor="bg-[#F1F1F1]" class="scrollbar overflow-auto">
            <Row class="mt-5 mb-0">
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

            <hr class="m-4" />

            <div v-for="item in historyItems" :key="item.id">
                <Row>
                    <template #firstRow>
                        <EditIcon class="mr-2 my-auto" />
                        <p>{{ item.timestamp }}</p>
                    </template>
                    <template #secondRow>
                        <p>{{ item.customerType }}</p>
                    </template>
                    <template #thirdRow>
                        <p class="text-red-500">{{ item.discountPercentage }}%</p>
                    </template>
                    <template #fourthRow>
                        <p>{{ item.amount }} ฿</p>
                        <div v-if="item.isEdited" class="text-gray-500 ml-3">(edited)</div>
                    </template>
                </Row>
            </div>
        </BaseCard>

        <div class="w-3/5 flex justify-end mt-4">
            <p class="text-extrabold text-3xl font-poppins">Total {{ getTotalAmount }} ฿</p>
        </div>
    </div>
</template>

<style scoped>
hr {
    background-color: #000000;
    border: 0 none;
    height: 1px;
}
</style>