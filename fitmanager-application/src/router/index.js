import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../dashboard/components/dashboard.component.vue';
import Calendar from '../calendar/components/calendar.component.vue';
import Members from '../members/components/member.component.vue';
import Employees from '../employees/components/employees.component.vue';
import Classes from '../classes/components/classes.component.vue';
import Bookings from '../bookings/components/bookings.component.vue';
import Finances from '../finances/components/finances.component.vue';
import Attendance from '../attendance/components/attendance.component.vue';
import Notifications from '../notifications/components/notifications.component.vue';
import Profile from '../user/components/profile.component.vue';
import { useStore } from 'vuex'; // Importar vuex para manejar el estado

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
            path: '/bookings',
            name: 'Bookings',
            component: Bookings,
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

// Protección de rutas privadas
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated'); // Comprobar si el usuario está autenticado (puedes usar Vuex o localStorage)

    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
        next('/'); // Si no está autenticado, redirigir a login
    } else {
        next(); // Si está autenticado, permitir la navegación
    }
});

export default router;
