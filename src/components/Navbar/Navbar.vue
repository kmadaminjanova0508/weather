<template>
   <nav class="nav" :class="{active: scrolled > 150}">
        <div class="container">
            <div class="nav__container">
                <router-link to="/" class="logo">
                    <img :src="Logo" alt="">
                </router-link>
                <button class="nav__menu" @click="burger = true">
                    <img :src="menuIcon" alt="">
                </button>
                <ul class="nav__container-list" :class="{active: burger}">
                    <button class="nav__close" @click="burger = false">
                        <img :src="closeIcon" alt="">
                    </button>
                    <li v-for="item in links " :key="item.name">
                        <router-link @click="burger = false" :to="item.url" class="nav__container-list-link">
                            {{  item.name }}
                        </router-link>
                    </li>
                    <li>
                        <router-link @click="burger = false" to="/search" class="nav__container-list-link">
                            <img :src="searchIcon" alt="">
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
   </nav>
</template>

<script setup>
import menuIcon from '@/assets/images/menu.svg'
import closeIcon from '@/assets/images/close.svg'
import Logo from '@/assets/images/Logo.svg'
import searchIcon from '@/assets/images/search.svg'
import { ref } from 'vue'

const links = ref([
    { name: 'Главная', url: '/' },
    { name: 'Фильмы', url: '/movie' },
    { name: 'Сериалы', url: '/tv' },
])

let burger = ref(false)
let scrolled = ref(0)

window.addEventListener('scroll', () => scrolled.value = scrollY)

</script>

<style src="./Navbar.scss">
</style>

