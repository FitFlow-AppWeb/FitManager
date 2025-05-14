<script>
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
  >
    <p>{{ $t('members.remove-confirmation') }}</p>
    <div class="dialog-actions">
      <pv-button :label="$t('general.cancel')" class="p-button-secondary" @click="closeDialog" />
      <pv-button :label="$t('members.remove')" class="p-button-danger" @click="deactivateMember" />
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
