<script>
import { ClassApiService } from "../services/class-api.service.js";

export default {
  name: "ViewMembers",
  data() {
    return {
      members: []
    };
  },
  props: {
    classData: {
      type: Object,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeDialog() {
      this.$emit("close");
    },
    async getMembersByClass() {
      const service = new ClassApiService();
      this.members = await service.getMembersByClass(this.classData);
    }
  },
  mounted() {
    this.getMembersByClass();
  }
};
</script>

<template>
  <pv-dialog
      header="Members in this Class"
      :visible="visible"
      @update:visible="closeDialog"
      modal
      style="min-width: 80vw"
  >
    <div v-if="members.length">
      <pv-datatable :value="members" responsive-layout="scroll" :rows="10" scrollable>
        <pv-column field="fullName" header="Full Name" />
        <pv-column field="age" header="Age" />
        <pv-column field="membershipStatus" header="Membership Status" />
        <pv-column field="membershipType" header="Membership Type" />
        <pv-column field="expirationDate" header="Expiration Date" />
        <pv-column field="email" header="Email" />
        <pv-column field="phone" header="Phone" />
        <pv-column field="address" header="Address" />
      </pv-datatable>
    </div>
    <div v-else>
      <p>No members found for this class.</p>
    </div>

    <div class="dialog-actions">
      <pv-button label="Close" class="p-button-secondary" @click="closeDialog" />
    </div>
  </pv-dialog>
</template>

<style scoped>
.dialog-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}
</style>
