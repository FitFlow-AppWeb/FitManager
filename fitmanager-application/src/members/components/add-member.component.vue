<script>
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
        { name: "Active", value: "active" },
        { name: "Inactive", value: "inactive" },
        { name: "Pending", value: "pending" }
      ],
      typeOptions: [
        { name: "Monthly", value: "monthly" },
        { name: "Quarterly", value: "quarterly" },
        { name: "Annual", value: "annual" }
      ]
    };
  },
  methods: {
    async submitForm() {
      const newMember = {
        id: Date.now(),
        fullName: this.fullName,
        age: this.age,
        membershipStatus: this.membershipStatus,
        membershipType: this.membershipType,
        expirationDate: this.expirationDate,
        dni: this.dni,
        email: this.email,
        phone: this.phone,
        address: this.address,
        membershipStartDate: this.membershipStartDate,
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
  <div class="modal-overlay">
    <div class="modal-content">
      <h2 class="modal-title">Add New Member</h2>
      <form @submit.prevent="submitForm">
        <pv-inputtext v-model="fullName" placeholder="Full Name" class="input-field" required />
        <pv-inputtext v-model.number="age" placeholder="Age" type="number" class="input-field" required />
        <pv-select v-model="membershipStatus" :options="statusOptions" placeholder="Membership Status" option-label="name" option-value="value" class="input-field" required />
        <pv-select v-model="membershipType" :options="typeOptions" placeholder="Membership Type" option-label="name" option-value="value" class="input-field" required />
        <pv-datepicker v-model="expirationDate" placeholder="Expiration Date" class="input-field" required />
        <pv-datepicker v-model="membershipStartDate" placeholder="Membership Start Date" class="input-field" required />
        <pv-inputtext v-model="dni" placeholder="DNI" class="input-field" required />
        <pv-inputtext v-model="email" type="email" placeholder="Email" class="input-field" required />
        <pv-inputtext v-model="phone" type="tel" placeholder="Phone" class="input-field" required />
        <pv-inputtext v-model="address" placeholder="Address" class="input-field" required />
        <pv-inputtext v-model="profilePicture" type="url" placeholder="Profile Picture URL" class="input-field" required />

        <div class="actions">
          <pv-button label="Add" type="submit" class="add-button" />
          <pv-button label="Cancel" type="button" @click="$emit('close')" class="cancel-button" />
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
