import axios from 'axios'
import { defineStore } from 'pinia'
import { apiKey } from '@/apiUrl'

export const useActors = defineStore('actors', {
    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        actorsMovie: null,
        actorsTv: null
    }),
    actions: {
       async getActors({type, id}) {
            try {
                let res = await axios.get(`${this.url}${type}/${id}/credits?api_key=${apiKey}&language=ru-RU`)
                if(type == 'movie') {
                    this.actorsMovie = res.data.cast
                }else if(type == 'tv') {
                    this.actorsTv = res.data.cast
                }
            } catch (error) {
                console.error('ошибка при получении актеров');
            }
       }
    },
    getters: {
        getActorsMovie(state) {
           return function(count) {
                if(state.actorsMovie) {
                    return state.actorsMovie.slice(0,count)
                }
            } 
        },
        getActorsTv(state) {
            return function(count) {
                if(state.actorsTv) {
                    return state.actorsTv.slice(0,count)
                }
            } 
        }
    }
})