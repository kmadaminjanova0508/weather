<template>
    <div class="main__media" v-if="getItem">
       <Intro :type="type" :item="getItem"/>
       <Info :item="getItem"/>
       <Recommend :type="type" :getRec="getRec"/>
    </div>
    <Loader v-else/>
</template>

<script setup>
import Info from './Info.vue';
import Intro from './Intro.vue';
import './Media.scss'
import Recommend from './Recommend.vue';
import { useItemId } from '@/stores/itemId'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useRec } from '@/stores/rec.js'

const route = useRoute()

const props = defineProps({
    type: String
})

const item = useItemId()

const recStore = useRec()

setTimeout(() => {
    item.getItemId({type: props.type, id: route.params.id}) 
    recStore.getRec({type: props.type, id: route.params.id})
}, 500);

const getItem = computed(() => props.type == 'movie' ? item.movie : props.type == 'tv' ? item.tv : '')

const getRec = computed(() => {
    if(recStore.movies || recStore.tvs) {
         let array = props.type == 'movie' ? recStore.movies : props.type == 'tv' ? recStore.tvs : ''
    return array.slice(0,4)
    }
   
})



</script>

