import axios from 'axios'
import { defineStore } from 'pinia'
import { apiKey } from '@/apiUrl'

export const useUpcoming = defineStore('upcoming', {
    state: () => ({
        url: 'https://api.themoviedb.org/3/movie/upcoming',
        upcoming: null
    }),
    actions: {
        async getUpcoming() {
            try {
                let response = await axios.get(`${this.url}?api_key=${apiKey}&language=ru-RU`)
                this.upcoming = response.data.results
            } catch (error) {
                console.error('Ошибка при получении предстоящих фильмов' + error);
            }
        }
    }
})