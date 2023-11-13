<template>
    <section class="main__video" v-if="content">
        <router-link :to="type" class="main__video-title">
            {{ type == 'movie' ? 'Фильмы' : type == 'tv' ? 'Сериалы' : '' }}
            <img :src="arrowIcon" alt="">
        </router-link>
        <swiper 
            :navigation="true" 
            :modules="modules"
            :space-between="25"
            :breakpoints="breakpoints"
            class="main__video-swiper"
        >
            <swiper-slide
                class="main__video-swiper-item"
                v-for="item in content"
                :key="item.id"
                @click="getItem(item)"
            >
                <img v-lazy="imgUrlFull + item.backdrop_path" alt="" class="main__video-swiper-item-img">
                <h2 class="main__video-swiper-item-title">{{ item.title }}</h2>
            </swiper-slide>
            <swiper-slide class="main__video-swiper-item">
                <router-link :to="type" class="main__video-swiper-item-page">
                    <img :src="arrowIcon" alt="">
                    {{ type == 'movie' ? 'Все фильмы' : type == 'tv' ? 'ВСе сериалы' : '' }}
                </router-link>
            </swiper-slide>
        </swiper>
        <InfoBox
            :current="current"
            :open="open"
            :type="type"
            @close="close"
        />
    </section>
    <Loader v-else/>
</template>

<script setup>
import './Mat.scss'
import { imgUrlFull } from '@/apiUrl'
import arrowIcon from '@/assets/images/arrow.png'
import { usePopular } from '@/stores/popular'
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import InfoBox from '../InfoBox/InfoBox.vue';
import { useItemId } from '@/stores/itemId'


const props = defineProps({
    type: {
        type: String
    }
})

const popularStore = usePopular()
popularStore.getPopular({type: props.type})

const content = computed(() => props.type == 'movie' ? popularStore.popularMovies : props.type == 'tv' ? popularStore.popularTvs : '')




// swiper settings

const modules = ref([Navigation])

const breakpoints = ref({
    320: {
        slidesPerView: 1
    },
    576: {
        slidesPerView: 2
    },
    900: {
        slidesPerView: 3
    },
    1200: {
        slidesPerView: 4
    },
    1400: {
        slidesPerView: 5
    }
})


// функционал при клике

const itemIdStore = useItemId()

let current = ref(null)
let open = ref(false)

const getItem = async (item) => {
    current.value = null
    await itemIdStore.getItemId({type: props.type, id: item.id })
    current.value = props.type == 'movie' ? itemIdStore.movie : props.type == 'tv' ?  itemIdStore.tv : ''
    open.value = true
}

const close = () => {
    open.value = false
    props.type == 'movie' ? itemIdStore.movie = null : props.type == 'tv' ? itemIdStore.tv = null : ''
}

</script>



