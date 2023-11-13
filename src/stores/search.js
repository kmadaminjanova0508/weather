import axios from 'axios'
import { defineStore } from 'pinia'
import { apiKey } from '@/apiUrl'

export const useSearch = defineStore('search', {
    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        result: null
    }),
    actions: {
       async searching(text) {
            try {
                let res = await axios.get(`${this.url}/search/multi?api_key=${apiKey}&language=ru-RU&query=${text}`)
                this.result = res.data.results
                console.log(this.result);
            } catch (error) {
                console.error('ошибка при поиске ' + error);
            }
       }
    }
})