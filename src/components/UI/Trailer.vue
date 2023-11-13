<template>
    <a :href="getTrailer" target="_blank" rel="noopener"  class="trailer">
        <img :src="iconMore" alt="">
        <span class="trailer__text">Смотреть трейлер</span>
    </a>
</template>

<script setup>
import iconMore from '@/assets/images/more.svg'
import { computed } from 'vue'
const props = defineProps({
    id: String
})

const getTrailer = computed(() => `https://www.youtube.com/watch?v=${props.id}`)

</script>

<style lang="scss">

.trailer {
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