import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/movie', name: 'movie', component: () => import('@/views/MoviesPage.vue') },
    { path: '/tv', name: 'tv', component: () => import('@/views/TvsPage.vue') },
    { path: '/search', name: 'search', component: () => import('@/views/SearchPage.vue') },
    { path: '/movie/:id', name: 'moviePage', component: () => import('@/views/MoviePage.vue') },
    { path: '/tv/:id', name: 'tvPage', component: () => import('@/views/TvPage.vue') },
  ],
  scrollBehavior () {
    return {
      top: 0
    }
  }
})

export default router
