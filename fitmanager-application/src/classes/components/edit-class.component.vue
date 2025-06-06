<!--
// Description: This code defines the `EditClass` component, which is used to edit the details of an existing class.
// The component receives `classData` as a prop, which contains the class to be edited. It initializes local state `localClassData` with the class data
// and provides methods for updating the class, closing the modal, and fetching the list of trainers. The component renders a form where the user can update the class's name,
// type, date, time, duration, trainer, and status. Upon submitting the form, the `updateClass` method is called to update the class data.
// Author: Cassius Martel
-->

<script>
import { ClassApiService } from "../services/class-api.service.js";
import axios from "axios";

export default {
  name: "EditClass",
  props: {
    classData: Object,
  },
  data() {
    return {
      localClassData: { ...this.classData },
      trainers: [],
      statusOptions: [
        { name: this.$t("classes.confirmed"), value: "Confirmed" },
        { name: this.$t("classes.cancelled"), value: "Cancelled" },
        { name: this.$t("classes.pending"), value: "Pending" }
      ],
      typeOptions: [
        { name: this.$t("classes.group"), value: "Group" },
        { name: this.$t("classes.solo"), value: "Solo" }
      ],
      timeOptions: [
        { name: "06:00", value: "06:00" },
        { name: "07:00", value: "07:00" },
        { name: "08:00", value: "08:00" },
        { name: "09:00", value: "09:00" },
        { name: "10:00", value: "10:00" },
        { name: "11:00", value: "11:00" },
        { name: "12:00", value: "12:00" },
        { name: "13:00", value: "13:00" },
        { name: "14:00", value: "14:00" },
        { name: "15:00", value: "15:00" },
        { name: "16:00", value: "16:00" },
        { name: "17:00", value: "17:00" },
        { name: "18:00", value: "18:00" },
        { name: "19:00", value: "19:00" },
        { name: "20:00", value: "20:00" },
        { name: "21:00", value: "21:00" },
        { name: "22:00", value: "22:00" },
        { name: "23:00", value: "23:00" }
      ],
      durationOptions: [
        { name: "30 min", value: "30 min" },
        { name: "45 min", value: "45 min" },
        { name: "60 min", value: "60 min" },
        { name: "75 min", value: "75 min" },
        { name: "90 min", value: "90 min" },
        { name: "105 min", value: "105 min" },
        { name: "120 min", value: "120 min" },
        { name: "135 min", value: "135 min" },
        { name: "150 min", value: "150 min" },
        { name: "165 min", value: "165 min" },
        { name: "180 min", value: "180 min" }
      ]
    };
  },
  methods: {
    async updateClass() {
      const service = new ClassApiService();
      await service.updateClass(this.localClassData); // Actualiza la clase con los nuevos datos

      this.$emit("class-updated"); // Notifica al componente padre
      this.closeModal(); // Cierra el modal
    },
    closeModal() {
      this.$emit("close"); // Notifica que el modal debe cerrarse
    },
    async fetchTrainers() {
      try {
        const response = await axios.get("https://fitmanager.onrender.com/employees");
        this.trainers = response.data
            .filter(emp => emp.role === "group instructor" || emp.role === "trainer")
            .map(emp => ({ name: emp.fullName, value: emp.id }));
      } catch (error) {
        console.error("Error fetching trainers:", error);
      }
    }
  },
  mounted() {
    this.fetchTrainers();
  }
};
</script>

<template>
  <div class="modal-overlay" @click.self="closeModal" aria-labelledby="edit-class-dialog">
    <div class="modal-content">
      <h2 class="modal-title" id="edit-class-dialog">{{ $t('classes.edit-class') }}</h2>
      <form @submit.prevent="updateClass">
        <pv-inputtext v-model="localClassData.name" :placeholder="$t('classes.name')" class="input-field" required aria-label="Class Name" />
        <pv-select v-model="localClassData.type" :options="typeOptions" :placeholder="$t('classes.type')" option-label="name" option-value="value" class="input-field" required aria-label="Class Type" />
        <pv-datepicker v-model="localClassData.date" :placeholder="$t('classes.date')" class="input-field" required aria-label="Class Date" />
        <pv-select
            v-model="localClassData.time"
            :options="timeOptions"
            :placeholder="$t('classes.time')"
            option-label="name"
            option-value="value"
            class="input-field"
            required
            aria-label="Class Time"
        />

        <pv-select
            v-model="localClassData.duration"
            :options="durationOptions"
            :placeholder="$t('classes.duration')"
            option-label="name"
            option-value="value"
            class="input-field"
            required
            aria-label="Class Duration"
        />
        <pv-select
            v-model="localClassData.trainer_id"
            :options="trainers"
            :placeholder="$t('classes.select-trainer')"
            option-label="name"
            option-value="value"
            class="input-field"
            required
            aria-label="Select Trainer"
        />
        <pv-select v-model="localClassData.status" :options="statusOptions" :placeholder="$t('classes.status')" option-label="name" option-value="value" class="input-field" required aria-label="Class Status" />

        <div class="actions">
          <pv-button :label="$t('classes.update')" type="submit" class="update-button" aria-label="Update Class" />
          <pv-button :label="$t('general.cancel')" type="button" @click="closeModal" class="cancel-button" aria-label="Cancel" />
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

</style>
