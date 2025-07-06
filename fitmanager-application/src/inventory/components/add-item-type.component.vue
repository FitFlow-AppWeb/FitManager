<script>
/**
 * Add Item Type Component
 *
 * This component provides a modal form for creating a new **ItemType**.
 * It allows users to input a name and description for the new item type.
 * The component includes client-side validation for the name field and handles communication with the backend
 * via `ItemTypeApiService` to persist the new item type.
 *
 * The component emits the following events:
 * - `close`: When the modal is requested to be closed (e.g., by clicking cancel or outside the modal).
 * - `item-type-added`: When a new item type is successfully created, passing the ID of the newly created item type.
 *
 * Author: Tomio Nakamurakare
 */
import { ItemTypeApiService } from '../services/item-type-api.service.js';
import { ItemType } from '../model/item-type.entity.js';

export default {
  name: "add-item-type.component",
  emits: ['close', 'item-type-added'],
  data() {
    return {
      itemTypeService: null,
      newItemType: {
        name: '',
        description: ''
      },
      loading: false,
      error: null
    };
  },
  methods: {
    async submitForm() {
      if (!this.newItemType.name.trim()) {
        this.error = this.$t('item-type.name-required');
        return;
      }

      this.loading = true;
      this.error = null;
      try {
        const itemTypeToCreate = new ItemType({
          name: this.newItemType.name,
          description: this.newItemType.description
        });
        const createdItemType = await this.itemTypeService.createItemType(itemTypeToCreate);

        this.$emit('item-type-added', createdItemType.id);
        this.$emit('close');
        this.resetForm();
      } catch (error) {
        console.error("Error adding item type:", error);
        alert("Failed to add item type. Please try again.");
      } finally {
        this.loading = false;
      }
    },
    resetForm() {
      this.newItemType = {
        name: '',
        description: ''
      };
      this.error = null;
    }
  },
  created() {
    this.itemTypeService = new ItemTypeApiService();
  }
};
</script>

<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <h2 class="modal-title">{{ $t('item-type.add-new') }}</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="itemTypeName">{{ $t('item-type.name') }}</label>
          <pv-inputtext id="itemTypeName" v-model="newItemType.name" class="form-input-field" required autofocus aria-label="Item type name" />
        </div>
        <div class="form-group">
          <label for="itemTypeDescription">{{ $t('item-type.description') }}</label>
          <pv-inputtext id="itemTypeDescription" v-model="newItemType.description" rows="3" class="form-input-field" aria-label="Item type description" />
        </div>

        <div v-if="error" class="error-message">{{ error }}</div>

        <div class="actions">
          <pv-button :label="$t('general.create')" type="submit" :loading="loading" class="create-button" />
          <pv-button :label="$t('general.cancel')" type="button" @click="$emit('close')" class="cancel-button" :disabled="loading" />
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
  z-index: 2000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  width: 400px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.modal-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #A7D1D2;
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.form-group label {
  font-size: 0.9rem;
  color: #555;
  text-align: left;
}

.form-input-field {
  width: 100%;
  background-color: white;
  border: 1px solid #A7D1D2;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
  box-sizing: border-box;
}

.error-message {
  color: #d9534f;
  margin-top: 1rem;
  text-align: center;
}

.actions {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.5rem;
}

.create-button {
  background-color: #5d7273;
  color: white;
  border: none;
  flex-grow: 1;
}

.create-button:hover {
  background-color: #4a5c5d;
}

.cancel-button {
  background-color: #f0f0f0;
  color: #A7D1D2;
  border: none;
  flex-grow: 1;
}

.cancel-button:hover {
  background-color: #dcdcdc !important;
  border-color: #8FBFC0 !important;
  color: #000 !important;
}
</style>