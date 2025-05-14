<script>
import { MemberApiService } from "../services/member-api.service.js";

export default {
  name: "EditMember",
  props: {
    member: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      editedMember: {...this.member},
      statusOptions: [
        {name: this.$t('members.active'), value: "active"},
        {name: this.$t('members.inactive'), value: "inactive"},
        {name: this.$t('members.pending'), value: "pending"}
      ],
      typeOptions: [
        {name: this.$t('members.monthly'), value: "monthly"},
        {name: this.$t('members.quarterly'), value: "quarterly"},
        {name: this.$t('members.annual'), value: "annual"}
      ]
    };
  },
  methods: {
    async submitForm() {
      const service = new MemberApiService();
      await service.updateMember(this.editedMember);
      this.$emit("member-updated", this.editedMember);
      this.$emit("close");
    }
  }
};
</script>

<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h2 class="modal-title">{{ $t('members.edit-member') }}</h2>
      <form @submit.prevent="submitForm">
        <pv-inputtext v-model="editedMember.fullName" :placeholder="$t('members.full-name')" class="input-field"
                      required/>
        <pv-inputtext v-model.number="editedMember.age" :placeholder="$t('members.age')" type="number"
                      class="input-field" required/>
        <pv-select v-model="editedMember.membershipStatus" :options="statusOptions" option-label="name"
                   option-value="value" :placeholder="$t('members.status')" class="input-field" required/>
        <pv-select v-model="editedMember.membershipType" :options="typeOptions" option-label="name" option-value="value"
                   :placeholder="$t('members.type')" class="input-field" required/>
        <pv-datepicker v-model="editedMember.expirationDate" :placeholder="$t('members.expiration-date')"
                       class="input-field" required/>
        <pv-datepicker v-model="editedMember.membershipStartDate" :placeholder="$t('members.start-date')"
                       class="input-field" required/>
        <pv-inputtext v-model="editedMember.dni" placeholder="DNI" class="input-field" required/>
        <pv-inputtext v-model="editedMember.email" type="email" :placeholder="$t('members.email')" class="input-field"
                      required/>
        <pv-inputtext v-model="editedMember.phone" type="tel" :placeholder="$t('members.phone')" class="input-field"
                      required/>
        <pv-inputtext v-model="editedMember.address" :placeholder="$t('members.address')" class="input-field" required/>
        <pv-inputtext v-model="editedMember.profilePicture" type="url" :placeholder="$t('members.profile-picture')"
                      class="input-field" required/>

        <div class="actions">
          <pv-button :label="$t('members.save')" type="submit" class="add-button"/>
          <pv-button :label="$t('members.cancel')" type="button" @click="$emit('close')" class="cancel-button"/>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  width: 400px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.modal-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #A7D1D2;
  text-align: center;
}

.input-field {
  width: 100%;
  margin-bottom: 1rem;
  background-color: white;
  border: 1px solid #A7D1D2;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
}

.input-field:focus {
  border-color: #5d7273 !important;
  outline: none;
}

.add-button {
  background-color: #A7D1D2;
  color: white;
  border: none;
  width: 100%;
  margin-top: 1rem;
}

.add-button:hover {
  background-color: #8FBFC0 !important;
  border-color: #8FBFC0 !important;
}

.cancel-button {
  background-color: #f0f0f0;
  color: #A7D1D2;
  border: none;
  width: 100%;
  margin-top: 1rem;
}

.cancel-button:hover {
  background-color: #dcdcdc !important;
  border-color: #8FBFC0 !important;
  color: #000 !important;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}
</style>
