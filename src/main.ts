import './assets/style/style.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import GlobalComponents from './includes/_globals'

const app = createApp(App)

app.use(router)
app.use(GlobalComponents)

app.mount('#app')
