<script>
/**
 * View Items Component
 *
 * This component displays a detailed list of individual inventory items belonging to a specific item type.
 * It's presented as a modal dialog, showing attributes like ID, status, last and next maintenance dates,
 * and the assigned trainer's full name.
 *
 * The component provides functionality to:
 * - Format and display dates for better readability.
 * - Open a maintenance modal for a specific individual item, emitting an `open-maintenance-modal-request` event.
 * - Delete an individual item, emitting a `delete-individual-request` event.
 *
 * It receives `groupedItemData` containing the array of individual items and a `visible` prop to control the dialog's visibility.
 *
 * Author: Tomio Nakamurakare
 */
export default {
  name: "view-items.component",
  props: {
    groupedItemData: {
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
    formatDate(dateString) {
      if (!dateString) return 'N/A';
      try {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString('es-ES', options);
      } catch (e) {
        console.error("Error formatting date:", dateString, e);
        return 'Fecha inválida';
      }
    },
    openMaintenanceModalForItem(item) {
      this.$emit('open-maintenance-modal-request', item);
    },
    deleteIndividualItem(item) {
      this.$emit('delete-individual-request', item);
    }
  }
}
</script>

<template>
  <pv-dialog
      :header="`${$t('inventory.items-for-type')} ${groupedItemData.name}`"
      :visible="visible"
      @update:visible="closeDialog"
      modal
      :style="{ width: '70vw' }"
      aria-labelledby="view-items-dialog-header"
  >
    <div class="p-fluid">
      <p v-if="!groupedItemData.individualItems || groupedItemData.individualItems.length === 0">
        {{ $t('inventory.no-individual-items-found') }}
      </p>
      <pv-datatable
          v-else
          :value="groupedItemData.individualItems"
          paginator
          :rows="5"
          class="individual-items-table"
      >
        <pv-column field="id" header="ID"></pv-column>
        <pv-column field="status" :header="$t('inventory.status')"></pv-column>
        <pv-column :header="$t('inventory.last-maintenance')" sortable sort-field="lastMaintenanceDate">
          <template #body="{ data }">
            {{ formatDate(data.lastMaintenanceDate) }}
          </template>
        </pv-column>
        <pv-column :header="$t('inventory.next-maintenance')" sortable sort-field="nextMaintenanceDate">
          <template #body="{ data }">
            {{ formatDate(data.nextMaintenanceDate) }}
          </template>
        </pv-column>
        <pv-column :header="$t('inventory.trainer')" field="assignedTrainerFullName"></pv-column>
        <pv-column header="Actions" style="width: 15%">
          <template #body="{ data }">
            <div class="action-buttons">
              <img src="/assets/pencil-svgrepo-com.svg" alt="Edit Maintenance/Trainer" class="action-icon" @click="openMaintenanceModalForItem(data)" aria-label="Edit individual item maintenance and trainer"/>
              <img src="/assets/close-svgrepo-com.svg" alt="Delete" class="action-icon" @click="deleteIndividualItem(data)" aria-label="Delete individual item"/>
            </div>
          </template>
        </pv-column>
        <template #empty>{{ $t('inventory.no-items-for-type') }}.</template>
      </pv-datatable>
    </div>
  </pv-dialog>
</template>

<style scoped>
.individual-items-table {
  width: 100%;
}

.action-buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.action-icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: opacity 0.3s;
  padding: 0.2rem;
}

.action-icon:hover {
  opacity: 0.7;
}
</style>