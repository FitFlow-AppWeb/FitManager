<script>
import { ClassApiService } from "../services/class-api.service.js";
import ClassList from "./class-list.component.vue"
import AddClass from "./add-class.component.vue";
import EditClass from "./edit-class.component.vue";
import DeleteClass from "./delete-class.component.vue";
import DeactivateMember from "../../members/components/deactivate.component.vue";
import ViewMembers from "./view-members.component.vue";

export default {
  name: "ClassComponent",
  components: {DeactivateMember, ClassApiService, ClassList, AddClass, EditClass, DeleteClass, ViewMembers},
  data(){
    return {
      classes: [],
      selectedClass: null,
      showAddModal: false,
      showEditModal: false,
      showDeleteModal: false,
      showViewMembers: false
    };
  },
  methods: {
    onClassSelected(gymClass) {
      this.selectedClass = gymClass;
    },
    onEditRequest(gymClass) {
      this.selectedClass = gymClass;
      this.showEditModal = true;
    },
    ondDeleteRequest(gymClass) {
      this.selectedClass = gymClass;
      this.showDeleteModal = true;
    },
    onViewRequest(gymClass) {
      this.selectedClass = gymClass;
      this.showViewMembers = true;
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
          @edit-request="onEditRequest"
          @delete-request="ondDeleteRequest"
          @view-request="onViewRequest"
      />
      <AddClass
          v-if="showAddModal"
          @close="showAddModal = false"
          @class-added="fetchClasses"
      />

      <EditClass
          v-if="showEditModal"
          :class-data="selectedClass"
          @close="showEditModal = false"
          @class-updated="fetchClasses"
      />
      <DeleteClass
          v-if="showDeleteModal"
          :class-data="selectedClass"
          :visible="showDeleteModal"
          @close="showDeleteModal = false"
          @deleted-gymClass="fetchClasses"
      />
      <ViewMembers
        v-if="showViewMembers"
        :class-data="selectedClass"
        :visible="showViewMembers"
        @close="showViewMembers = false"
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