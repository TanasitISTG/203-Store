<script setup>

</script>

<template>
    <div class="flex flex-col mt-5">
        <div class="flex flex-row">
            <div class="w-1/4 flex justify-center">
                <slot name="firstRow"></slot>
            </div>
            <div class="w-1/4 flex justify-center">
                <slot name="secondRow"></slot>
            </div>
            <div class="w-1/4 flex justify-center">
                <slot name="thirdRow"></slot>
            </div>
            <div class="w-1/4 flex justify-center">
                <slot name="fourthRow"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped></style>