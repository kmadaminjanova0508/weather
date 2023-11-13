<template>
    <div class="main__upcoming" v-if="upcomingMovies">
        <UpcomingItem
            v-for="(movie,i) in upcomingMovies"
            :key="movie.id"
            :movie="movie"
            :i="i"
            :slideView="slideView"
            :nextMovie="upcomingMovies[upcomingMovies.length - 1 == i ? 0 : i + 1]"
            @nextSlide="nextSlide"
        />
    </div>
    <Loader v-else/>
</template>

<script setup>
import UpcomingItem from './UpcomingItem.vue';
import { useUpcoming } from '@/stores/upcoming'
import { computed, ref, onMounted } from 'vue'

const upcomingStore = useUpcoming()
upcomingStore.getUpcoming()
const upcomingMovies = computed(() => upcomingStore.upcoming)

let slideView = ref(0)
let timeout = ref(null)

const slide = () => {
    if(upcomingMovies.value.length - 1 == slideView.value) {
        slideView.value = 0
    }else {
        slideView.value++
    }
    timeout = setTimeout(() => slide(), 5000);
}

const nextSlide = () => {
    clearTimeout(timeout)
    slide()
}


onMounted(() => {
    timeout = setTimeout(() => slide(), 5000);  
})

</script>

<style src="./Upcoming.scss">

</style>