import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../dashboard/components/dashboard.component.vue';
import Calendar from '../calendar/components/calendar.component.vue';
import Members from '../members/components/member.component.vue';
import Employees from '../employees/components/employees.component.vue';
import Classes from '../classes/components/classes.component.vue';
import Inventory from '../inventory/components/inventory.component.vue';
import Finances from '../finances/components/finances.component.vue';
import Attendance from '../attendance/components/attendance.component.vue';
import Notifications from '../notifications/components/notification.component.vue';
import Profile from '../user/components/profile.component.vue';
import Login from '../login/components/login.component.vue'; // Importa el componente de login

const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Dashboard, // Página de inicio
        },
        {
            path: '/calendar',
            name: 'Calendar',
            component: Calendar,
            meta: { requiresAuth: true }, // Ruta protegida
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
            meta: { requiresAuth: true }, // Ruta protegida
        },
        {
            path: '/employees',
            name: 'Employees',
            component: Employees,
            meta: { requiresAuth: true }, // Ruta protegida
        },
        {
            path: '/members',
            name: 'Members',
            component: Members,
            meta: { requiresAuth: true }, // Ruta protegida
        },
        {
            path: '/classes',
            name: 'Classes',
            component: Classes,
            meta: { requiresAuth: true }, // Ruta protegida
        },
        {
            path: '/inventory',
            name: 'Inventory',
            component: Inventory,
            meta: { requiresAuth: true }, // Ruta protegida
        },
        {
            path: '/finances',
            name: 'Finances',
            component: Finances,
            meta: { requiresAuth: true }, // Ruta protegida
        },
        {
            path: '/attendance',
            name: 'Attendance',
            component: Attendance,
            meta: { requiresAuth: true }, // Ruta protegida
        },
        {
            path: '/notifications',
            name: 'Notifications',
            component: Notifications,
            meta: { requiresAuth: true }, // Ruta protegida
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
            meta: { requiresAuth: true }, // Ruta protegida
        },
    ],
});


export default router;