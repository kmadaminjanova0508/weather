<template>
    <div class="main__search">
        <div class="container">
            <input 
                type="text" 
                class="main__search-input"
                :placeholder="holder"
                v-model="text"
            >
            <div class="main__search-list" v-if="multiArray">
                <SearchContent
                    v-for="item in multiArray"
                    :key="item.id"
                    :item="item"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import './Search.scss'
import { ref, watch, computed, onUnmounted } from 'vue'
import SearchContent from './SearchContent.vue';
import { useSearch } from '@/stores/search'

const searchStore = useSearch()
const holder = ref('Найти фильм, сериал...')
const text = ref('')

const multiArray = computed(() => searchStore.result)


let timer = null

watch(text, () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
        searchStore.searching(text.value)
    }, 500);
})


onUnmounted(() => searchStore.result = null)


</script>

