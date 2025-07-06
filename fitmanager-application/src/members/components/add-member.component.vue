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

import { MemberApiService } from '../services/member-api.service.js';
const BASE_URL = import.meta.env.VITE_API_URL;

export default {
  name: "AddMember",
  data() {
    return {
      fullName: "",
      age: null,
      membershipStatus: "",
      membershipType: null,
      expirationDate: "",
      dni: "",
      email: "",
      phone: "",
      address: "",
      membershipStartDate: "",
      profilePicture: "",
      typeOptions: [],
      statusOptions: [
        { name: this.$t("members.active"), value: "Active" },
        { name: this.$t("members.inactive"), value: "Inactive" },
        { name: this.$t("members.pending"), value: "Pending" }
      ],
      errors: {},
      touched: {},
      allMembers: []
    };
  },

  async mounted() {
    try {
      const service = new MemberApiService();

      const types = await service.getMembershipTypes();
      this.typeOptions = types.map(t => ({
        name: t.name,
        value: t.id
      }));

      this.allMembers = await service.getAllMembers();
    } catch (err) {
      console.error("❌ Error fetching data:", err);
    }
  },

  computed: {
    hasErrors() {
      return Object.values(this.errors).some(Boolean);
    }
  },

  methods: {
    touch(field) {
      this.touched[field] = true;
      this.validateField(field);
    },

    validateField(field) {
      const value = this[field];
      switch (field) {
        case "fullName":
          if (!value) {
            this.errors.fullName = this.$t("validation.fullName_required");
          } else {
            const parts = value.trim().split(/\s+/);
            if (parts.length < 2) {
              this.errors.fullName = this.$t("validation.fullName_min_two_words");
            } else {
              this.errors.fullName = "";
            }
          }
          break;
        case "age":
          this.errors.age = value === null ? this.$t("validation.age_required") : "";
          break;
        case "dni":
          if (!/^\d{8}$/.test(value)) {
            this.errors.dni = this.$t("validation.dni_invalid");
          } else if (this.allMembers.some(m => m.dni === Number(value))) {
            this.errors.dni = this.$t("validation.dni_taken");
          } else {
            this.errors.dni = "";
          }
          break;
        case "email":
          if (!/\S+@\S+\.\S+/.test(value)) {
            this.errors.email = this.$t("validation.email_invalid");
          } else if (this.allMembers.some(m => m.email === value)) {
            this.errors.email = this.$t("validation.email_taken");
          } else {
            this.errors.email = "";
          }
          break;
        case "phone":
          this.errors.phone = !/^\d{9}$/.test(value) ? this.$t("validation.phone_invalid") : "";
          break;
        case "address":
          this.errors.address = !value ? this.$t("validation.address_required") : "";
          break;
        case "membershipStatus":
          this.errors.membershipStatus = !value ? this.$t("validation.status_required") : "";
          break;
        case "membershipType":
          this.errors.membershipType = !value ? this.$t("validation.type_required") : "";
          break;
        case "membershipStartDate":
          this.errors.membershipStartDate = !value ? this.$t("validation.startDate_required") : "";
          break;
        case "expirationDate":
          this.errors.expirationDate = !value ? this.$t("validation.expiration_required") : "";
          break;
      }
    },

    async submitForm() {
      const fields = [
        "fullName", "age", "dni", "email", "phone", "address",
        "membershipStatus", "membershipType", "membershipStartDate", "expirationDate"
      ];

      fields.forEach(this.touch);

      if (this.hasErrors) return;

      const [firstName, ...rest] = this.fullName.trim().split(' ');
      const lastName = rest.join(' ') || "";

      const formattedExpirationDate = new Date(this.expirationDate).toISOString();
      const formattedStartDate = new Date(this.membershipStartDate).toISOString();

      const newMember = {
        firstName,
        lastName,
        age: this.age,
        dni: Number(this.dni),
        phoneNumber: Number(this.phone),
        address: this.address,
        email: this.email,
        startDate: formattedStartDate,
        endDate: formattedExpirationDate,
        status: this.membershipStatus,
        membershipTypeId: this.membershipType
      };

      try {
        const service = new MemberApiService();
        await service.addMember(newMember);
        this.$emit("member-added");
        this.$emit("close");
      } catch (error) {
        console.error("❌ Error adding member:", error);
      }
    }
  }
};
</script>

<template>
  <div class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="addMemberTitle">
    <div class="modal-content">
      <h2 id="addMemberTitle" class="modal-title">{{ $t('members.add-new-member') }}</h2>
      <form @submit.prevent="submitForm">
        <pv-inputtext v-model="fullName" :placeholder="$t('members.full-name')" class="input-field" @blur="touch('fullName')" />
        <small v-if="touched.fullName && errors.fullName" class="error">{{ $t(errors.fullName) }}</small>

        <pv-inputtext v-model.number="age" :placeholder="$t('members.age')" type="number" class="input-field" @blur="touch('age')" />
        <small v-if="touched.age && errors.age" class="error">{{ $t(errors.age) }}</small>

        <pv-select v-model="membershipStatus" :options="statusOptions" :placeholder="$t('members.membership-status')" option-label="name" option-value="value" class="input-field" @blur="touch('membershipStatus')" />
        <small v-if="touched.membershipStatus && errors.membershipStatus" class="error">{{ $t(errors.membershipStatus) }}</small>

        <pv-select v-model="membershipType" :options="typeOptions" :placeholder="$t('members.membership-type')" option-label="name" option-value="value" class="input-field" @blur="touch('membershipType')" />
        <small v-if="touched.membershipType && errors.membershipType" class="error">{{ $t(errors.membershipType) }}</small>

        <pv-datepicker v-model="expirationDate" :placeholder="$t('members.expiration-date')" class="input-field" @blur="touch('expirationDate')" />
        <small v-if="touched.expirationDate && errors.expirationDate" class="error">{{ $t(errors.expirationDate) }}</small>

        <pv-datepicker v-model="membershipStartDate" :placeholder="$t('members.start-date')" class="input-field" @blur="touch('membershipStartDate')" />
        <small v-if="touched.membershipStartDate && errors.membershipStartDate" class="error">{{ $t(errors.membershipStartDate) }}</small>

        <pv-inputtext v-model="dni" placeholder="DNI" class="input-field" @blur="touch('dni')" />
        <small v-if="touched.dni && errors.dni" class="error">{{ $t(errors.dni) }}</small>

        <pv-inputtext v-model="email" type="email" :placeholder="$t('members.email')" class="input-field" @blur="touch('email')" />
        <small v-if="touched.email && errors.email" class="error">{{ $t(errors.email) }}</small>

        <pv-inputtext v-model="phone" type="tel" :placeholder="$t('members.phone')" class="input-field" @blur="touch('phone')" />
        <small v-if="touched.phone && errors.phone" class="error">{{ $t(errors.phone) }}</small>

        <pv-inputtext v-model="address" :placeholder="$t('members.address')" class="input-field" @blur="touch('address')" />
        <small v-if="touched.address && errors.address" class="error">{{ $t(errors.address) }}</small>

        <div class="actions">
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
.error {
  color: red;
  font-size: 0.85rem;
  margin-top: -0.25rem;
  margin-bottom: 0.5rem;
}


</style>
