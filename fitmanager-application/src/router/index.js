/**
 * This code defines the routing configuration for the application using Vue Router.
 * It sets up various routes that correspond to different components such as the Dashboard, Calendar, Members, Employees, etc.
 * Each route includes a `path`, `name`, and a corresponding `component` for navigation.
 * The `meta` property is used to indicate whether a route requires authentication (`requiresAuth: true`), which can be used to guard access to those pages.
 * The router uses the `createRouter` method from Vue Router with a `createWebHistory` strategy for browser navigation.
 *
 * Author: Renzo Luque
 */

/**
 * @type {import('vue-router').RouteRecordRaw[]}
 */
import { createRouter, createWebHistory } from "vue-router";

import Layout      from "../public/components/app-layout.componet.vue";
import Login       from "../login/components/login.component.vue";
import Register    from "../login/components/register.component.vue";
import Dashboard   from '../dashboard/components/dashboard.component.vue';
import Calendar    from '../calendar/components/calendar.component.vue';
import Members     from '../members/components/member.component.vue';
import Employees   from '../employees/components/employees.component.vue';
import Classes     from '../classes/components/classes.component.vue';
import Inventory   from '../inventory/components/inventory.component.vue';
import Finances    from '../finances/components/finances.component.vue';
import Attendance  from '../attendance/components/attendance.component.vue';
import Notifications from '../notifications/components/notificationSection.vue';
import Profile     from '../user/components/profile.component.vue';

const routes = [
    // Rutas públicas
    { path: '/login',    name: 'Login',    component: Login    },
    { path: '/register', name: 'Register', component: Register },

    // Rutas protegidas dentro del Layout
    {
        path: '/',
        component: Layout,
        meta: { requiresAuth: true },
        children: [
            { path: '',           name: 'Home',         component: Dashboard   },
            { path: 'dashboard',  name: 'Dashboard',    component: Dashboard   },
            { path: 'calendar',   name: 'Calendar',     component: Calendar    },
            { path: 'members',    name: 'Members',      component: Members     },
            { path: 'employees',  name: 'Employees',    component: Employees   },
            { path: 'classes',    name: 'Classes',      component: Classes     },
            { path: 'inventory',  name: 'Inventory',    component: Inventory   },
            { path: 'finances',   name: 'Finances',     component: Finances    },
            { path: 'attendance', name: 'Attendance',   component: Attendance  },
            { path: 'notifications', name: 'Notifications', component: Notifications },
            { path: 'profile',    name: 'Profile',      component: Profile     },
        ]
    },

    // Redirigir cualquier otra ruta al Home (o podrías usar un 404)
    { path: '/:catchAll(.*)', redirect: { name: 'Home' } }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('jwt');
    // Si ruta protegida y NO hay token → Login
    if (to.meta.requiresAuth && !token) {
        return next({ name: 'Login' });
    }
    // Si vamos a Login/Register pero YA hay token → Home
    if ((to.name === 'Login' || to.name === 'Register') && token) {
        return next({ name: 'Home' });
    }
    next();
});

export default router;
