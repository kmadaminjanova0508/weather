<template>
    <div class="main__catalog" v-if="allContent">
        <div class="container">
            <h2 class="main__catalog-title">
                {{ title }}
            </h2>
            <div class="main__catalog-list" >
                <CatalogItem 
                    v-for="item in allContent"
                    :key="item.id"
                    :item="item"
                    :type="type"
                />
            </div>
        </div>
    </div>
    <Loader v-if="!allContent || loading"/>
</template>

<script setup>
import './Catalog.scss'
import { computed, ref, onMounted } from 'vue'
import CatalogItem from './CatalogItem.vue';
import { usePopular } from '@/stores/popular'

const popularStore = usePopular()

let currentPage = ref(1)
let allContent = ref([])
let loading = ref(false)

const getContent = async () => {
    if(!loading.value) {
        loading.value = true
        await popularStore.getPopular({type: props.type, page: currentPage.value})
        const popular =  props.type == 'movie' ? popularStore.popularMovies : props.type == 'tv' ? popularStore.popularTvs : ''
        allContent.value.push(...popular)
        setTimeout(() => {
            loading.value = false 
        }, 1000);
        currentPage.value++
    }
}

onMounted(() => {
    window.onscroll = () => {
        if(scrollY + window.innerHeight >= document.body.scrollHeight) {
            getContent()
        }
    }
    getContent()
})


const props = defineProps({
    type: String
})

const title = computed(() => props.type == 'movie' ? 'Все фильмы' : props.type == 'tv' ? 'Все сериалы' : '')

</script>

