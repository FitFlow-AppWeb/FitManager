import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { Avatar, Button, Card, Listbox, Toolbar, Tooltip } from 'primevue';
import Aura from '@primevue/themes/aura';
import i18n from "./i18n.js";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const app = createApp(App);

app
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-avatar', Avatar)
    .component('pv-toolbar', Toolbar)
    .component('pv-tooltip', Tooltip)
    .component('pv-listbox', Listbox) 
    .use(i18n)
    .mount('#app');