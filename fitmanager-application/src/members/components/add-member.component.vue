<script>
/**
 * Add Member Component
 *
 * This component provides a form for adding a new gym member.
 * It captures key member details such as name, age, membership status and type,
 * contact information, and membership duration. Once the form is submitted,
 * the data is formatted and sent to the backend using a service class.
 *
 * Author: Cassius Martel
 */

import { MemberApiService } from "../services/member-api.service.js";

export default {
  name: "AddMember",
  data() {
    return {
      fullName: "",
      age: null,
      membershipStatus: "",
      membershipType: "",
      expirationDate: "",
      dni: "",
      email: "",
      phone: "",
      address: "",
      membershipStartDate: "",
      profilePicture: "",
      statusOptions: [
        { name: this.$t("members.active"), value: "active" },
        { name: this.$t("members.inactive"), value: "inactive" },
        { name: this.$t("members.pending"), value: "pending" }
      ],
      typeOptions: [
        { name: this.$t("members.monthly"), value: "monthly" },
        { name: this.$t("members.quarterly"), value: "quarterly" },
        { name: this.$t("members.annual"), value: "annual" }
      ]
    };
  },
  methods: {
    async submitForm() {
      const formattedExpirationDate = this.expirationDate instanceof Date
          ? this.expirationDate.toISOString().split('T')[0]
          : this.expirationDate;
      const formattedStartDate = this.membershipStartDate instanceof Date
          ? this.membershipStartDate.toISOString().split('T')[0]
          : this.membershipStartDate;

      const newMember = {

        fullName: this.fullName,
        age: this.age,
        membershipStatus: this.membershipStatus,
        membershipType: this.membershipType,
        expirationDate: formattedExpirationDate,
        dni: this.dni,
        email: this.email,
        phone: this.phone,
        address: this.address,
        membershipStartDate: formattedStartDate,
        profilePicture: this.profilePicture
      };

      const service = new MemberApiService();
      await service.addMember(newMember);
      this.$emit("member-added");
      this.$emit("close");
    }
  }
};
</script>

<template>
  <div class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="addMemberTitle">
    <div class="modal-content">
      <h2 id="addMemberTitle" class="modal-title">{{ $t('members.add-new-member') }}</h2>
      <form @submit.prevent="submitForm">
        <pv-inputtext v-model="fullName" :placeholder="$t('members.full-name')" class="input-field" required aria-label="Full name" />
        <pv-inputtext v-model.number="age" :placeholder="$t('members.age')" type="number" class="input-field" required aria-label="Age" />
        <pv-select v-model="membershipStatus" :options="statusOptions" :placeholder="$t('members.membership-status')" option-label="name" option-value="value" class="input-field" required aria-label="Membership status" />
        <pv-select v-model="membershipType" :options="typeOptions" :placeholder="$t('members.membership-type')" option-label="name" option-value="value" class="input-field" required aria-label="Membership type" />
        <pv-datepicker v-model="expirationDate" :placeholder="$t('members.expiration-date')" class="input-field" required aria-label="Membership expiration date" />
        <pv-datepicker v-model="membershipStartDate" :placeholder="$t('members.start-date')" class="input-field" required aria-label="Membership start date" />
        <pv-inputtext v-model="dni" placeholder="DNI" class="input-field" required aria-label="DNI" />
        <pv-inputtext v-model="email" type="email" :placeholder="$t('members.email')" class="input-field" required aria-label="Email" />
        <pv-inputtext v-model="phone" type="tel" :placeholder="$t('members.phone')" class="input-field" required aria-label="Phone number" />
        <pv-inputtext v-model="address" :placeholder="$t('members.address')" class="input-field" required aria-label="Address" />
        <pv-inputtext v-model="profilePicture" type="url" :placeholder="$t('members.profile-picture')" class="input-field" required aria-label="Profile picture URL" />

        <div class="actions" role="group" aria-label="Form actions">
          <pv-button :label="$t('general.add')" type="submit" class="add-button" />
          <pv-button :label="$t('general.cancel')" type="button" @click="$emit('close')" class="cancel-button" />
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

::v-deep(.p-dropdown),
::v-deep(.p-calendar),
::v-deep(.p-inputtext) {
  background-color: white !important;
  border: 1px solid #A7D1D2 !important;
  border-radius: 4px !important;
  color: #333 !important;
  width: 100% !important;
  font-size: 1rem !important;
}

::v-deep(.p-dropdown-label) {
  color: #333 !important;
}

::v-deep(.p-dropdown-item) {
  color: #333 !important;
}
::v-deep(.p-dropdown-item:hover) {
  background-color: #A7D1D2 !important;
  color: white !important;
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
