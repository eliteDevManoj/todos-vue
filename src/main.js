import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)


app.use(router)
app.use(pinia)

window.axios = require('axios')

app.mount('#app')
