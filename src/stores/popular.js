import axios from 'axios'
import { defineStore } from 'pinia'
import { apiKey } from '@/apiUrl'

export const usePopular = defineStore('popular', {
    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        popularMovies: null,
        popularTvs: null
    }),
    actions: {
       async getPopular ({type, page = 1}) {
            try {
                let res = await axios.get(`${this.url}${type}/popular?api_key=${apiKey}&language=ru-RU&page=${page}`)
                if(type == 'movie') {
                    this.popularMovies = res.data.results
                }else if(type == 'tv') {
                    this.popularTvs = res.data.results
                }
            } catch (error) {
                console.error('ошибка при получении популярных данных');
            }
       }
    }
})