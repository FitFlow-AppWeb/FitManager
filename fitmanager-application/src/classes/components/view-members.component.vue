<!--
// Description: This code defines the `ViewMembers` component, which is used to display the list of members for a particular class.
// The component receives `classData` and `visible` as props, with `classData` containing the specific class information,
// and `visible` determining whether the dialog showing the members is visible or not.
// The `getMembersByClass` method fetches the list of members for the specified class using a service and then renders the members in a data table.
// If there are no members, a message is shown. The dialog can be closed by clicking the 'Close' button.
// Author: Cassius Martel
-->

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
      :header="$t('classes.members-class')"
      :visible="visible"
      @update:visible="closeDialog"
      modal
      style="min-width: 80vw"
      aria-labelledby="view-members-dialog"
  >
    <div v-if="members.length">
      <pv-datatable :value="members" responsive-layout="scroll" :rows="10" scrollable aria-describedby="members-table">
        <pv-column field="fullName" :header="$t('members.full-name')" />
        <pv-column field="age" :header="$t('members.age')" />
        <pv-column field="membershipStatus" :header="$t('members.membership-status')" />
        <pv-column field="membershipType" :header="$t('members.membership-type')" />
        <pv-column field="expirationDate" :header="$t('members.expiration-date')" />
        <pv-column field="email" :header="$t('members.email')" />
        <pv-column field="phone" :header="$t('members.phone')" />
        <pv-column field="address" :header="$t('members.address')" />
      </pv-datatable>
    </div>
    <div v-else>
      <p id="members-table">{{$t('members.members-not-found')}}.</p>
    </div>

    <div class="dialog-actions">
      <pv-button label="Close" class="p-button-secondary" @click="closeDialog" aria-label="Close Members List" />
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
