<script>
/**
 * Add Employee Component
 *
 * This component is used to display a form for adding a new employee to the system. It allows the user
 * to input details such as the employee's full name, age, role, hourly wage, working hours, certifications,
 * specialties, and contact information. The form also includes functionality for adding/removing specialties and certifications.
 *
 * Upon form submission, a new employee is created and sent to the backend through the `EmployeeApiService`.
 * The component emits events for successful addition or cancellation of the process.
 *
 * Author: Cassius Martel
 */

import { EmployeeApiService } from "../services/employee-api.service.js";

export default {
  name: "AddEmployee",
  data() {
    return {
      fullName: "",
      age: null,
      hourlyWage: "",
      hoursPerWeek: "",
      dni: "",
      role:"",
      email: "",
      phone: "",
      address: "",
      profilePicture: "",
      roleOptions: [
        { name: this.$t('employees.cleaning'), value: "cleaning" },
        { name: this.$t('employees.trainer'), value: "trainer" },
        { name: this.$t('employees.group-instructor'), value: "group instructor" },
        { name: this.$t('employees.reception'), value: "Reception" }
      ],
      specialties: [],
      newSpecialty: "",
      certifications: [],
      newCertification: ""
    };
  },
  methods: {
    addSpecialty() {
      const trimmed = this.newSpecialty.trim();
      if (trimmed && !this.specialties.includes(trimmed)) {
        this.specialties.push(trimmed);
        this.newSpecialty = "";
      }
    },
    removeSpecialty(index) {
      this.specialties.splice(index, 1);
    },
    addCertification() {
      const trimmed = this.newCertification.trim();
      if (trimmed && !this.certifications.includes(trimmed)) {
        this.certifications.push(trimmed);
        this.newCertification = "";
      }
    },
    removeCertification(index) {
      this.certifications.splice(index, 1);
    },
    async submitForm() {
      const newEmployee = {
        fullName: this.fullName,
        age: this.age,
        hourlyWage: this.hourlyWage,
        hoursPerWeek: this.hoursPerWeek,
        dni: this.dni,
        email: this.email,
        phone: this.phone,
        address: this.address,
        profilePicture: this.profilePicture,
        role: this.role,
        specialties: this.specialties,
        certifications: this.certifications
      };

      const service = new EmployeeApiService();
      await service.addEmployee(newEmployee);
      this.$emit("employee-added");
      this.$emit("close");
    }
  }
};
</script>

<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h2 class="modal-title">{{ $t('employees.add-new-employee') }}</h2>
      <form @submit.prevent="submitForm">
        <pv-inputtext v-model="fullName" :placeholder="$t('employees.full-name')" class="input-field" required aria-label="Full Name" />
        <pv-inputtext v-model.number="age" :placeholder="$t('employees.age')" type="number" class="input-field" required aria-label="Age" />
        <pv-select v-model="role" :options="roleOptions" :placeholder="$t('employees.role')" option-label="name" option-value="value" class="input-field" required aria-label="Role" />
        <pv-inputtext v-model.number="hourlyWage" :placeholder="$t('employees.wage')" type="number" class="input-field" required aria-label="Hourly Wage" />
        <pv-inputtext v-model.number="hoursPerWeek" :placeholder="$t('employees.hours')" type="number" class="input-field" required aria-label="Hours per Week" />
        <div class="input-field">
          <label>{{ $t('employees.specialities') }}</label>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <pv-inputtext v-model="newSpecialty" :placeholder="$t('employees.add-specialty')" aria-label="Specialty to add" />
            <pv-button icon="pi pi-plus" @click="addSpecialty" :label="$t('general.add')"  class="add-button2"/>
          </div>
          <ul style="margin-top: 0.5rem; padding-left: 1rem;">
            <li v-for="(spec, index) in specialties" :key="'spec-' + index" style="margin-top: 0.25rem;">
              {{ spec }}
              <pv-button icon="pi pi-times" class="p-button-text p-button-sm" @click="removeSpecialty(index)" aria-label="Remove Specialty"/>
            </li>
          </ul>
        </div>

        <div class="input-field">
          <label>{{ $t('employees.certifications') }}</label>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <pv-inputtext v-model="newCertification" :placeholder="$t('employees.add-certification')"  aria-label="Certification to add" />
            <pv-button icon="pi pi-plus" @click="addCertification" label="Add" class="add-button2" />
          </div>
          <ul style="margin-top: 0.5rem; padding-left: 1rem;">
            <li v-for="(cert, index) in certifications" :key="'cert-' + index" style="margin-top: 0.25rem;">
              {{ cert }}
              <pv-button icon="pi pi-times" class="p-button-text p-button-sm" @click="removeCertification(index)" aria-label="Remove Certification"/>
            </li>
          </ul>
        </div>
        <pv-inputtext v-model="dni" placeholder="DNI" class="input-field" required aria-label="DNI" />
        <pv-inputtext v-model="email" type="email" :placeholder="$t('employees.email')" class="input-field" required aria-label="Email" />
        <pv-inputtext v-model="phone" type="tel" :placeholder="$t('employees.phone')" class="input-field" required aria-label="Phone" />
        <pv-inputtext v-model="address" :placeholder="$t('employees.address')" class="input-field" required aria-label="Address" />
        <pv-inputtext v-model="profilePicture" type="url" :placeholder="$t('employees.profile-picture')" class="input-field" required aria-label="Profile Picture URL" />

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

.add-button2 {
  background-color: #A7D1D2;
  color: white;
  border: none;
  width: 50%;
  margin-top: 1rem;
}



.add-button:hover {
  background-color: #8FBFC0 !important;
  border-color: #8FBFC0 !important;
}
.add-button2:hover {
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
