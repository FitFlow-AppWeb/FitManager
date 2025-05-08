import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css';

// TODO: Add PrimeVue theme



createApp(App)
    .use(router)
    .use(PrimeVue)
    .mount('#app')
