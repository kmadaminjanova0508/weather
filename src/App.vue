<template>
  <div class="wrapper">
    <Navbar/>
    <RouterView v-if="routerAlive"/>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar/Navbar.vue';
import { ref, nextTick, provide } from 'vue'

const routerAlive = ref(true)

const reload = () => {
  routerAlive.value = false
  nextTick(() => routerAlive.value = true)
  console.log('nextTick working');
}

provide('reload', reload)
 
</script>

