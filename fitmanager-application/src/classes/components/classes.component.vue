<script>
import { ClassApiService } from "../services/class-api.service.js";
import ClassList from "./class-list.component.vue"

export default {
  name: "ClassComponent",
  components: {ClassApiService, ClassList},
  data(){
    return {
      classes: [],
      selectedClass: null,
      showAddModal: false,
      showEditModal: false,
      showDeactivateModal: false // nuevo
    };
  },
  methods: {
    onClassSelected(gymClass) {
      this.selectedClass = gymClass;
    },
    onEditRequest() {
      this.showEditModal = true;
    },
    onDeactivateRequest() {
      this.showDeactivateModal = true;
    },
    fetchClasses() {
      const service = new ClassApiService();
      service.getAllClasses().then(data => {
        this.classes = data;
      });
    }
  },
  mounted(){
    this.fetchClasses();
  }
}

</script>

<template>
  <div class="class-container">
    <!-- Panel de lista -->
    <div class="list-pane">
      <ClassList
          :classes="classes"
          @selected="onClassSelected"
          @add-request="showAddModal = true"
      />

    </div>




  </div>
</template>

<style scoped>
.class-container {
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

</style>