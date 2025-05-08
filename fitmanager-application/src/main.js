import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css';
import Aura from '@primevue/themes/aura'
// TODO: Add PrimeVue theme

createApp(App)
    .use(PrimeVue, {
        ripple: true,
        theme: {
            preset: Aura,
            options: {
                darkModeSelector: false
            }
        }
    })
    .use(router)
    .mount('#app')
