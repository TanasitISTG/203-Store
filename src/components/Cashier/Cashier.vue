<script setup>
import { onMounted, ref, watch } from 'vue';
import BaseCard from '../Base/BaseCard.vue';
import DeleteIcon from '../Icons/DeleteIcon.vue';
import Header from '../Header.vue';

import { getTotal, getDiscount, getTotalWithDiscount } from '../../composables/calculation';
import { numberFormat } from '../../composables/numberFormat';

const emits = defineEmits(['edit', 'cancel'])
const props = defineProps({
    history: {
        type: Object,
    }
});

let amount = ref('');
let amountArray = ref([]);
let discount = ref(0);
let customerType = ref('Guest')
let updatedHistory = ref({});

const addAmount = () => {
    if (amount.value === '' || parseInt(amount.value) === 0 || amount.value.length === 0 || isNaN(amount.value) || amount.value === null || amount.value === undefined) {
        amount.value = '';
        return;
    }

    amountArray.value.push(parseInt(amount.value));
    amount.value = '';
}

const removeAmount = (index) => {
    amountArray.value.splice(index, 1);
}

const addToHistory = async () => {
    if (amountArray.value.length === 0) {
        return;
    }

    try {
        const response = await fetch('http://localhost:3001/history', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                total: getTotalWithDiscount(discount.value, amountArray.value),
                customerType: customerType.value,
                discountPercentage: discount.value,
                datetime: new Date().toLocaleString('th-TH', { hour12: false }),
                amounts: amountArray.value,
                isEdited: false,
                // oldData: null,
            })
        });

        if (response.ok) {
            amountArray.value = [];
            discount.value = 0;
            customerType.value = 'Guest';
        } else {
            throw new Error('Something went wrong');
        }
    } catch (error) {
        console.error(error);
    }
}

const confirmButtonHandler = () => {
    if (props.history === undefined) {
        addToHistory();
    } else {
        console.log('emitting edit');
        console.log(props.history);
        updatedHistory.value = {
            id: props.history.id,
            total: getTotalWithDiscount(discount.value, amountArray.value),
            customerType: customerType.value,
            discountPercentage: discount.value,
            datetime: new Date().toLocaleString('th-TH', { hour12: false }),
            amounts: amountArray.value,
            isEdited: true,
            // oldData: {
            //     total: props.history.total,
            //     customerType: props.history.customerType,
            //     discountPercentage: props.history.discountPercentage,
            //     datetime: props.history.datetime,
            //     amounts: props.history.amounts,
            //     isEdited: props.history.isEdited,
            //     oldData: props.history.oldData,
            // }
        }
        emits('edit', updatedHistory.value);
    }
}

const cancelButtonHandler = () => {
    emits('cancel');
}

watch([amountArray, customerType], () => {
    if (customerType.value === 'Guest') {
        discount.value = 0;
    } else {
        if (getTotal(amountArray.value) >= 5000) {
            discount.value = 5;
        }
        if (getTotal(amountArray.value) >= 8000) {
            discount.value = 10;
        }
        if (getTotal(amountArray.value) >= 15000) {
            discount.value = 20;
        }
        if (getTotal(amountArray.value) >= 30000) {
            discount.value = 30;
        }
        if (getTotal(amountArray.value) < 5000) {
            discount.value = 0;
        }
    }
}, { deep: true });

onMounted(() => {
    if (props.history === undefined) {
        console.log('props history is undefined');
        return;
    } else {
        console.log('props history is not undefined');
        amountArray.value = props.history.amounts;
        discount.value = props.history.discountPercentage;
        customerType.value = props.history.customerType;
    }
});
</script>

<template>
    <div class="w-full h-full flex flex-col items-center">
        <Header title="Cashier" class="m-5" />
        <BaseCard width="w-3/5" height="h-2/3" backgroundColor="bg-[#F1F1F1]" class="pb-16">
            <div class="flex flex-row space-x-4 pt-6 mx-10">
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-5xl" v-model="amount"
                    @keyup.enter="addAmount()" />
                <button class="btn" @click="addAmount()">Add</button>
            </div>

            <BaseCard width="w-1/1" height="h-1/3" backgroundColor="bg-white" class="mx-10 mt-6 overflow-auto scrollbar">
                <div class="w-2/3 h-ful mx-auto pt-4" v-if="amountArray.length !== 0">
                    <p class="text-lg font-semibold">No.</p>
                    <div v-for="(amount, index) in amountArray" :key="index">
                        <div class="w-full flex flex-row">
                            <div class="w-1/2 flex justify-start">
                                <p class="text-lg font-semibold">{{ index + 1 }}. {{ amount }}</p>
                            </div>
                            <div class="w-1/2 flex justify-end items-center">
                                <DeleteIcon class="cursor-pointer" @click="removeAmount(index)" />
                            </div>
                        </div>
                        <hr class="border-stone-500" />
                    </div>
                </div>
                <div class="h-full flex justify-center items-center" v-else>
                    <p class="text-lg font-semibold">Add amount to see the list</p>
                </div>
            </BaseCard>

            <div class="w-4/5 flex flex-col mx-10">
                <div class="flex flex-row space-x-2 mt-4">
                    <p>Customer:</p>
                    <input type="radio" name="radio-1" class="radio" value="Guest" v-model="customerType" checked />
                    <p>Guest</p>
                    <input type="radio" name="radio-1" class="radio radio-base-100" value="Customer"
                        v-model="customerType" />
                    <p>Customer</p>
                </div>

                <div class="flex flex-col mt-4">
                    <p>Discount ({{ customerType }}): </p>
                    <div class="flex flex-row space-x-2 mt-2">
                        <div class="w-20 h-14 rounded-xl" :class="discount === 5 ? 'bg-green-500' : 'bg-[#D7D7D7]'">
                            <div class="flex flex-col justify-center items-center h-full">
                                <p class="text-lg font-semibold">5%</p>
                            </div>
                        </div>
                        <div class="w-20 h-14 rounded-xl" :class="discount === 10 ? 'bg-green-500' : 'bg-[#D7D7D7]'">
                            <div class="flex flex-col justify-center items-center h-full">
                                <p class="text-lg font-semibold">10%</p>
                            </div>
                        </div>
                        <div class="w-20 h-14 rounded-xl" :class="discount === 20 ? 'bg-green-500' : 'bg-[#D7D7D7]'">
                            <div class="flex flex-col justify-center items-center h-full">
                                <p class="text-lg font-semibold">20%</p>
                            </div>
                        </div>
                        <div class="w-20 h-14 rounded-xl" :class="discount === 30 ? 'bg-green-500' : 'bg-[#D7D7D7]'">
                            <div class="flex flex-col justify-center items-center h-full">
                                <p class="text-lg font-semibold">30%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col mx-10">
                <p class="text-right text-3xl font-semibold" style="color: grey">Subtotal: {{
                    numberFormat(getTotal(amountArray)) }} ฿</p>
                <p class="text-right text-3xl font-semibold" style="color: red">Discount: -{{
                    numberFormat(getDiscount(discount, amountArray)) }} ฿</p>
                <p class="text-right text-3xl font-semibold" style="color: green">Total: {{
                    numberFormat(getTotalWithDiscount(discount, amountArray)) }} ฿</p>
                <div class="flex flex-row justify-end mt-2 space-x-3">
                    <button class="btn btn-error gap-2 w-36" @click="cancelButtonHandler()" v-if="props.history">
                        Cancel
                    </button>
                    <button class="btn gap-2 w-36" @click="confirmButtonHandler()">
                        Confirm
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </BaseCard>
    </div>
</template>


<style scoped></style>