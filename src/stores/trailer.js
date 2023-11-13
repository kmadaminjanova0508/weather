import axios from 'axios'
import { defineStore } from 'pinia'
import { apiKey } from '@/apiUrl'

export const useTrailer = defineStore('trailer', {
    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        movie: null,
        tv: null
    }),
    actions: {
       async getTrailer ({type, id}) {
            try {
                let res = await axios.get(`${this.url}${type}/${id}/videos?api_key=${apiKey}&language=ru-RU`)
                if(type == 'movie') {
                    this.movie = res.data.results
                }else if(type == 'tv') {
                    this.tv = res.data.results
                }
               
            } catch (error) {
                console.error('ошибка при получении трейлеров');
            }
       }
    }
})