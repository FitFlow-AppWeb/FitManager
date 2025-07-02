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
      typeOptions: []
    };
  },
  watch: {
    member: {
      immediate: true,
      handler(newVal) {
        if (!newVal) return;

        this.editedMember = {
          ...newVal,
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
    async submitForm() {
      const [firstName, ...rest] = this.editedMember.fullName.trim().split(" ");
      const lastName = rest.join(" ") || "";

      const formattedStartDate = this.editedMember.membershipStartDate instanceof Date
          ? this.editedMember.membershipStartDate.toISOString()
          : new Date(this.editedMember.membershipStartDate).toISOString();

      const formattedExpirationDate = this.editedMember.expirationDate instanceof Date
          ? this.editedMember.expirationDate.toISOString()
          : new Date(this.editedMember.expirationDate).toISOString();

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
        profilePicture: "https://i.imgur.com/jVyXxXV.jpg"
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
      <form @submit.prevent="submitForm" aria-describedby="editMemberDesc">
        <pv-inputtext
            v-model="editedMember.fullName"
            :placeholder="$t('members.full-name')"
            class="input-field"
            required
            aria-label="Full name"
        />
        <pv-inputtext
            v-model.number="editedMember.age"
            :placeholder="$t('members.age')"
            type="number"
            class="input-field"
            required
            aria-label="Age"
        />
        <pv-select
            v-model="editedMember.membershipStatus"
            :options="statusOptions"
            option-label="name"
            option-value="value"
            :label="$t('members.status')"
            class="input-field"
            required
            aria-label="Membership status"
        />
        <pv-select
            v-model="editedMember.membershipType"
            :options="typeOptions"
            option-label="name"
            option-value="value"
            :label="$t('members.type')"
            class="input-field"
            required
            aria-label="Membership type"
        />
        <pv-datepicker
            v-model="editedMember.expirationDate"
            :placeholder="$t('members.expiration-date')"
            class="input-field"
            required
            aria-label="Expiration date"
        />
        <pv-datepicker
            v-model="editedMember.membershipStartDate"
            :placeholder="$t('members.start-date')"
            class="input-field"
            required
            aria-label="Start date"
        />
        <pv-inputtext
            v-model="editedMember.dni"
            placeholder="DNI"
            class="input-field"
            required
            aria-label="DNI"
        />
        <pv-inputtext
            v-model="editedMember.email"
            type="email"
            :placeholder="$t('members.email')"
            class="input-field"
            required
            aria-label="Email"
        />
        <pv-inputtext
            v-model="editedMember.phone"
            type="tel"
            :placeholder="$t('members.phone')"
            class="input-field"
            required
            aria-label="Phone"
        />
        <pv-inputtext
            v-model="editedMember.address"
            :placeholder="$t('members.address')"
            class="input-field"
            required
            aria-label="Address"
        />
        <input type="hidden" v-model="editedMember.profilePicture" />


        <div class="actions" role="group" aria-label="Form actions">
          <pv-button
              :label="$t('members.save')"
              type="submit"
              class="add-button"
              aria-label="Save changes"
          />
          <pv-button
              :label="$t('members.cancel')"
              type="button"
              @click="$emit('close')"
              class="cancel-button"
              aria-label="Cancel editing"
          />
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
