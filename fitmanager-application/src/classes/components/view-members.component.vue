<!--
// Description: This code defines the `ViewMembers` component, which is used to display the list of members for a particular class.
// The component receives `classData` and `visible` as props, with `classData` containing the specific class information,
// and `visible` determining whether the dialog showing the members is visible or not.
// The `getMembersByClass` method fetches the list of members for the specified class using a service and then renders the members in a data table.
// If there are no members, a message is shown. The dialog can be closed by clicking the 'Close' button.
// Author: Cassius Martel
-->

<script>
import api from '../../login/services/api.js';

export default {
  name: "ViewMembers",
  data() {
    return {
      members: [],
      allMembers: []
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

      } catch (error) {
        console.error("Error fetching class bookings or filtering members:", error);
        this.members = [];
      }
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.getMembersByClass();
      } else {
        this.members = [];
      }
    },
    classData: {
      handler(newVal, oldVal) {
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
        <pv-column field="fullName" :header="$t('members.full-name')" />
        <pv-column field="age" :header="$t('members.age')" />
        <pv-column field="membershipStatus" :header="$t('members.membership-status')" />
        <pv-column field="membershipType" :header="$t('members.membership-type')" />
        <pv-column field="expirationDate" :header="$t('members.expiration-date')" />
        <pv-column field="email" :header="$t('members.email')" />
        <pv-column field="phone" :header="$t('members.phone')" />
        <pv-column field="address" :header="$t('members.address')" />
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
</template>



<style scoped>
.dialog-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}
</style>
