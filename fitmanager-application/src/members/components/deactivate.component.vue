<script>
/**
 * Deactivate Member Component
 *
 * This component provides a confirmation dialog to deactivate a member's account.
 * It receives the member object and a visibility flag as props.
 * When the user confirms, it calls a service to deactivate the member and emits
 * relevant events to update the parent component.
 *
 *
 * Author: Cassius Martel
 */

import { MemberApiService } from "../services/member-api.service";

export default {
  name: "DeactivateComponent",
  props: {
    member: {
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
    deactivateMember() {
      const service = new MemberApiService();
      service.deactivateMember(this.member).then(() => {
        this.$emit("member-deactivated", this.member);
        this.closeDialog();
      }).catch(error => {
        console.error("Error deactivating member:", error);
      });
    }
  }
};
</script>

<template>
  <pv-dialog
      :header="$t('members.remove-member')"
      :visible="visible"
      @update:visible="closeDialog"
      modal
      role="alertdialog"
      aria-labelledby="deactivateDialogTitle"
      aria-describedby="deactivateDialogMessage"
  >
    <template #header>
      <h2 id="deactivateDialogTitle">{{ $t('members.remove-member') }}</h2>
    </template>

    <p id="deactivateDialogMessage">{{ $t('members.remove-confirmation') }}</p>

    <div class="dialog-actions" role="group" aria-label="Confirmation actions">
      <pv-button
          :label="$t('general.cancel')"
          class="p-button-secondary"
          @click="closeDialog"
          aria-label="Cancel deactivation"
      />
      <pv-button
          :label="$t('members.remove')"
          class="p-button-danger"
          @click="deactivateMember"
          aria-label="Confirm deactivation"
      />
    </div>
  </pv-dialog>
</template>

<style scoped>
.dialog-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}
</style>
