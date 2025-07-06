<script>
/**
 * Edit Member Component
 *
 * This component renders a form that allows users to edit the details of an existing member.
 * It pre-populates the form with the current member's data and enables editing of personal,
 * contact, and membership-related fields.
 *
 * Upon submission, the updated information is sent to the backend via an API service,
 * and relevant events are emitted to inform the parent component of the update or cancellation.
 *
 * Author: Cassius Martel
 */

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
      editedMember: {},
      statusOptions: [
        { name: this.$t("members.active"), value: "Active" },
        { name: this.$t("members.inactive"), value: "Inactive" },
        { name: this.$t("members.pending"), value: "Pending" }
      ],
      typeOptions: [],
      errors: {},
      touched: {}
    };
  },
  computed: {
    hasErrors() {
      return Object.values(this.errors).some(Boolean);
    }
  },
  watch: {
    member: {
      immediate: true,
      handler(newVal) {
        if (!newVal) return;

        const [firstName, ...rest] = (newVal.fullName || "").trim().split(" ");
        const lastName = rest.join(" ");

        this.editedMember = {
          ...newVal,
          fullName: `${firstName} ${lastName}`.trim(),
          firstName,
          lastName,
          membershipType: null,
          membershipStatus: this.capitalizeFirstLetter(newVal.membershipStatus)
        };

        this.loadMembershipTypes();

      }
    }
  },
  methods: {
    capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    },
    async loadMembershipTypes() {
      try {
        const service = new MemberApiService();
        const types = await service.getMembershipTypes();
        this.typeOptions = types.map(t => ({
          name: t.name,
          value: t.id
        }));
        if (typeof this.member.membershipType === "string") {
          const match = this.typeOptions.find(opt => opt.name === this.member.membershipType);
          if (match) {
            this.editedMember.membershipType = match.value;
          }
        } else {
          this.editedMember.membershipType = this.member.membershipType;
        }
      } catch (error) {
        console.error("Error loading membership types:", error);
      }
    },
    touch(field) {
      this.touched[field] = true;
      this.validateField(field);
    },
    async validateField(field) {
      const value = this.editedMember[field];
      const service = new MemberApiService();

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
        case "membershipStatus":
          this.errors.membershipStatus = !value ? this.$t("validation.status_required") : "";
          break;
        case "membershipType":
          this.errors.membershipType = !value ? this.$t("validation.type_required") : "";
          break;
        case "expirationDate":
          this.errors.expirationDate = !value ? this.$t("validation.expiration_required") : "";
          break;
        case "membershipStartDate":
          this.errors.membershipStartDate = !value ? this.$t("validation.start_required") : "";
          break;
        case "dni":
          if (!/^[0-9]{8}$/.test(value)) {
            this.errors.dni = this.$t("validation.dni_invalid");
          } else {
            const exists = await service.getAllMembers();
            const conflict = exists.find(m => m.dni == value && m.id !== this.member.id);
            this.errors.dni = conflict ? this.$t("validation.dni_taken") : "";
          }
          break;
        case "email":
          if (!/\S+@\S+\.\S+/.test(value)) {
            this.errors.email = this.$t("validation.email_invalid");
          } else {
            const exists = await service.getAllMembers();
            const conflict = exists.find(m => m.email === value && m.id !== this.member.id);
            this.errors.email = conflict ? this.$t("validation.email_taken") : "";
          }
          break;
        case "phone":
          this.errors.phone = !/^[0-9]{9}$/.test(value) ? this.$t("validation.phone_invalid") : "";
          break;
        case "address":
          this.errors.address = !value ? this.$t("validation.address_required") : "";
          break;
      }
    },
    async submitForm() {
      const fields = [
        "fullName", "age", "membershipStatus", "membershipType",
        "expirationDate", "membershipStartDate", "dni", "email", "phone", "address"
      ];
      for (const field of fields) {
        await this.touch(field);
      }
      if (this.hasErrors) return;

      const [firstName, ...rest] = this.editedMember.fullName.trim().split(" ");
      const lastName = rest.join(" ") || "";

      const formattedStartDate = new Date(this.editedMember.membershipStartDate).toISOString();
      const formattedExpirationDate = new Date(this.editedMember.expirationDate).toISOString();

      const updatedMember = {
        id: this.editedMember.id,
        firstName,
        lastName,
        age: this.editedMember.age,
        dni: this.editedMember.dni,
        email: this.editedMember.email,
        phoneNumber: this.editedMember.phone,
        address: this.editedMember.address,
        startDate: formattedStartDate,
        endDate: formattedExpirationDate,
        status: this.editedMember.membershipStatus,
        membershipTypeId: this.editedMember.membershipType,
        profilePicture: this.editedMember.profilePicture || ""
      };

      try {
        const service = new MemberApiService();
        await service.updateMember(updatedMember);
        this.$emit("member-updated", updatedMember);
        this.$emit("close");
      } catch (error) {
        console.error("Error updating member:", error);
      }
    }
  }
};
</script>

<template>
  <div class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="editMemberTitle">
    <div class="modal-content">
      <h2 class="modal-title" id="editMemberTitle">{{ $t('members.edit-member') }}</h2>
      <form @submit.prevent="submitForm">
        <pv-inputtext
            v-model="editedMember.fullName"
            :placeholder="$t('members.full-name')"
            class="input-field"
            @blur="touch('fullName')"
        />
        <small v-if="touched.fullName && errors.fullName" class="error">{{ errors.fullName }}</small>

        <pv-inputtext
            v-model.number="editedMember.age"
            :placeholder="$t('members.age')"
            type="number"
            class="input-field"
            @blur="touch('age')"
        />
        <small v-if="touched.age && errors.age" class="error">{{ errors.age }}</small>

        <pv-select
            v-model="editedMember.membershipStatus"
            :options="statusOptions"
            option-label="name"
            option-value="value"
            class="input-field"
            @blur="touch('membershipStatus')"
        />
        <small v-if="touched.membershipStatus && errors.membershipStatus" class="error">{{ errors.membershipStatus }}</small>

        <pv-select
            v-model="editedMember.membershipType"
            :options="typeOptions"
            option-label="name"
            option-value="value"
            class="input-field"
            @blur="touch('membershipType')"
        />
        <small v-if="touched.membershipType && errors.membershipType" class="error">{{ errors.membershipType }}</small>

        <pv-datepicker
            v-model="editedMember.expirationDate"
            :placeholder="$t('members.expiration-date')"
            class="input-field"
            @blur="touch('expirationDate')"
        />
        <small v-if="touched.expirationDate && errors.expirationDate" class="error">{{ errors.expirationDate }}</small>

        <pv-datepicker
            v-model="editedMember.membershipStartDate"
            :placeholder="$t('members.start-date')"
            class="input-field"
            @blur="touch('membershipStartDate')"
        />
        <small v-if="touched.membershipStartDate && errors.membershipStartDate" class="error">{{ errors.membershipStartDate }}</small>

        <pv-inputtext
            v-model="editedMember.dni"
            placeholder="DNI"
            class="input-field"
            @blur="touch('dni')"
        />
        <small v-if="touched.dni && errors.dni" class="error">{{ errors.dni }}</small>

        <pv-inputtext
            v-model="editedMember.email"
            type="email"
            :placeholder="$t('members.email')"
            class="input-field"
            @blur="touch('email')"
        />
        <small v-if="touched.email && errors.email" class="error">{{ errors.email }}</small>

        <pv-inputtext
            v-model="editedMember.phone"
            type="tel"
            :placeholder="$t('members.phone')"
            class="input-field"
            @blur="touch('phone')"
        />
        <small v-if="touched.phone && errors.phone" class="error">{{ errors.phone }}</small>

        <pv-inputtext
            v-model="editedMember.address"
            :placeholder="$t('members.address')"
            class="input-field"
            @blur="touch('address')"
        />
        <small v-if="touched.address && errors.address" class="error">{{ errors.address }}</small>

        <div class="actions" role="group" aria-label="Form actions">
          <pv-button :label="$t('members.save')" type="submit" class="add-button" />
          <pv-button :label="$t('members.cancel')" type="button" @click="$emit('close')" class="cancel-button" />
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

.error {
  color: red;
  font-size: 0.85rem;
  margin-top: -0.25rem;
  margin-bottom: 0.5rem;
}



</style>
