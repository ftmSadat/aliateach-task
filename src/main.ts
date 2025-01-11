import './assets/style/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import GlobalComponents from './includes/_globals'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(GlobalComponents)

app.mount('#app')
