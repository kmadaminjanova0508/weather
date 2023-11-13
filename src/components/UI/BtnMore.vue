<template>
    <router-link :to="`${type}/${id}`" class="btnmore">
        <img :src="iconMore" alt="">
        <span class="btnmore__text">Подробнее</span>
    </router-link>
</template>

<script setup>
import iconMore from '@/assets/images/more.svg'
const props = defineProps({
    type: String,
    id: Number
})

</script>

<style lang="scss">

.btnmore {
    width: max-content;
    background: #149A03;
    border-radius: 10px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    &__text {
        font-size: 20px;
        line-height: 150%;
        font-family: 'Raleway';
        color: #FFFFFF;
    }
}

</style>