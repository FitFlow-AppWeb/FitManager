<script>
/**
 * Member Management Component
 *
 * This component serves as the central hub for managing members. It provides:
 * - A list view to browse all members.
 * - A detailed card view for the selected member.
 * - Modal dialogs to add, edit, or deactivate members.
 *
 * It fetches member data from the backend API and responds to user interactions
 * such as selecting a member, initiating edits, or confirming deactivation.
 *
 * Author: Cassius Martel
 */

import { MemberApiService } from "../services/member-api.service.js";
import MemberList from "./member-list.component.vue";
import MemberCard from "./member-card.component.vue";
import AddMember from "./add-member.component.vue";
import EditMember from "./edit-member.component.vue";
import DeactivateMember from "./deactivate.component.vue";
import MemberPayments from "./member-payments.component.vue";

export default {
  name: "MemberComponent",
  components: { MemberList, MemberCard, AddMember, EditMember, DeactivateMember, MemberPayments  },
  data() {
    return {
      members: [],
      selectedMember: null,
      showAddModal: false,
      showEditModal: false,
      showDeactivateModal: false,
      showPaymentsModal: false
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
    onPaymentsRequest() {
      console.log("Received payments-request from card");

      this.showPaymentsModal = true;
    },
    fetchMembers() {
      const service = new MemberApiService();
      service.getAllMembers().then(data => {
        this.members = data;
        if (this.selectedMember) {
          const updated = data.find(m => m.id === this.selectedMember.id);
          this.selectedMember = updated || null;
        }
      });
    }
  },
  mounted() {
    this.fetchMembers();
  }
};
</script>

<template>
  <div class="member-container" role="main" aria-label="Member management interface">
    <!-- List Panel -->
    <div class="list-pane" role="region" aria-label="Member list panel">
      <MemberList
          :members="members"
          @selected="onMemberSelected"
          @add-request="showAddModal = true"
          @payments-request="onPaymentsRequest"
      />
      <AddMember
          v-if="showAddModal"
          @close="showAddModal = false"
          @member-added="fetchMembers"
      />
    </div>

    <!-- Card Panel -->
    <div class="card-pane" v-if="selectedMember" role="region" aria-label="Selected member details">
      <MemberCard
          :member="selectedMember"
          @edit-request="onEditRequest"
          @deactivate-request="onDeactivateRequest"
          @payments-request="onPaymentsRequest"
      />
    </div>

    <!-- Edit Modal -->
    <EditMember
        v-if="showEditModal"
        :member="selectedMember"
        @close="showEditModal = false"
        @member-updated="fetchMembers"
    />

    <!-- Deactivate Modal -->
    <DeactivateMember
        v-if="showDeactivateModal"
        :member="selectedMember"
        :visible="showDeactivateModal"
        @close="showDeactivateModal = false"
        @member-deactivated="fetchMembers"
    />
    <MemberPayments
        v-if="showPaymentsModal"
        :member-id="selectedMember.id"
        @close="showPaymentsModal = false"
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
