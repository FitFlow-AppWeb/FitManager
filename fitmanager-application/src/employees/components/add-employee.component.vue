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
      role: "",
      email: "",
      phone: "",
      address: "",
      specialties: [],
      newSpecialty: "",
      certifications: [],
      newCertification: "",
      errorMessage: "",
      existingDnis: [],
      existingEmails: [],
      touched: {},
      errors: {},
    };
  },
  computed: {
    hasErrors() {
      return Object.values(this.errors).some(Boolean);
    }
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
    touch(field) {
      this.touched[field] = true;
      this.validateField(field);
    },
    validateField(field) {
      const value = this[field];
      switch (field) {
        case "fullName":
          this.errors.fullName = !value ? "validation.fullName_required" :
              value.length > 100 ? "validation.fullName_tooLong" : "";
          break;
        case "age":
          this.errors.age = (!value || value < 16) ? "validation.age_min" : "";
          break;
        case "role":
          this.errors.role = !value ? "validation.role_required" :
              value.length > 100 ? "validation.role_tooLong" : "";
          break;
        case "hourlyWage":
          this.errors.hourlyWage = (value === null || value === "") ? "validation.wage_required" : "";
          break;
        case "hoursPerWeek":
          this.errors.hoursPerWeek = (value === null || value === "") ? "validation.hours_required" : "";
          break;
        case "dni":
          this.errors.dni = !/^\d{8}$/.test(value) ? "validation.dni_invalid" :
              this.existingDnis.includes(value) ? "validation.dni_taken" : "";
          break;
        case "email":
          this.errors.email = !/^\S+@\S+\.\S+$/.test(value) ? "validation.email_invalid" :
              this.existingEmails.includes(value) ? "validation.email_taken" : "";
          break;
        case "phone":
          this.errors.phone = !/^\d{9}$/.test(value) ? "validation.phone_invalid" : "";
          break;
        case "address":
          this.errors.address = !value ? "validation.address_required" :
              value.length > 200 ? "validation.address_tooLong" : "";
          break;
      }
    },
    async submitForm() {
      [
        "fullName", "age", "role", "hourlyWage", "hoursPerWeek",
        "dni", "email", "phone", "address"
      ].forEach(field => {
        this.touch(field);  // Marca como tocado y valida
      });
      if (this.hasErrors) return;

      const service = new EmployeeApiService();
      try {
        const newEmployee = {
          firstName: this.fullName.split(" ")[0] || "",
          lastName: this.fullName.split(" ").slice(1).join(" ") || "",
          age: Number(this.age),
          wage: Number(this.hourlyWage),
          workHours: Number(this.hoursPerWeek),
          dni: Number(this.dni),
          email: this.email,
          phoneNumber: Number(this.phone),
          address: this.address,
          role: this.role,
          password: "123456"
        };

        const response = await service.addEmployee(newEmployee);
        const employeeId = response.data.id;

        for (const spec of this.specialties) {
          await service.addSpecialty(spec, employeeId);
        }
        for (const cert of this.certifications) {
          await service.addCertification(cert, employeeId);
        }

        this.$emit("employee-added");
        this.$emit("close");
      } catch (error) {
        console.error("❌ Error durante la creación del empleado:", error);
        this.errorMessage = this.$t("validation.server_error");
      }
    }
  },
  async mounted() {
    const service = new EmployeeApiService();
    try {
      const employees = await service.getAllEmployees();
      this.existingDnis = employees.map(e => e.dni.toString());
      this.existingEmails = employees.map(e => e.email);
    } catch (e) {
      console.error("❌ Error obteniendo empleados para validación:", e);
    }
  }
};
</script>

<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h2 class="modal-title">{{ $t('employees.add-new-employee') }}</h2>
      <form @submit.prevent="submitForm">
        <pv-inputtext v-model="fullName" @blur="touch('fullName')" :placeholder="$t('employees.full-name')" class="input-field" />
        <p v-if="touched.fullName && errors.fullName" class="error">{{ $t(errors.fullName) }}</p>
        <pv-inputtext v-model.number="age" @blur="touch('age')" :placeholder="$t('employees.age')" type="number" class="input-field" />
        <p v-if="touched.age && errors.age" class="error">{{ $t(errors.age) }}</p>
        <pv-inputtext v-model="role" @blur="touch('role')" :placeholder="$t('employees.role')" class="input-field" />
        <p v-if="touched.role && errors.role" class="error">{{ $t(errors.role) }}</p>
        <pv-inputtext v-model.number="hourlyWage" @blur="touch('hourlyWage')" :placeholder="$t('employees.wage')" type="number" class="input-field" />
        <p v-if="touched.hourlyWage && errors.hourlyWage" class="error">{{ $t(errors.hourlyWage) }}</p>
        <pv-inputtext v-model.number="hoursPerWeek" @blur="touch('hoursPerWeek')" :placeholder="$t('employees.hours')" type="number" class="input-field" />
        <p v-if="touched.hoursPerWeek && errors.hoursPerWeek" class="error">{{ $t(errors.hoursPerWeek) }}</p>

        <!-- Especialidades -->
        <div class="input-field">
          <label>{{ $t('employees.specialities') }}</label>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <pv-inputtext v-model="newSpecialty" :placeholder="$t('employees.add-specialty')" aria-label="Specialty to add" />
            <pv-button icon="pi pi-plus" @click="addSpecialty" :label="$t('general.add')" class="add-button2"/>
          </div>
          <ul style="margin-top: 0.5rem; padding-left: 1rem;">
            <li v-for="(spec, index) in specialties" :key="'spec-' + index" style="margin-top: 0.25rem;">
              {{ spec }}
              <pv-button icon="pi pi-times" class="p-button-text p-button-sm" @click="removeSpecialty(index)" aria-label="Remove Specialty"/>
            </li>
          </ul>
        </div>

        <!-- Certificaciones -->
        <div class="input-field">
          <label>{{ $t('employees.certifications') }}</label>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <pv-inputtext v-model="newCertification" :placeholder="$t('employees.add-certification')" aria-label="Certification to add" />
            <pv-button icon="pi pi-plus" @click="addCertification" :label="$t('general.add')" class="add-button2" />
          </div>
          <ul style="margin-top: 0.5rem; padding-left: 1rem;">
            <li v-for="(cert, index) in certifications" :key="'cert-' + index" style="margin-top: 0.25rem;">
              {{ cert }}
              <pv-button icon="pi pi-times" class="p-button-text p-button-sm" @click="removeCertification(index)" aria-label="Remove Certification"/>
            </li>
          </ul>
        </div>

        <pv-inputtext v-model="dni" @blur="touch('dni')" placeholder="DNI" class="input-field" />
        <p v-if="touched.dni && errors.dni" class="error">{{ $t(errors.dni) }}</p>

        <pv-inputtext v-model="email" @blur="touch('email')" type="email" :placeholder="$t('employees.email')" class="input-field" />
        <p v-if="touched.email && errors.email" class="error">{{ $t(errors.email) }}</p>
        <pv-inputtext v-model="phone" @blur="touch('phone')" type="tel" :placeholder="$t('employees.phone')" class="input-field" />
        <p v-if="touched.phone && errors.phone" class="error">{{ $t(errors.phone) }}</p>
        <pv-inputtext v-model="address" @blur="touch('address')" :placeholder="$t('employees.address')" class="input-field" />
        <p v-if="touched.address && errors.address" class="error">{{ $t(errors.address) }}</p>

        <p v-if="errorMessage" class="text-red-600 mt-2">{{ errorMessage }}</p>


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

.error {
  color: red;
  font-size: 0.85rem;
  margin-top: -0.25rem;
  margin-bottom: 0.5rem;
}

</style>
