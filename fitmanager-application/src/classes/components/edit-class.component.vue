<!--
// Description: This code defines the `EditClass` component, which is used to edit the details of an existing class.
// The component receives `classData` as a prop, which contains the class to be edited. It initializes local state `localClassData` with the class data
// and provides methods for updating the class, closing the modal, and fetching the list of trainers. The component renders a form where the user can update the class's name,
// type, date, time, duration, trainer, and status. Upon submitting the form, the `updateClass` method is called to update the class data.
// Author: Cassius Martel
-->

<script>
import { ClassApiService } from "../services/class-api.service.js";
import api from "../../login/services/axios.config.js";

export default {
  name: "EditClass",
  props: {
    classData: Object,
  },
  data() {
    const rawStart = this.classData?.startDate ?? "";
    const [dateStr, timeStr] = rawStart.split("T");
    const [hours, minutes] = timeStr ? timeStr.split(":") : ["", ""];

    return {
      localClassData: {
        id: this.classData?.id ?? null,
        name: this.classData?.name ?? "",
        description: this.classData?.description ?? "",
        capacity: this.classData?.capacity ?? 0,
        type: this.classData?.type ?? "",
        date: dateStr ?? "",
        time: `${hours}:${minutes}` ?? "",
        duration: this.classData?.duration ? `${this.classData.duration} min` : "",
        trainer_id: this.classData?.trainer_id ?? this.classData?.employeeId ?? "",
        status: this.classData?.status ?? ""
      },
      trainers: [],
      errors: {},
      touched: {},
      statusOptions: [
        { name: this.$t("classes.confirmed"), value: "Confirmed" },
        { name: this.$t("classes.cancelled"), value: "Cancelled" },
        { name: this.$t("classes.pending"), value: "Pending" }
      ],
      typeOptions: [
        { name: this.$t("classes.group"), value: "Group" },
        { name: this.$t("classes.solo"), value: "Solo" }
      ],
      timeOptions: Array.from({ length: 17 }, (_, i) => {
        const hour = (6 + i).toString().padStart(2, '0');
        return { name: `${hour}:00`, value: `${hour}:00` };
      }),
      durationOptions: [45, 60, 90, 120].map(min => ({
        name: `${min} min`,
        value: `${min} min`
      }))
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
      const value = this.localClassData[field];
      if (!value) {
        this.errors[field] = this.$t(`validation.${field}_required`);
      } else {
        this.errors[field] = "";
      }
    },

    async fetchTrainers() {
      try {
        const response = await api.get("/api/v1/Employee");
        const employees = Array.isArray(response.data?.data) ? response.data.data : [];

        this.trainers = employees.map(emp => ({
          name: `${emp.firstName ?? "?"} ${emp.lastName ?? "?"}`,
          value: emp.id
        }));
      } catch (err) {
        console.error("❌ Error fetching trainers:", err);
      }
    },

    async updateClass() {
      const service = new ClassApiService();

      const datePart = this.localClassData.date instanceof Date
          ? this.localClassData.date.toLocaleDateString('sv-SE') // "YYYY-MM-DD" local
          : this.localClassData.date;

      const startDate = datePart && this.localClassData.time
          ? `${datePart}T${this.localClassData.time}:00`
          : null;

      console.log("📤 Fecha para envío (date):", datePart);
      console.log("📤 Hora para envío (time):", this.localClassData.time);
      console.log("📤 Resultado combinado (StartDate):", startDate);

      const updatedClass = {
        id: this.localClassData.id,
        Name: this.localClassData.name,
        Description: this.localClassData.description || "",
        Capacity: parseInt(this.localClassData.capacity) || 0,
        Type: this.localClassData.type,
        StartDate: startDate,
        Duration: parseInt(this.localClassData.duration),
        Status: this.localClassData.status,
        EmployeeId: this.localClassData.trainer_id
      };


      try {
        await service.updateClass(updatedClass);
        this.$emit("class-updated");
        this.closeModal();
      } catch (err) {
        console.error("❌ Error updating class:", err);
        if (err.response) {
        }
      }
    },

    closeModal() {
      this.$emit("close");
    }
  },

  mounted() {
    console.log("✏️ Datos precargados para editar:", this.classData);

    const startDate = new Date(this.classData.startDate);
    console.log("📥 Fecha original (desde backend):", this.classData.startDate);
    console.log("📥 Interpretada como Date:", startDate);
    console.log("📥 toISOString:", startDate.toISOString());
    console.log("📥 toLocaleString:", startDate.toLocaleString());
    console.log("📥 Fecha:", startDate.toLocaleDateString('sv-SE'));
    console.log("📥 Hora:", startDate.toTimeString().slice(0, 5));
    this.fetchTrainers();
  }
};
</script>


<template>
  <div class="modal-overlay" @click.self="closeModal" role="dialog" aria-modal="true" aria-labelledby="edit-class-dialog">
    <div class="modal-content">
      <h2 class="modal-title" id="edit-class-dialog">{{ $t('classes.edit-class') }}</h2>
      <form @submit.prevent="updateClass">

        <!-- Nombre -->
        <pv-inputtext
            v-model="localClassData.name"
            :placeholder="$t('classes.name')"
            class="input-field"
            @blur="touch('name')"
        />
        <small v-if="touched.name && errors.name" class="error">{{ errors.name }}</small>

        <!-- Descripción -->
        <pv-textarea
            v-model="localClassData.description"
            :placeholder="$t('classes.description')"
            class="input-field"
            @blur="touch('description')"
        />
        <small v-if="touched.description && errors.description" class="error">{{ errors.description }}</small>

        <!-- Capacidad -->
        <pv-inputnumber
            v-model="localClassData.capacity"
            :placeholder="$t('classes.capacity')"
            class="input-field"
            :min="1"
            @blur="touch('capacity')"
        />
        <small v-if="touched.capacity && errors.capacity" class="error">{{ errors.capacity }}</small>

        <!-- Tipo -->
        <pv-select
            v-model="localClassData.type"
            :options="typeOptions"
            :placeholder="$t('classes.type')"
            option-label="name"
            option-value="value"
            class="input-field"
            @blur="touch('type')"
        />
        <small v-if="touched.type && errors.type" class="error">{{ errors.type }}</small>

        <!-- Fecha -->
        <pv-datepicker
            v-model="localClassData.date"
            :placeholder="$t('classes.date')"
            class="input-field"
            @blur="touch('date')"
        />
        <small v-if="touched.date && errors.date" class="error">{{ errors.date }}</small>

        <!-- Hora -->
        <pv-select
            v-model="localClassData.time"
            :options="timeOptions"
            :placeholder="$t('classes.time')"
            option-label="name"
            option-value="value"
            class="input-field"
            @blur="touch('time')"
        />
        <small v-if="touched.time && errors.time" class="error">{{ errors.time }}</small>

        <!-- Duración -->
        <pv-select
            v-model="localClassData.duration"
            :options="durationOptions"
            :placeholder="$t('classes.duration')"
            option-label="name"
            option-value="value"
            class="input-field"
            @blur="touch('duration')"
        />
        <small v-if="touched.duration && errors.duration" class="error">{{ errors.duration }}</small>

        <!-- Entrenador -->
        <pv-select
            v-model="localClassData.trainer_id"
            :options="trainers"
            :placeholder="$t('classes.select-trainer')"
            option-label="name"
            option-value="value"
            class="input-field"
            @blur="touch('trainer_id')"
        />
        <small v-if="touched.trainer_id && errors.trainer_id" class="error">{{ errors.trainer_id }}</small>

        <!-- Estado -->
        <pv-select
            v-model="localClassData.status"
            :options="statusOptions"
            :placeholder="$t('classes.status')"
            option-label="name"
            option-value="value"
            class="input-field"
            @blur="touch('status')"
        />
        <small v-if="touched.status && errors.status" class="error">{{ errors.status }}</small>

        <!-- Botones -->
        <div class="actions">
          <pv-button :label="$t('classes.update')" type="submit" class="update-button" />
          <pv-button :label="$t('general.cancel')" type="button" @click="closeModal" class="cancel-button" />
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

.update-button {
  background-color: #A7D1D2;
  color: white;
  border: none;
  width: 100%;
  margin-top: 1rem;
}

.update-button:hover {
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
