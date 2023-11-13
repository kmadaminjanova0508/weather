<template>
    <div class="infobox" :class="{active: open}">
        <img @click="$emit('close')" :src="closeIcon" alt="" class="infobox__close">
        <div class="infobox__block" v-if="current">
            <img v-lazy="imgUrlFull + current.backdrop_path" alt="" class="infobox__block-img">
            <div class="infobox__block-content">
                <div class="infobox__block-info">
                    <h2 class="infobox__block-info-title">{{ current.title || current.name }}</h2>
                    <p class="infobox__block-info-text">{{ current.overview || 'Нет описания' }}</p>
                    <p class="infobox__block-info-descr">
                       <span>{{ getYear }}{{ getGenres }}</span>
                       <span>{{ getTime }}</span>
                    </p>
                    <Actors :type="type" :id="current.id" count="4"/>
                    <BtnMore :type="type" :id="current.id"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import './InfoBox.scss'
import { imgUrlFull } from '@/apiUrl'
import closeIcon from '@/assets/images/close.svg'
import { computed } from 'vue'

const props = defineProps({
    current: Object,
    open: Boolean,
    type: String
})

const getYear = computed(() => new Date(props.current.release_date).getFullYear() ||   new Date(props.current.first_air_date).getFullYear() )

const getGenres = computed(() => props.current.genres.reduce((acc, item) => acc + ', ' + item.name,  '' ))

const getTime = computed(() => {
    let min = props.type == 'movie' ?  props.current.runtime : props.type == 'tv' ? props.current.episode_run_time : ''
    let hours = Math.floor(min / 60);
    let remainingMinutes = min % 60;
    if(hours == 0) {
        return remainingMinutes + 'm'
    }else {
        return hours + 'h ' + remainingMinutes + 'm';
    }
})


</script>

