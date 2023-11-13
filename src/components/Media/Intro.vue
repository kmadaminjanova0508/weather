<template>
    <div class="main__intro">
        <img v-lazy="imgUrlFull + item.poster_path" alt="" class="main__intro-poster">
        <div class="main__intro-block">
            <div class="main__intro-left">
                <h1 class="main__intro-left-title">{{ item.title || item.name }}</h1>
                <p class="main__intro-left-text">{{ item.overview || "Нет описания" }}</p>
                <p class="main__intro-left-descr">
                    <span>{{ getYear }}{{ getGenres }}</span>
                    <span>{{ getTime }}</span>
                </p>
                <Trailer :id="trailer[0].key" v-if="trailer && trailer.length > 0"/>
            </div>
            <div class="main__intro-right">
                <img v-lazy="imgUrlFull + item.backdrop_path" alt="" class="main__intro-right-img">
            </div>
            <div class="main__intro-actors">
                <h2 class="main__intro-actors-title">В главных ролях</h2>
                <Actors :type="type" :id="item.id" count="6" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { imgUrlFull } from '@/apiUrl'
import { computed  } from 'vue'
import { useTrailer } from '@/stores/trailer'

const trailerStore = useTrailer()

trailerStore.getTrailer({type:props.type, id: props.item.id})

const trailer = computed(() => props.type == 'movie' ? trailerStore.movie : props.type == 'tv' ? trailerStore.tv : '')


const props = defineProps({
    type: String,
    item: Object
})

const getYear = computed(() => new Date(props.item.release_date).getFullYear() ||   new Date(props.item.first_air_date).getFullYear() )

const getGenres = computed(() => props.item.genres.reduce((acc, item) => acc + ', ' + item.name,  '' ))

const getTime = computed(() => {
    let min = props.type == 'movie' ?  props.item.runtime : props.type == 'tv' ? props.item.episode_run_time : ''
    let hours = Math.floor(min / 60);
    let remainingMinutes = min % 60;
    if(hours == 0) {
        return remainingMinutes + 'm'
    }else {
        return hours + 'h ' + remainingMinutes + 'm';
    }
})

</script>

