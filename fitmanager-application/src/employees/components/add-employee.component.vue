<script>
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
        { name: "Cleaning", value: "cleaning" },
        { name: "Trainer", value: "trainer" },
        { name: "Group Instructor", value: "group instructor" },
        { name: "Reception", value: "Reception" }

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
        id: Date.now(),
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
      <h2 class="modal-title">Add New Employee</h2>
      <form @submit.prevent="submitForm">
        <pv-inputtext v-model="fullName" placeholder="Full Name" class="input-field" required />
        <pv-inputtext v-model.number="age" placeholder="Age" type="number" class="input-field" required />
        <pv-select v-model="role" :options="roleOptions" placeholder="Role" option-label="name" option-value="value" class="input-field" required />
        <pv-inputtext v-model.number="hourlyWage" placeholder="Hourly Wage" type="number" class="input-field" required />
        <pv-inputtext v-model.number="hoursPerWeek" placeholder="Hours Per Week" type="number" class="input-field" required />
        <div class="input-field">
          <label>Specialties</label>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <pv-inputtext v-model="newSpecialty" placeholder="Add Specialty" />
            <pv-button icon="pi pi-plus" @click="addSpecialty" label="Add"  class="add-button2"/>
          </div>
          <ul style="margin-top: 0.5rem; padding-left: 1rem;">
            <li v-for="(spec, index) in specialties" :key="'spec-' + index" style="margin-top: 0.25rem;">
              {{ spec }}
              <pv-button icon="pi pi-times" class="p-button-text p-button-sm" @click="removeSpecialty(index)" />
            </li>
          </ul>
        </div>

        <div class="input-field">
          <label>Certifications</label>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <pv-inputtext v-model="newCertification" placeholder="Add Certification"  />
            <pv-button icon="pi pi-plus" @click="addCertification" label="Add" class="add-button2" />
          </div>
          <ul style="margin-top: 0.5rem; padding-left: 1rem;">
            <li v-for="(cert, index) in certifications" :key="'cert-' + index" style="margin-top: 0.25rem;">
              {{ cert }}
              <pv-button icon="pi pi-times" class="p-button-text p-button-sm" @click="removeCertification(index)" />
            </li>
          </ul>
        </div>
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
