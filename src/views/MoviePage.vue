<template>
    <main class="main">
        <Media type="movie"/>
    </main>
</template>

<script setup>
import Media from '../components/Media/Media.vue';
import { useItemId } from '@/stores/itemId'
import { onBeforeUnmount, inject, onUpdated, ref } from 'vue';
import { useRoute } from 'vue-router'

const itemStore = useItemId()
const route = useRoute()
const reload = inject('reload')

let currentId = ref(route.params.id)

onUpdated(() => {
    if(currentId != route.params.id) {
        reload();
    }
})



onBeforeUnmount(() => {
    itemStore.movie = null
})


</script>
