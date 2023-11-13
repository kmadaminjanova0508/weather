import axios from 'axios'
import { defineStore } from 'pinia'
import { apiKey } from '@/apiUrl'

export const useRec = defineStore('rec', {
    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        movies: null,
        tvs: null
    }),
    actions: {
       async getRec ({type, id}) {
            try {
                let res = await axios.get(`${this.url}${type}/${id}/recommendations?api_key=${apiKey}&language=ru-RU`)
                if(type == 'movie') {
                    this.movies = res.data.results
                }else if(type == 'tv') {
                    this.tvs = res.data.results
                }
            } catch (error) {
                console.error('ошибка при получении рекомендованных данных');
            }
       }
    }
})