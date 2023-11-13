import axios from 'axios'
import { defineStore } from 'pinia'
import { apiKey } from '@/apiUrl'

export const useTop = defineStore('top', {
    state: () => ({
        url: 'https://api.themoviedb.org/3/movie/',
        top: null
    }),
    actions: {
        async getTop() {
            try {
                let response = await axios.get(`${this.url}/top_rated?api_key=${apiKey}&language=ru-RU`)
                this.top = response.data.results
            } catch (error) {
                console.error('Ошибка при получении топовых фильмов' + error);
            }
        }
    }
})