<script>
import api from '../../login/services/api.js';


export default {
  name: "ViewMembers",
  data() {
    return {
      members: [],
      allMembers: [],
      attendanceStatus: {}
    };
  },
  props: {
    classData: {
      type: Object,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    /**
     * Helper function to parse and reformat a date string into a Date object or YYYY-MM-DD string.
     * It handles DD/MM/YYYY or D/M/YYYY and attempts to parse other formats.
     * @param {string} dateString The date string to reformat (e.g., '29/6/2025', '2025-06-29').
     * @param {string} [timeString='00:00'] Optional time string (HH:MM) to combine with the date.
     * @returns {Date|string|null} A Date object if timeString is provided, YYYY-MM-DD string if not, or null on failure.
     */
    reformatDate(dateString, timeString = '00:00') {
      if (!dateString) {
        return null;
      }

      let year, month, day;

      // Check if it's already in YYYY-MM-DD format (or similar parsable by Date constructor)
      // This is the preferred input format.
      if (dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {
        [year, month, day] = dateString.split('-');
      } else {
        // Attempt to parse DD/MM/YYYY or D/M/YYYY
        const parts = dateString.split('/');
        if (parts.length === 3) {
          day = String(parts[0]).padStart(2, '0');
          month = String(parts[1]).padStart(2, '0'); // Month is 0-indexed in Date object, but 1-indexed from input
          year = parts[2];
        } else {
          // Fallback: Try to parse as is, might be an ISO string or another valid format
          try {
            const d = new Date(dateString);
            if (!isNaN(d.getTime())) {
              year = d.getFullYear();
              month = String(d.getMonth() + 1).padStart(2, '0');
              day = String(d.getDate()).padStart(2, '0');
            } else {
              console.warn("Could not reliably parse dateString:", dateString);
              return null;
            }
          } catch (e) {
            console.error("Error parsing dateString:", dateString, e);
            return null;
          }
        }
      }

      if (!year || !month || !day) {
        return null; // Ensure we have all parts
      }

      const datePartISO = `${year}-${month}-${day}`;
      const fullDateTimeString = `${datePartISO}T${timeString}:00`; // Always add seconds '00'

      try {
        const d = new Date(fullDateTimeString);
        if (!isNaN(d.getTime())) {
          return d; // Return a Date object if a timeString was intended for precise timestamp
        } else {
          // If the Date object is invalid even after reconstruction, return just the date part string
          return datePartISO;
        }
      } catch (e) {
        console.error("Error creating Date object from combined string:", fullDateTimeString, e);
        return datePartISO; // Return just the date part as string if Date object creation fails
      }
    },

    closeDialog() {
      this.$emit("close");
    },

    async fetchAllMembers() {
      try {
        const response = await api.get('/api/v1/Member');
        if (response.data && Array.isArray(response.data.data)) {
          this.allMembers = response.data.data;
          console.log("Todos los miembros cargados:", this.allMembers);
        } else {
          console.warn("La respuesta de todos los miembros no es un array o está vacía:", response.data);
          this.allMembers = [];
        }
      } catch (error) {
        console.error("Error al cargar todos los miembros:", error);
        this.allMembers = [];
      }
    },

    async getMembersByClass() {
      this.members = [];
      this.attendanceStatus = {};

      if (!this.classData || !this.classData.id) {
        console.warn("No classData or classId available to fetch members.");
        return;
      }

      if (this.allMembers.length === 0) {
        await this.fetchAllMembers();
        if (this.allMembers.length === 0) {
          console.warn("No se pudieron cargar todos los miembros para filtrar.");
          return;
        }
      }

      try {
        const bookingsResponse = await api.get(`/api/v1/Bookings/class/${this.classData.id}`);
        console.log("Respuesta backend bookings:", bookingsResponse);

        const bookingData = bookingsResponse.data.data;

        if (!Array.isArray(bookingData) || bookingData.length === 0) {
          console.warn("No bookings found for this class or data is not an array:", bookingData);
          this.members = [];
          return;
        }

        const memberIds = [...new Set(bookingData.map(booking => booking.memberId))];

        if (memberIds.length === 0) {
          console.warn("No member IDs found in bookings.");
          this.members = [];
          return;
        }

        const fetchedMembers = memberIds.map(memberId => {
          const memberData = this.allMembers.find(member => member.id === memberId);

          if (memberData) {
            return {
              id: memberData.id,
              fullName: `${memberData.firstName || ''} ${memberData.lastName || ''}`.trim(),
              age: memberData.age,
              membershipStatus: memberData.membershipStatus?.status || 'N/A',
              membershipType: memberData.membershipStatus?.membershipType?.name || 'N/A',
              // Assuming endDate from API is already an ISO string or parsable by Date
              expirationDate: memberData.membershipStatus?.endDate ? new Date(memberData.membershipStatus.endDate).toLocaleDateString() : 'N/A',
              email: memberData.email,
              phone: memberData.phoneNumber,
              address: memberData.address
            };
          } else {
            console.warn(`Miembro con ID ${memberId} no encontrado en la lista de todos los miembros.`);
            return null;
          }
        });

        this.members = fetchedMembers.filter(member => member !== null);
        console.log("Miembros cargados para la clase:", this.members);

        await this.checkExistingAttendances();

      } catch (error) {
        console.error("Error fetching class bookings or filtering members:", error);
        this.members = [];
      }
    },

    async checkExistingAttendances() {
      if (!this.classData || !this.classData.id || this.members.length === 0) {
        return;
      }

      // We only need YYYY-MM-DD for the 'date' query parameter
      const classDateObj = this.reformatDate(this.classData.date); // This returns a Date object now
      console.log('Original classData.date:', this.classData.date);
      console.log('Processed classDateObj for attendance check:', classDateObj);

      if (!classDateObj || isNaN(classDateObj.getTime())) {
        console.error("No se pudo formatear o la fecha de la clase es inválida para la verificación de asistencia.");
        this.$toast.add({
          severity: 'error',
          summary: 'Error de fecha',
          detail: 'La fecha de la clase no es válida para verificar asistencia.',
          life: 5000
        });
        return;
      }

      const formattedClassDate = classDateObj.getFullYear() + '-' +
          String(classDateObj.getMonth() + 1).padStart(2, '0') + '-' +
          String(classDateObj.getDate()).padStart(2, '0');

      for (const member of this.members) {
        try {
          console.log('memberId:', member.id, ', classId:', this.classData.id, ', date:', formattedClassDate);
          const response = await api.get(`/api/v1/Attendances/exists?memberId=${member.id}&classId=${this.classData.id}&date=${formattedClassDate}`);
          console.log('Attendance check response:', response);
          this.attendanceStatus[member.id] = response.data.exists;

        } catch (error) {
          console.error(`Error al verificar la asistencia para el miembro ${member.id}:`, error);
          this.attendanceStatus[member.id] = false;
        }
      }
      console.log("Estado de asistencia verificado:", this.attendanceStatus);
    },

    async markAttendance(memberId) {
      try {
        this.attendanceStatus[memberId] = true;

        const classTimePart = this.classData.time && this.classData.time.match(/^\d{2}:\d{2}$/) ? this.classData.time : '00:00';

        // Use the reformatDate helper to get a full Date object combining date and time
        const entryDateLocal = this.reformatDate(this.classData.date, classTimePart);

        console.log('Original classData.date:', this.classData.date, 'classData.time:', this.classData.time);
        console.log('Processed entryDateLocal (Date object):', entryDateLocal);

        if (!entryDateLocal || isNaN(entryDateLocal.getTime())) {
          console.error("ERROR: entryDateLocal es un objeto Date inválido después de formatear y combinar.", this.classData.date, classTimePart);
          this.$toast.add({
            severity: 'error',
            summary: 'Error de Fecha y Hora',
            detail: 'La fecha y/o hora de la clase es inválida para el registro.',
            life: 5000
          });
          this.attendanceStatus[memberId] = false; // Revert optimistic update
          return;
        }

        const exitDateLocal = new Date(entryDateLocal); // Create a new Date object from entryDateLocal

        if (this.classData.duration) {
          exitDateLocal.setMinutes(entryDateLocal.getMinutes() + this.classData.duration);
        } else {
          exitDateLocal.setHours(entryDateLocal.getHours() + 1); // Default to 1 hour duration
        }

        const attendanceData = {
          // Convert Date objects to ISO 8601 strings (UTC) for the backend
          entryTime: entryDateLocal.toISOString(),
          exitTime: exitDateLocal.toISOString(),
          memberId: memberId,
          classId: this.classData.id
        };

        console.log("Enviando datos de asistencia:", attendanceData);

        const response = await api.post('/api/v1/Attendances', attendanceData);

        console.log("Respuesta de registro de asistencia:", response.data);

        this.$toast.add({
          severity: 'success',
          summary: this.$t('toast.attendanceRegisteredSummary'),
          detail: response.data.message || this.$t('toast.attendanceMarkedSuccessDetail'),
          life: 3000
        });

      } catch (error) {
        this.attendanceStatus[memberId] = false;
        console.error("Error al marcar asistencia:", error);

        this.$toast.add({
          severity: 'error',
          summary: this.$t('toast.attendanceErrorSummary'),
          detail: error.response?.data?.message || this.$t('toast.attendanceErrorDetail'),
          life: 3000
        });
      }
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.getMembersByClass();
      } else {
        this.members = [];
        this.attendanceStatus = {};
      }
    },
    classData: {
      handler(newVal, oldVal) {
        // Only re-fetch if classId changes and dialog is visible
        if (newVal?.id && newVal.id !== oldVal?.id && this.visible) {
          this.getMembersByClass();
        }
      },
      deep: true,
      immediate: false
    }
  },
  async mounted() {
    console.log("ViewMembers component mounted!");
    if (!this.$toast) {
      console.warn("PrimeVue Toast no está disponible. Asegúrate de importarlo y usarlo en main.js");
    }
    await this.fetchAllMembers();
    if (this.visible) {
      this.getMembersByClass();
    }
  }
};
</script>

<template>
  <pv-dialog
      :header="$t('classes.members-class')"
      :visible="visible"
      @update:visible="$emit('close')"
      modal
      style="min-width: 80vw"
      aria-labelledby="view-members-dialog"
      role="dialog"
      aria-modal="true"
  >
    <div v-if="members.length > 0">
      <pv-datatable
          :value="members"
          responsive-layout="scroll"
          :rows="10"
          scrollable
          aria-describedby="members-table"
          class="members-table"
      >
        <pv-column field="fullName" :header="$t('members.full-name')"/>
        <pv-column field="age" :header="$t('members.age')"/>
        <pv-column field="membershipStatus" :header="$t('members.membership-status')"/>
        <pv-column field="membershipType" :header="$t('members.membership-type')"/>
        <pv-column field="expirationDate" :header="$t('members.expiration-date')"/>
        <pv-column field="email" :header="$t('members.email')"/>
        <pv-column field="phone" :header="$t('members.phone')"/>
        <pv-column field="address" :header="$t('members.address')"/>
        <pv-column :header="$t('actions')">
          <template #body="slotProps">
            <pv-button
                :label="$t('classes.mark-attendance')"
                icon="pi pi-check"
                class="p-button-success p-mr-2"
                @click="markAttendance(slotProps.data.id)"
                :disabled="attendanceStatus[slotProps.data.id]"
                aria-label="Mark Attendance"
                :style="{ backgroundColor: '#a7d1d2', borderColor: '#a7d1d2', color: '#333' }"
                style="--p-button-text-color: #333; --p-button-hover-text-color: #333;"
            />
          </template>
        </pv-column>
      </pv-datatable>
    </div>
    <div v-else>
      <p id="members-table">{{ $t('members.not-found') }}.</p>
    </div>

    <div class="dialog-actions" style="margin-top: 1rem; text-align: right;">
      <pv-button
          label="Close"
          class="p-button-secondary"
          @click="$emit('close')"
          aria-label="Close Members List"
      />
    </div>
  </pv-dialog>

  <Toast/>
</template>

<style scoped>
.dialog-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}
</style>