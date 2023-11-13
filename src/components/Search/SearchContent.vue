<template>
    <router-link :to="`${type}/${item.id}`" class="main__search-list-item">
        <img v-lazy="imgUrlFull + item.backdrop_path" alt="" class="main__search-list-item-img">
        <h2 class="main__search-list-item-title">{{ item.title || item.name }}</h2>
    </router-link>
</template>

<script setup>
import { imgUrlFull } from '@/apiUrl'
import { computed } from 'vue'
const props = defineProps({
    item: Object
})

const type = computed(() => props.item.media_type == 'movie' ?  'movie' : props.item.media_type == 'tv' ? 'tv' : '')




</script>

