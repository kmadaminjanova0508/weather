<template>
    <main class="main">
        <Media type="tv"/>
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
    console.log(1);
    if(currentId != route.params.id) {
        reload();
    }
})




onBeforeUnmount(() => {
    itemStore.tv = null
})


</script>
