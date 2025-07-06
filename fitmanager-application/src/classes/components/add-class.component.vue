<script>
import { ClassApiService } from "../services/class-api.service.js";
import api from "../../login/services/axios.config.js"; // ✅ Usa la instancia con token

export default {
  name: "AddClass",
  data() {
    return {
      name: "",
      description: "",
      capacity: "",
      type: "",
      date: "",
      time: "",
      duration: "",
      trainer_id: "",
      status: "",
      errors: {},
      touched: {},
      trainers: [],
      typeOptions: [
        {name: this.$t("classes.group"), value: "Group"},
        {name: this.$t("classes.solo"), value: "Solo"}
      ],
      timeOptions: [
        {name: "06:00", value: "06:00"},
        {name: "07:00", value: "07:00"},
        {name: "08:00", value: "08:00"},
        {name: "09:00", value: "09:00"},
        {name: "10:00", value: "10:00"},
        {name: "11:00", value: "11:00"},
        {name: "12:00", value: "12:00"},
        {name: "13:00", value: "13:00"},
        {name: "14:00", value: "14:00"},
        {name: "15:00", value: "15:00"},
        {name: "16:00", value: "16:00"},
        {name: "17:00", value: "17:00"},
        {name: "18:00", value: "18:00"},
        {name: "19:00", value: "19:00"},
        {name: "20:00", value: "20:00"},
        {name: "21:00", value: "21:00"},
        {name: "22:00", value: "22:00"}
      ],
      durationOptions: [
        {name: "45 min", value: "45 min"},
        {name: "60 min", value: "60 min"},
        {name: "90 min", value: "90 min"},
        {name: "120 min", value: "120 min"}

      ],
      statusOptions: [
        {name: this.$t("classes.confirmed"), value: "Confirmed"},
        {name: this.$t("classes.cancelled"), value: "Cancelled"},
        {name: this.$t("classes.pending"), value: "Pending"}
      ]
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

    validateField(field) {
      const value = this[field];
      if (!value) {
        this.errors[field] = this.$t(`validation.${field}_required`);
      } else {
        this.errors[field] = "";
      }
    },

    async fetchTrainers() {
      try {
        const response = await api.get(`/api/v1/Employee`);
        console.log("👀 Respuesta completa de /Employee:", response.data);

        const employees = Array.isArray(response.data?.data) ? response.data.data : [];
        console.log("📋 Lista cruda de empleados:", employees);

        this.trainers = employees.map(emp => {
          console.log("📦 Emp individual:", emp);
          return {
            name: `${emp.firstName ?? "?"} ${emp.lastName ?? "?"} (${emp.role ?? "?"})`,
            value: emp.id
          };
        });

        console.log("👨‍🏫 Opciones para selector:", this.trainers);
      } catch (err) {
        console.error("❌ Error fetching trainers:", err);
      }
    },

    async submitForm() {
      const fields = ["name", "type", "date", "time", "duration", "trainer_id", "status", "description", "capacity"];
      fields.forEach(this.touch);

      if (this.hasErrors) return;

      // Parse duration: convertir "45 min" => 45 (entero)
      const durationMinutes = parseInt(this.duration);

      // Combinar date y time para formar un DateTime ISO string
      // Por ejemplo: date = '2025-08-01', time = '08:00'
      const datePart = this.date instanceof Date
          ? this.date.toISOString().split("T")[0]
          : this.date;

      const startDate = datePart && this.time ? new Date(`${datePart}T${this.time}:00`) : null;
      const newClass = {
        Name: this.name,
        Description: this.description || "", // agregar campo descripción (puede ser un campo nuevo en data())
        Type: this.type,
        Capacity: this.capacity ? parseInt(this.capacity) : 0,  // agregar campo capacidad (nuevo también)
        StartDate: startDate ? startDate.toISOString() : null,
        Duration: durationMinutes,
        Status: this.status,
        EmployeeId: this.trainer_id // ajustar nombre de propiedad
      };

      console.log("📦 Payload que se enviará:", newClass);

      try {
        const service = new ClassApiService();
        await service.addClass(newClass);
        this.$emit("class-added");
        this.$emit("close");
      } catch (err) {
        console.error("❌ Error adding class:", err);
        if (err.response) {
          console.error("📨 Backend response:", err.response.data);
          console.error("❗ Detalle de errores de validación:", err.response.data.errors);
        }
      }
    }
,

  },
  mounted() {
    this.fetchTrainers();
  }
}
</script>

<template>
  <div class="modal-overlay" @click.self="$emit('close')" role="dialog" aria-modal="true" aria-labelledby="addClassTitle">
    <div class="modal-content">
      <h2 id="addClassTitle" class="modal-title">{{ $t('classes.add-class') }}</h2>
      <form @submit.prevent="submitForm">
        <pv-inputtext v-model="name" :placeholder="$t('classes.name')" class="input-field" @blur="touch('name')" />
        <small v-if="touched.name && errors.name" class="error">{{ errors.name }}</small>

        <!-- Descripción -->
        <pv-textarea v-model="description" @blur="touch('description')" :placeholder="$t('classes.description')" class="input-field" />
        <small v-if="touched.description && errors.description" class="error">{{ errors.description }}</small>



        <!-- Capacidad -->
        <pv-inputnumber
            v-model="capacity"
            :placeholder="$t('classes.capacity')"
            class="input-field"
            :min="1"
            @blur="touch('capacity')"
        />
        <small v-if="touched.capacity && errors.capacity" class="error">{{ errors.capacity }}</small>

        <pv-select v-model="type" :options="typeOptions" :placeholder="$t('classes.type')" option-label="name" option-value="value" class="input-field" @blur="touch('type')" />
        <small v-if="touched.type && errors.type" class="error">{{ errors.type }}</small>

        <pv-datepicker v-model="date" :placeholder="$t('classes.date')" class="input-field" @blur="touch('date')" />
        <small v-if="touched.date && errors.date" class="error">{{ errors.date }}</small>

        <pv-select v-model="time" :options="timeOptions" :placeholder="$t('classes.time')" option-label="name" option-value="value" class="input-field" @blur="touch('time')" />
        <small v-if="touched.time && errors.time" class="error">{{ errors.time }}</small>

        <pv-select v-model="duration" :options="durationOptions" :placeholder="$t('classes.duration')" option-label="name" option-value="value" class="input-field" @blur="touch('duration')" />
        <small v-if="touched.duration && errors.duration" class="error">{{ errors.duration }}</small>

        <pv-select
            v-model="trainer_id"
            :options="trainers"
            :placeholder="$t('classes.select-trainer')"
            option-label="name"
            option-value="value"
            class="input-field"
            @blur="touch('trainer_id')"
        />
        <small v-if="touched.trainer_id && errors.trainer_id" class="error">{{ errors.trainer_id }}</small>

        <pv-select v-model="status" :options="statusOptions" :placeholder="$t('classes.status')" option-label="name" option-value="value" class="input-field" @blur="touch('status')" />
        <small v-if="touched.status && errors.status" class="error">{{ errors.status }}</small>

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
