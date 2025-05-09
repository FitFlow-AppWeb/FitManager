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

  data() {
    return {
      localVisible: this.visible
    };
  },

  watch: {
    visible(val) {
      this.localVisible = val;
    }
  },

  methods: {
    closeDialog() {
      this.localVisible = false;
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
      header="Deactivate Member"
      v-model:visible="localVisible"
      modal
  >
    <p>Are you sure you want to deactivate this member?</p>
    <div class="dialog-actions">
      <pv-button label="Cancel" class="p-button-secondary" @click="closeDialog" />
      <pv-button label="Deactivate" class="p-button-danger" @click="deactivateMember" />
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
