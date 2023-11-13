<template>
    <section class="main__top">
        <h2 class="main__top-title">
            ТОП
            <span>10</span>
        </h2>
        <swiper 
            :navigation="true" 
            :modules="modules"
            :space-between="23"
            :breakpoints="breakpoints"
            class="main__top-swiper"
        >
            <swiper-slide
                class="main__top-swiper-item"
                v-for="(item, i) in topMovies"
                :key="item.id"
            >
                <div class="main__top-swiper-item-number">
                    <span> {{  i + 1 }}</span>
                </div>
                <img v-lazy="imgUrlFull + item.backdrop_path" alt="" class="main__top-swiper-item-img">
            </swiper-slide>
        </swiper>
    </section>
</template>

<script setup>
import { imgUrlFull } from '@/apiUrl'
import './Top.scss'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { useTop } from '@/stores/top'
import { ref, computed} from 'vue'


const topStore = useTop()

topStore.getTop()

const count = ref(10)

const topMovies = computed(() => {
    if(topStore.top) {
       return topStore.top.slice(0,count.value)
    }
})

// swiper settings

const modules = ref([Navigation])

const breakpoints = ref({
    320: {
        slidesPerView: 1
    },
    576: {
        slidesPerView: 1
    },
    900: {
        slidesPerView: 2
    },
    1200: {
        slidesPerView: 2
    },
    1400: {
        slidesPerView: 3
    }
})

</script>

