import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import PrimeVue from 'primevue/config'
import {Card, Divider, DataTable, Column} from 'primevue';
import Chart from 'primevue/chart';
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
    .component('pv-card', Card)
    .component('pv-divider', Divider)
    .component('pv-chart', Chart)
    .component('pv-datatable', DataTable)
    .component('pv-column', Column)
    .use(router)
    .mount('#app')
