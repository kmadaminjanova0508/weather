<template>
    <router-link :to="`${type}/${item.id}`" class="main__catalog-list-item">
        <img v-lazy="imgUrlFull + item.backdrop_path" alt="" class="main__catalog-list-item-img">
        <h2 class="main__catalog-list-item-title">{{ item.name || item.title }}</h2>
    </router-link>
</template>

<script setup>
import { imgUrlFull } from '@/apiUrl'
const props = defineProps({
    item: Object,
    type: String
})

</script>

