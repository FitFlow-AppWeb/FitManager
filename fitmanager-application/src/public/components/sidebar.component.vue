<script setup>
import {Menu} from "primevue";
import {ref} from "vue";

import DashboardIcon from '/assets/Chart_fill.svg?raw';
import CalendarIcon from '/assets/Date_range_fill.svg?raw';
import PersonalIcon from '/assets/File_dock_fill.svg?raw';
import MembersIcon from '/assets/Group_fill.svg?raw';
import ClassesIcon from '/assets/Desk_alt_fill.svg?raw';
import BookingsIcon from '/assets/notebook_fill.svg?raw';
import FinancesIcon from '/assets/Credit_card_fill.svg?raw';
import AttendanceIcon from '/assets/Time_fill.svg?raw';
import NotificationsIcon from '/assets/Bell_fill.svg?raw';

const menuItems = ref([
  {
    label: 'Dashboard',
    svgContent: DashboardIcon,
    to: '/dashboard'
  },
  {
    label: 'Calendar',
    svgContent: CalendarIcon,
    to: '/calendar'
  },
  {
    label: 'Personal',
    svgContent: PersonalIcon,
    to: '/employees'
  },
  {
    label: 'Members',
    svgContent: MembersIcon,
    to: '/members'
  },
  {
    label: 'Classes',
    svgContent: ClassesIcon,
    to: '/classes'
  },
  {
    label: 'Bookings',
    svgContent: BookingsIcon,
    to: '/bookings'
  },
  {
    label: 'Finances',
    svgContent: FinancesIcon,
    to: '/finances'
  },
  {
    label: 'Attendance',
    svgContent: AttendanceIcon,
    to: '/attendance'
  },
  {
    label: 'Notifications',
    svgContent: NotificationsIcon,
    to: '/notifications'
  }
]);


</script>

<template>
  <div class="app-sidebar">
    <div class="sidebar-header">
      <h3 class="app-title">FITMANAGER</h3>
      <img src="/assets/fit-manager-logo.svg" alt="FitManager Logo" class="app-logo" />
    </div>
    <div class="line-separator"></div>
    <div class="sidebar-nav">
      <Menu class="nav-contentMenu" :model="menuItems">

        <template #item="{ item, props }">
          <li :class="props.class">
            <router-link
                :to="item.to"
                class="p-menu-item-link custom-menu-link"
                :class="{ 'active-menu-item': selectedItem === item }"
                @click="selectedItem = item"
              >
              <div v-if="item.svgContent" class="custom-svg-container" v-html="item.svgContent"></div>
              <span class="p-menu-item-label">{{ item.label }}</span>
            </router-link>
          </li>
        </template>

      </Menu>
    </div>
    <div class="line-separator"></div>
    <div class="sidebar-footer">
      <!--      TODO :  LOGOUT -->
      <p>Salir</p>
    </div>
  </div>
</template>

<style scoped>
.app-sidebar {
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100vh;
  background-color: #A7D1D2;
  color: #505F5F;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  .app-title {
    font-size: 2rem;
    font-family: 'Bebas Neue',serif;
    font-weight: bold;
    margin: 0;
    padding-right: 10px;
  }
  .app-logo {
    height: 36px;
    width: 51px;
  }
}

:deep(.p-menu) { 
  background-color: transparent;
  border: transparent;
  box-shadow: none;
}

:deep(.p-menu-list) {
  background-color: transparent;
  border: transparent;
  box-shadow: none;
}

:deep(.p-menu-item-link) {
  margin: 0;
  background-color: #A7D1D2;
  transition: background-color 0.2s ease-in-out;
}

:deep(.p-menu-item-label) {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
}

:deep(.p-menu-item-link:hover) {
  background-color: #96bcbd;
  color: #000000;
  border-radius: 4px;
}

:deep(.p-menu-item-link.active-menu-item) {
  background-color: #86a7a8;
  color: #000000;
  border-radius: 4px;
}

.line-separator {
  width: calc(100% - 20px);
  margin: 0 auto;
  height: 0.5px;
  background-color: rgba(58, 73, 73, 0.5);
}

.sidebar-nav {
  flex-grow: 1;
  padding: 10px 12px;
}

.sidebar-footer {
  margin: 0 15px;
  text-align: center;
}

</style>