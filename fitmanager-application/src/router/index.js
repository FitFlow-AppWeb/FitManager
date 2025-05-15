/**
 * This code defines the routing configuration for the application using Vue Router.
 * It sets up various routes that correspond to different components such as the Dashboard, Calendar, Members, Employees, etc.
 * Each route includes a `path`, `name`, and a corresponding `component` for navigation.
 * The `meta` property is used to indicate whether a route requires authentication (`requiresAuth: true`), which can be used to guard access to those pages.
 * The router uses the `createRouter` method from Vue Router with a `createWebHistory` strategy for browser navigation.
 *
 * Author: Renzo Luque
 */

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
import Login from '../login/components/login.component.vue'; // Import the login component

const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Dashboard, // Home page
        },
        {
            path: '/calendar',
            name: 'Calendar',
            component: Calendar,
            meta: { requiresAuth: true }, // Protected route
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
            meta: { requiresAuth: true }, // Protected route
        },
        {
            path: '/employees',
            name: 'Employees',
            component: Employees,
            meta: { requiresAuth: true }, // Protected route
        },
        {
            path: '/members',
            name: 'Members',
            component: Members,
            meta: { requiresAuth: true }, // Protected route
        },
        {
            path: '/classes',
            name: 'Classes',
            component: Classes,
            meta: { requiresAuth: true }, // Protected route
        },
        {
            path: '/inventory',
            name: 'Inventory',
            component: Inventory,
            meta: { requiresAuth: true }, // Protected route
        },
        {
            path: '/finances',
            name: 'Finances',
            component: Finances,
            meta: { requiresAuth: true }, // Protected route
        },
        {
            path: '/attendance',
            name: 'Attendance',
            component: Attendance,
            meta: { requiresAuth: true }, // Protected route
        },
        {
            path: '/notifications',
            name: 'Notifications',
            component: Notifications,
            meta: { requiresAuth: true }, // Protected route
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
            meta: { requiresAuth: true }, // Protected route
        },
    ],
});

export default router;
