<script setup>
import BaseCard from '../Base/BaseCard.vue';

let testArr = [
    {
        name: 'test',
        price: 100
    },
    {
        name: 'test2',
        price: 200
    },
    {
        name: 'test3',
        price: 300
    }
]

const getTotal = () => {
    let total = 0;
    testArr.forEach(item => {
        total += item.price;
    })
    return total;
}
</script>

<template>
    <BaseCard width="w-3/5" height="h-2/3" backgroundColor="bg-zinc-900">
        <div class="flex flex-row space-x-4 mt-8 mx-10">
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-5xl" />
            <button class="btn">Add</button>
        </div>

        <BaseCard width="w-1/1" height="h-1/3" backgroundColor="bg-black" class="mx-10 mt-8">
            <div class="w-2/3 h-ful mx-auto pt-4">
                <p class="text-lg font-semibold">No.</p>
                <div v-for="(item, index) in testArr" :key="index">
                    <p class="text-lg font-semibold">{{ index + 1 }}. {{ item.name }} {{ item.price }}</p>
                    <hr />
                </div>
            </div>
        </BaseCard>

        <div class="w-4/5 flex flex-col mx-10">
            <div class="flex flex-row space-x-2 mt-4">
                <p>Customer:</p>
                <input type="radio" name="radio-1" class="radio" checked />
                <p>Guest</p>
                <input type="radio" name="radio-1" class="radio" />
                <p>Customer</p>
            </div>

            <div class="flex flex-col mt-4">
                <p>Discount (Member): </p>
                <div class="flex flex-row space-x-2 mt-2">
                    <div class="w-20 h-14 rounded-xl bg-black">
                        <div class="flex flex-col justify-center items-center h-full">
                            <p class="text-lg font-semibold">5%</p>
                        </div>
                    </div>
                    <div class="w-20 h-14 rounded-xl bg-black">
                        <div class="flex flex-col justify-center items-center h-full">
                            <p class="text-lg font-semibold">10%</p>
                        </div>
                    </div>
                    <div class="w-20 h-14 rounded-xl bg-black">
                        <div class="flex flex-col justify-center items-center h-full">
                            <p class="text-lg font-semibold">20%</p>
                        </div>
                    </div>
                    <div class="w-20 h-14 rounded-xl bg-black">
                        <div class="flex flex-col justify-center items-center h-full">
                            <p class="text-lg font-semibold">30%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col mx-10">
            <p class="text-right text-3xl font-semibold" style="color: grey">Subtotal: {{ getTotal() }}</p>
            <p class="text-right text-3xl font-semibold" style="color: red">Discount: 0 ฿</p>
            <p class="text-right text-3xl font-semibold" style="color: green">Total: {{ getTotal() }}</p>
        </div>
    </BaseCard>
</template>


<style scoped></style>