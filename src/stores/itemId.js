import axios from 'axios'
import { defineStore } from 'pinia'
import { apiKey } from '@/apiUrl'

export const useItemId = defineStore('itemId', {
    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        movie: null,
        tv: null
    }),
    actions: {
       async getItemId ({type, id}) {
            try {
                let res = await axios.get(`${this.url}${type}/${id}?api_key=${apiKey}&language=ru-RU`)
                if(type == 'movie') {
                    this.movie = res.data
                }else if(type == 'tv') {
                    this.tv = res.data
                }
            } catch (error) {
                console.error('ошибка при получении данных по id');
            }
       }
    }
})