<script>
/**
 * Edit Employee Component
 *
 * This component allows users to edit the details of an existing employee. The form displays the employee's
 * current information, such as full name, age, hourly wage, role, certifications, and specialties. Users can modify
 * any of these details and submit the updated information.
 *
 * Upon submission, the updated employee data is sent to the backend through the `EmployeeApiService`, and the
 * component emits events indicating that the employee has been updated or the modal was closed.
 *
 * Author: Cassius Martel
 */
import axios from "axios";
import { EmployeeApiService } from "../services/employee-api.service.js";
import api from "../../login/services/axios.config.js";


const BASE_URL = import.meta.env.VITE_API_URL;

export default {
  name: "EditEmployee",
  props: {
    employee: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      fullName: `${this.employee.firstName} ${this.employee.lastName}`,
      age: this.employee.age,
      role: this.employee.role,
      hourlyWage: this.employee.wage,
      hoursPerWeek: this.employee.workHours,
      dni: this.employee.dni.toString(),
      email: this.employee.email,
      phone: this.employee.phoneNumber.toString(),
      address: this.employee.address,
      specialties: [...(this.employee.specialties || [])],
      certifications: [...(this.employee.certifications || [])],
      newSpecialty: '',
      newCertification: '',
      errorMessage: '',
      touched: {},
      errors: {},
      existingDnis: [],
      existingEmails: []
    };
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
    async fetchEmployees() {
      const service = new EmployeeApiService();
      try {
        const allEmployees = await service.getAllEmployees();
        const others = allEmployees.filter(e => e.id !== this.employee.id);
        this.existingDnis = others.map(e => e.dni.toString());
        this.existingEmails = others.map(e => e.email);
        console.log("📋 Dnis existentes:", this.existingDnis);
        console.log("📋 Emails existentes:", this.existingEmails);
      } catch (error) {
        console.error("❌ Error obteniendo empleados:", error);
      }
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
          this.errors.role = !value ? "validation.role_required" : "";
          break;
        case "hourlyWage":
          this.errors.hourlyWage = (value === null || value === "") ? "validation.wage_required" : "";
          break;
        case "hoursPerWeek":
          this.errors.hoursPerWeek = (value === null || value === "") ? "validation.hours_required" : "";
          break;
        case "dni":
          this.errors.dni = !/^\d{8}$/.test(value)
              ? "validation.dni_invalid"
              : this.existingDnis.includes(value)
                  ? "validation.dni_taken"
                  : "";
          console.log("👀 Validando DNI:", value);
          console.log("📋 Lista de Dnis:", this.existingDnis);
          break;
        case "email":
          this.errors.email = !/^\S+@\S+\.\S+$/.test(value)
              ? "validation.email_invalid"
              : this.existingEmails.includes(value)
                  ? "validation.email_taken"
                  : "";
          console.log("👀 Validando DNI:", value);
          console.log("📋 Lista de Dnis:", this.existingEmails);
          break;
        case "phone":
          this.errors.phone = !/^[0-9]{9}$/.test(value) ? "validation.phone_invalid" : "";
          break;
        case "address":
          this.errors.address = !value ? "validation.address_required" : "";
          break;
      }
    },
    async removeSpecialty(index) {
      const specialty = this.specialties[index];
      if (specialty.id) {
        try {
          console.log("🗑 Eliminando especialidad con ID:", specialty.id);
          await api.delete(`/api/v1/Specialties/${specialty.id}`);
        } catch (e) {
          console.error("❌ Error al eliminar especialidad:", e);
        }
      }
      this.specialties.splice(index, 1);
    },

    async removeCertification(index) {
      const certification = this.certifications[index];
      if (certification.id) {
        try {
          console.log("🗑 Eliminando certificación con ID:", certification.id);
          await api.delete(`/api/v1/Certifications/${certification.id}`);
        } catch (e) {
          console.error("❌ Error al eliminar certificación:", e);
        }
      }
      this.certifications.splice(index, 1);
    },

    addSpecialty() {
      const trimmed = this.newSpecialty.trim();
      if (trimmed && !this.specialties.some(s => s.name === trimmed)) {
        console.log("➕ Agregando especialidad:", trimmed);
        this.specialties.push({ name: trimmed });
        this.newSpecialty = '';
      }
    },
    addCertification() {
      const trimmed = this.newCertification.trim();
      if (trimmed && !this.certifications.some(c => c.name === trimmed)) {
        console.log("➕ Agregando certificación:", trimmed);
        this.certifications.push({ name: trimmed });
        this.newCertification = '';
      }
    },
    async submitForm() {
      ["fullName", "age", "role", "hourlyWage", "hoursPerWeek", "dni", "email", "phone", "address"]
          .forEach(field => this.touch(field));
      if (this.hasErrors) return;

      const service = new EmployeeApiService();
      try {
        const updated = {
          id: this.employee.id,
          firstName: this.fullName.split(" ")[0] || "",
          lastName: this.fullName.split(" ").slice(1).join(" ") || "NoLastName",
          age: Number(this.age),
          wage: Number(this.hourlyWage),
          workHours: Number(this.hoursPerWeek),
          dni: Number(this.dni),
          email: this.email,
          phoneNumber: Number(this.phone),
          address: this.address,
          role: this.role,
          password: this.employee.password || "123456"
        };

        console.log("📦 Payload enviado al backend:", updated);
        await service.updateEmployee(updated);

        for (const spec of this.specialties) {
          if (!spec.id) {
            console.log("📌 Agregando especialidad nueva:", spec.name);
            await service.addSpecialty(spec.name, this.employee.id);
          }
        }

        for (const cert of this.certifications) {
          if (!cert.id) {
            console.log("📌 Agregando certificación nueva:", cert.name);
            await service.addCertification(cert.name, this.employee.id);
          }
        }

        this.$emit("employee-updated");
        this.$emit("close");
      } catch (error) {
        console.error("❌ Error actualizando empleado:", error);
        this.errorMessage = this.$t("validation.server_error");
      }
    },

  },
  async mounted() {
    await this.fetchEmployees();
  }
};

</script>

<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h2 class="modal-title">{{ $t('employees.edit-employee') }}</h2>
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
            <pv-inputtext v-model="newSpecialty" :placeholder="$t('employees.add-specialty')" />
            <pv-button icon="pi pi-plus" @click="addSpecialty" :label="$t('general.add')" class="add-button2" />
          </div>
          <ul style="margin-top: 0.5rem; padding-left: 1rem;">
            <li v-for="(spec, index) in specialties" :key="'spec-' + index" style="margin-top: 0.25rem;">
              {{ spec.name }}
              <pv-button icon="pi pi-times" class="p-button-text p-button-sm" @click="removeSpecialty(index)" />
            </li>
          </ul>
        </div>

        <!-- Certificaciones -->
        <div class="input-field">
          <label>{{ $t('employees.certifications') }}</label>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <pv-inputtext v-model="newCertification" :placeholder="$t('employees.add-certification')" />
            <pv-button icon="pi pi-plus" @click="addCertification" :label="$t('general.add')" class="add-button2" />
          </div>
          <ul style="margin-top: 0.5rem; padding-left: 1rem;">
            <li v-for="(cert, index) in certifications" :key="'cert-' + index" style="margin-top: 0.25rem;">
              {{ cert.name }}
              <pv-button icon="pi pi-times" class="p-button-text p-button-sm" @click="removeCertification(index)" />
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
          <pv-button :label="$t('general.save')" type="submit" class="add-button" />
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
}
</style>
