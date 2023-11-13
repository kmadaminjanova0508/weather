import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'

const app = createApp(App)

import errorImage from '@/assets/images/NOPHOTO.png'

app.use(VueLazyload, {
    error: errorImage
})

app.use(createPinia())
app.use(router)


import BtnMore from '@/components/UI/BtnMore.vue'
import Loader from '@/components/UI/Loader.vue'
import Actors from '@/components/UI/Actors.vue'
import Trailer from '@/components/UI/Trailer.vue'

app.component('Loader', Loader)
app.component('BtnMore', BtnMore)
app.component('Actors', Actors)
app.component('Trailer', Trailer)


app.mount('#app')
