<script>
/**
 * Employee Component
 *
 * This component is responsible for managing and displaying employees within the system. It integrates several sub-components
 * such as `EmployeeList`, `EmployeeCard`, `AddEmployee`, `EditEmployee`, and `FireEmployee`.
 * The main responsibilities include displaying the list of employees, allowing the user to view employee details,
 * add new employees, edit existing ones, or fire an employee. It fetches the employee data from an API service
 * and updates the displayed list upon any changes.
 *
 * The component maintains a modal system for adding, editing, and firing employees, which are triggered by
 * specific user actions.
 *
 * Author: Cassius Martel
 */

import { EmployeeApiService } from "../services/employee-api.service";
import EmployeeList from "./employee-list.component.vue";
import EmployeeCard from "./employee-card.component.vue";
import AddEmployee from "./add-employee.component.vue";
import EditEmployee from "./edit-employee.component.vue";
import FireEmployee from "./fire-employee.component.vue";

export default {
  name: "EmployeeComponent",
  components: {EmployeeCard, EmployeeList, AddEmployee, EditEmployee, FireEmployee },
  data() {
    return {
      employees: [],
      selectedEmployee: null,
      showAddModal: false,
      showEditModal: false,
      showFireModal: false // nuevo
    };
  },
  methods: {
    onEmployeeSelected(employee) {
      this.selectedEmployee = employee;
    },
    onEditRequest() {
      this.showEditModal = true;
    },
    onFireRequest() {
      console.log("hola");
      this.showFireModal = true;
    },
    fetchEmployees() {
      const service = new EmployeeApiService();
      service.getAllEmployees().then(data => {
        this.employees = data;

      });
    }
  },
  mounted() {
    this.fetchEmployees();
  }
};
</script>

<template>
  <div class="employee-container">
    <!-- Panel de lista -->
    <div class="list-pane">
      <EmployeeList
          :employees="employees"
          @selected="onEmployeeSelected"
          @add-request="showAddModal = true"
          aria-labelledby="employee-list"
      />
      <AddEmployee  v-if="showAddModal"
                    @close="showAddModal = false"
                    @employee-added="fetchEmployees"
                    aria-labelledby="add-employee-modal"
      />

    </div>
    <div class="card-pane" v-if="selectedEmployee">
      <EmployeeCard
          :employee="selectedEmployee"
          @edit-request="onEditRequest"
          @fire-request="onFireRequest"
          aria-labelledby="employee-card"
      />
    </div>

    <EditEmployee
        v-if="showEditModal"
        :employee="selectedEmployee"
        @close="showEditModal = false"
        @employee-updated="fetchEmployees"
        aria-labelledby="edit-employee-modal"
    />
    <FireEmployee
        :employee="selectedEmployee"
        :visible="showFireModal"
        @close="showFireModal = false"
        @employee-fire="fetchEmployees"
        aria-labelledby="fire-employee-modal"
    />
  </div>
</template>


<style scoped>
.employee-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
}

.list-pane {
  flex: 2;
  display: flex;
  justify-content: center;
}

.card-pane {
  flex: 1;
  margin-left: 1rem;
  display: flex;
  justify-content: center;
}
</style>

