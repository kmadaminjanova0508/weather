<template>
    <div class="container">
        <div class="main__info">
        <div class="main__info-item" v-for="item in items" :key="item.name">
            <span class="main__info-item-name">{{ item.name }}</span>
            <span class="main__info-item-text">{{ item.text }}</span>
        </div>
    </div>
    </div>
 
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
    item: Object
})

const items = computed(() => {
    return [
        {
            name: 'Бюджет',
            text: props.item.budget ? '$' + props.item.budget : 'Нет информации'
        },
        {
            name: 'Сборы',
            text: props.item.revenue ? '$' + props.item.revenue : 'Нет информации'
        },
        {
            name: 'Статус',
            text: props.item.status
        },
        {
            name: 'Исходное название',
            text: props.item.original_title ||props.item.original_name
        },
        
    ]
})

</script>

