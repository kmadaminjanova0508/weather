<template>
    <div class="main__rec">
        <div class="container">
            <h2 class="main__rec-title">Рекомендации</h2>
            <div class="main__rec-list">
                <router-link 
                    v-for="item in getRec" 
                    :key="item.id" 
                    :to="`${item.id}`" 
                    class="main__rec-list-item"
                >
                    <img v-lazy="imgUrlFull + item.backdrop_path" alt="" class="main__rec-list-item-img">
                    <h2 class="main__rec-list-item-title">{{ item.name || item.title }}</h2>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { imgUrlFull} from '@/apiUrl'

const props = defineProps({
    type: String,
    getRec: Array
})

</script>

