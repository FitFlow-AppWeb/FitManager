<script>
import { MemberApiService } from "../services/member-api.service.js";
import MemberList from "./member-list.component.vue";
import MemberCard from "./member-card.component.vue";
import AddMember from "./add-member.component.vue";
import EditMember from "./edit-member.component.vue";
import DeactivateMember from "./deactivate.component.vue"; // nuevo

export default {
  name: "MemberComponent",
  components: { MemberList, MemberCard, AddMember, EditMember, DeactivateMember },
  data() {
    return {
      members: [],
      selectedMember: null,
      showAddModal: false,
      showEditModal: false,
      showDeactivateModal: false // nuevo
    };
  },
  methods: {
    onMemberSelected(member) {
      this.selectedMember = member;
    },
    onEditRequest() {
      this.showEditModal = true;
    },
    onDeactivateRequest() {
      this.showDeactivateModal = true;
    },
    fetchMembers() {
      const service = new MemberApiService();
      service.getAllMembers().then(data => {
        this.members = data;
      });
    }
  },
  mounted() {
    this.fetchMembers();
  }
};
</script>


<template>
  <div class="member-container">
    <!-- Panel de lista -->
    <div class="list-pane">
      <MemberList
          :members="members"
          @selected="onMemberSelected"
          @add-request="showAddModal = true"
      />
      <AddMember
          v-if="showAddModal"
          @close="showAddModal = false"
          @member-added="fetchMembers"
      />
    </div>

    <!-- Panel de tarjeta -->
    <div class="card-pane" v-if="selectedMember">
      <MemberCard
          :member="selectedMember"
          @edit-request="onEditRequest"
          @deactivate-request="onDeactivateRequest"

      />
    </div>

    <!-- Modal de edición -->
    <EditMember
        v-if="showEditModal"
        :member="selectedMember"
        @close="showEditModal = false"
        @member-updated="fetchMembers"
    />
    <DeactivateMember
        v-if="showDeactivateModal"
        :member="selectedMember"
        :visible="showDeactivateModal"
        @close="showDeactivateModal = false"
        @member-deactivated="fetchMembers"
    />
  </div>
</template>

<style scoped>
.member-container {
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
