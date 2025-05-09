import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../dashboard/components/dashboard.component.vue';
import Calendar from '../calendar/components/calendar.component.vue';
import Members from '../members/components/members.component.vue';
import Employees from '../employees/components/employees.component.vue';
import Classes from '../classes/components/classes.component.vue';
import Bookings from '../bookings/components/bookings.component.vue';
import Finances from '../finances/components/finances.component.vue';
import Attendance from '../attendance/components/attendance.component.vue';
import Notifications from '../notifications/components/notifications.component.vue';
import Profile from '../user/components/profile.component.vue'

const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Dashboard, //TODO: Add home component
        },
        {
            path: '/calendar',
            name: 'Calendar',
            component: Calendar
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/employees',
            name: 'Employees',
            component: Employees
        },
        {
            path: '/members',
            name: 'Members',
            component: Members
        },
        {
            path: '/classes',
            name: 'Classes',
            component: Classes
        },
        {
            path: '/bookings',
            name: 'Bookings',
            component: Bookings
        },
        {
            path: '/finances',
            name: 'Finances',
            component: Finances
        },
        {
            path: '/attendance',
            name: 'Attendance',
            component: Attendance
        },
        {
            path: '/notifications',
            name: 'Notifications',
            component: Notifications
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        }
        ]
})

export default router;