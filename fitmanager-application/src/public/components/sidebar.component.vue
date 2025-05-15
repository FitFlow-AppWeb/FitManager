<!--
* This code defines the sidebar component for the application, which includes a list of menu items
* with corresponding icons and links. Each menu item is dynamically rendered using the PrimeVue Menu component.
* The sidebar also includes a header with the app title and logo, and a footer with a logout option (TODO).
* The menu items are defined in the `menuItems` array, each containing the label, icon, and target route.
* The active menu item is highlighted when selected.
*
* Author: Renzo Luque
-->

<script>
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

export default {
  name: "SidebarComponent",
  components: {
    Menu,
  },
  data() {
    return {
      selectedItem: null
    };
  },
  computed: {
    menuItems() {
      return [
        {
          label: this.$t('general.dashboard'),
          svgContent: DashboardIcon,
          to: '/dashboard'
        },
        {
          label: this.$t('general.calendar'),
          svgContent: CalendarIcon,
          to: '/calendar'
        },
        {
          label: this.$t('general.personal'),
          svgContent: PersonalIcon,
          to: '/employees'
        },
        {
          label: this.$t('general.members'),
          svgContent: MembersIcon,
          to: '/members'
        },
        {
          label: this.$t('general.classes'),
          svgContent: ClassesIcon,
          to: '/classes'
        },
        {
          label: this.$t('general.inventory'),
          svgContent: BookingsIcon,
          to: '/inventory'
        },
        {
          label: this.$t('general.finances'),
          svgContent: FinancesIcon,
          to: '/finances'
        },
        {
          label: this.$t('general.attendance'),
          svgContent: AttendanceIcon,
          to: '/attendance'
        },
        {
          label: this.$t('general.notifications'),
          svgContent: NotificationsIcon,
          to: '/notifications'
        }
      ];
    }
  }
};

</script>

<template>
  <div class="app-sidebar" role="navigation" aria-label="Main Navigation">
    <div class="sidebar-header">
      <h3 class="app-title">FITMANAGER</h3>
      <img src="/assets/fit-manager-logo.svg" alt="FitManager Logo" class="app-logo" />
    </div>
    <div class="line-separator"></div>
    <div class="sidebar-nav">
      <Menu class="nav-contentMenu" :model="menuItems">
        <template #item="{ item, props }">
          <li :class="props.class" role="menuitem">
            <router-link
                :to="item.to"
                class="p-menu-item-link custom-menu-link"
                :class="{ 'active-menu-item': selectedItem === item }"
                @click="selectedItem = item"
                :aria-current="selectedItem === item ? 'page' : null"
            >
              <div v-if="item.svgContent" class="custom-svg-container" v-html="item.svgContent" aria-hidden="true"></div>
              <span class="p-menu-item-label">{{ item.label }}</span>
            </router-link>
          </li>
        </template>
      </Menu>
    </div>
    <div class="line-separator"></div>
    <div class="sidebar-footer">
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
  padding: 13px 0;
  .app-title {
    font-size: 2rem;
    font-family: 'Bebas Neue',serif;
    font-weight: normal;
    margin: 0;
    padding-right: 10px;
    color: #3A4949;
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
  font-weight: 500;
}

:deep(.p-menu-item-link:hover) {
  background-color: #96bcbd;
  color: #222222;
  border-radius: 4px;
}

:deep(.p-menu-item-link.active-menu-item) {
  background-color: #86a7a8;
  color: #222222;
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