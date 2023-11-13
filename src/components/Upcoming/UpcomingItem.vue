<template>
    <Transition name="upcoming-item">
        <div class="main__upcoming-item" v-if="slideView == i">
        <img :src="imgUrlFull + movie.backdrop_path" alt="" class="main__upcoming-item-img">
        <div class="main__upcoming-item-content">
            <h1 class="main__upcoming-item-content-title">
                {{ movie.title }}
            </h1>
            <p class="main__upcoming-item-content-text">
               {{ movie.overview }}
            </p>
            <BtnMore type="movie" :id="movie.id"/>
        </div>
        <div class="main__upcoming-item-next" @click="$emit('nextSlide')">
            <img :src="imgUrlFull + nextMovie.backdrop_path" alt="" class="main__upcoming-item-next-img">
            <div class="main__upcoming-item-next-info">
                <span>Следующий</span>
                <h2>{{ nextMovie.title }}</h2>
            </div>
        </div>
    </div>
    </Transition>
   
</template>

<script setup>

import { imgUrlFull } from '@/apiUrl'

const props = defineProps({
    movie: {
        type: Object
    },
    i: {
        type: Number
    },
    slideView: {
        type: Number
    },
    nextMovie: {
        type: Object
    }
})

</script>

<style>


</style>