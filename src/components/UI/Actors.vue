<template>
    <div class="actors" v-if="actors">
        <div class="actors__item" v-for="item in actors" :key="item.id">
            <img v-lazy="imgUrl + item.profile_path" alt="">
            <span>{{ item.name }}</span>
        </div>
    </div>
</template>

<script setup>
import { useActors } from '@/stores/actors'
import { computed } from 'vue'
import { imgUrl } from '@/apiUrl'

const actorsStore = useActors()

actorsStore.getActors({type: props.type, id: props.id})

const actors = computed(() => props.type == 'movie' ? actorsStore.getActorsMovie(props.count) : props.type == 'tv' ? actorsStore.getActorsTv(props.count) : '')

const props = defineProps({
    id: Number,
    type: String,
    count: Number
})

</script>

<style lang="scss" scoped>

.actors {
    max-width: 450px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    &__item {
        background: rgba(20, 20, 20, 0.5);
        border: 1px solid #FFFFFF;
        border-radius: 25px;
        display: flex;
        align-items: center;
        gap: 10px;
        padding-right: 15px;
        & img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
        }
        & span {
            font-family: 'Raleway';
            font-size: 16px;
            line-height: 190%;
            color: white;
        }
    }
}

</style>