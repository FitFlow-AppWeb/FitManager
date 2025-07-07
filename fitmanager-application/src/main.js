import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import {Avatar, FloatLabel,Button, Card, Column, DataTable, Divider, Select, Paginator, Toolbar, SelectButton, InputText, Tooltip, DatePicker, Popover, Row, Dialog,} from 'primevue';
import Chart from 'primevue/chart';
import Aura from '@primevue/themes/aura'
import i18n from './i18n.js'
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import router from './router/index.js'
import Textarea from 'primevue/textarea';
import InputNumber from 'primevue/inputnumber';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';

import api from '/src/login/services/api.js';

const storedToken = localStorage.getItem('jwt');
if (storedToken) {
    api.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
    console.log("Token JWT cargado y configurado en Axios al inicio.");
} else {
    console.log("No se encontró token JWT en localStorage al inicio.");
}

const app = createApp(App);

app
    .use(PrimeVue, {
        ripple: true,
        theme: {
            preset: Aura,
            options: {
                darkModeSelector: false
            }
        }
    })
    .use(ToastService)
    .component('pv-floatlabel', FloatLabel)
    .component('pv-divider', Divider)
    .component('pv-inputtext', InputText)
    .component('pv-datepicker', DatePicker)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-chart', Chart)
    .component('pv-column', Column)
    .component('pv-datatable', DataTable)
    .component('pv-paginator', Paginator)
    .component('pv-avatar', Avatar)
    .component('pv-toolbar', Toolbar)
    .component('pv-select', Select)
    .component('pv-sbutton', SelectButton)
    .component('pv-popover', Popover)
    .component('pv-tooltip', Tooltip)
    .component('pv-row', Row)
    .component('pv-dialog', Dialog)
    .component('pv-inputnumber', InputNumber)
    .component('pv-textarea', Textarea)
    .component('Toast', Toast)


    .use(router)
    .use(i18n)
    .mount('#app')
