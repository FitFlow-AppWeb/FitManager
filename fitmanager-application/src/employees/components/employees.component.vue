<script>
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
       />
      <AddEmployee  v-if="showAddModal"
                    @close="showAddModal = false"
                    @employee-added="fetchEmployees"
      />

    </div>
    <div class="card-pane" v-if="selectedEmployee">
      <EmployeeCard
          :employee="selectedEmployee"
          @edit-request="onEditRequest"
          @fire-request="onFireRequest"
      />
    </div>

    <EditEmployee
        v-if="showEditModal"
        :employee="selectedEmployee"
        @close="showEditModal = false"
        @employee-updated="fetchEmployees"
    />
    <FireEmployee
        :employee="selectedEmployee"
        :visible="showFireModal"
        @close="showFireModal = false"
        @employee-fire="fetchEmployees"
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

