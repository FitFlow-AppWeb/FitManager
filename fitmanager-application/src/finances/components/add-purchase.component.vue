<script>
/**
 * Add Purchase Component
 *
 * This component provides a modal form for adding a new **SupplyPurchase** record.
 * It allows users to input general purchase information (date, method, currency, vendor)
 * and to add multiple **PurchaseDetail** items for that purchase. Each purchase detail
 * includes an item type, unit price, quantity, and optionally, an assigned employee,
 * next maintenance date, and status.
 *
 * It dynamically fetches **ItemTypes** and **Employees** to populate dropdowns.
 * A special "Add New Item Type" option is included in the item type dropdown, which
 * triggers another modal (`AddItemType`) for creating new item types on the fly.
 *
 * The component calculates the total purchase amount based on the added details.
 *
 * @emits close - Emitted when the modal is requested to be closed.
 * @emits purchase-added - Emitted when a new purchase is successfully added.
 *
 * Author: Tomio Nakamurakare
 */
import { SupplyPurchaseApiService } from "../services/supply-purchase-api.service.js";
import { ItemTypeApiService } from "../../inventory/services/item-type-api.service.js";
import { EmployeeApiService } from "../../employees/services/employee-api.service.js";
import { SupplyPurchase } from "../model/supply-purchase.entity.js";
import { PurchaseDetail } from "../model/purchase-detail.entity.js";
import AddItemType from "../../inventory/components/add-item-type.component.vue";

export default {
  name: "add-purchase.component",
  emits: ['close', 'purchase-added'],
  components: {
    AddItemType
  },
  data() {
    const nextMaintenanceDate = new Date();
    nextMaintenanceDate.setMonth(nextMaintenanceDate.getMonth() + 6);

    return {
      showAddItemTypeModal: false,

      supplyPurchaseService: null,
      itemTypeService: null,
      employeeService: null,

      purchase: new SupplyPurchase({
        date: new Date(),
        amount: 0,
        method: '',
        currency: '',
        vendorName: '',
        purchaseDetails: []
      }),

      newPurchaseDetail: {
        itemTypeId: null,
        unitPrice: 0,
        quantity: 0,
        employeeId: null,
        nextMaintenanceDate: nextMaintenanceDate,
        status: 'Available'
      },
      itemTypes: [],
      employees: [],
      itemStatuses: ['Available', 'In Use', 'Under Maintenance', 'Retired'],

      currentDetailIndex: -1
    };
  },
  methods: {
    async fetchItemTypes() {
      try {
        const fetchedItemTypes = await this.itemTypeService.getAllItemTypes();
        const existingItemOptions = fetchedItemTypes.map(type => ({
          name: type.name,
          value: type.id
        }));

        this.itemTypes = [
          { name: this.$t('item-type.add-new'), value: 'add-new-item-type-option' },
          ...existingItemOptions
        ];
      } catch (error) {
        console.error("Error fetching item types:", error);
        alert("Failed to load item types. Please try again.");
      }
    },

    async fetchEmployees() {
      try {
        const fetchedEmployees = await this.employeeService.getAllEmployees();
        this.employees = fetchedEmployees.map(employee => ({
          name: `${employee.firstName} ${employee.lastName}`,
          value: employee.id
        }));
      } catch (error) {
        console.error("Error fetching employees:", error);
        alert("Failed to load employees. Please try again.");
      }
    },

    handleItemTypeSelectChange() {
      console.log(this.newPurchaseDetail.itemTypeId);
      if (this.newPurchaseDetail.itemTypeId === 'add-new-item-type-option') {
        this.openAddItemTypeModal();
        this.newPurchaseDetail.itemTypeId = null;
      }
    },

    addDetail() {
      if (this.newPurchaseDetail.itemTypeId &&
          this.newPurchaseDetail.unitPrice > 0 &&
          this.newPurchaseDetail.quantity > 0) {

        const detailData = {
          itemTypeId: this.newPurchaseDetail.itemTypeId,
          unitPrice: this.newPurchaseDetail.unitPrice,
          quantity: this.newPurchaseDetail.quantity,
          employeeId: this.newPurchaseDetail.employeeId,
          lastMaintenanceDate: new Date(),
          nextMaintenanceDate: this.newPurchaseDetail.nextMaintenanceDate,
          status: this.newPurchaseDetail.status
        };

        if (this.currentDetailIndex === -1) {
          this.purchase.purchaseDetails.push(new PurchaseDetail(detailData));
        } else {
          const existingDetail = this.purchase.purchaseDetails[this.currentDetailIndex];
          detailData.lastMaintenanceDate = existingDetail.lastMaintenanceDate || new Date();

          this.purchase.purchaseDetails[this.currentDetailIndex] = new PurchaseDetail(detailData);
          this.currentDetailIndex = -1;
        }
        this.resetNewPurchaseDetailForm();
      } else {
        alert("Please fill item type, unit price, and quantity for the item detail.");
      }
    },

    editDetail(detail, index) {
      this.newPurchaseDetail = {
        itemTypeId: detail.itemTypeId,
        unitPrice: detail.unitPrice,
        quantity: detail.quantity,
        employeeId: detail.employeeId || null,
        nextMaintenanceDate: detail.nextMaintenanceDate ? new Date(detail.nextMaintenanceDate) : new Date(new Date().setMonth(new Date().getMonth() + 6)),
        status: detail.status || 'Available'
      };
      this.currentDetailIndex = index;
    },

    removeDetail(index) {
      this.purchase.purchaseDetails.splice(index, 1);
      if (this.currentDetailIndex === index) {
        this.resetNewPurchaseDetailForm();
        this.currentDetailIndex = -1;
      } else if (this.currentDetailIndex > index) {
        this.currentDetailIndex--;
      }
    },

    resetNewPurchaseDetailForm() {
      const nextMaintenanceDate = new Date();
      nextMaintenanceDate.setMonth(nextMaintenanceDate.getMonth() + 6);

      this.newPurchaseDetail = {
        itemTypeId: null,
        unitPrice: 0,
        quantity: 0,
        employeeId: null,
        nextMaintenanceDate: nextMaintenanceDate,
        status: 'Available'
      };
    },

    calculateTotalAmount() {
      this.purchase.amount = this.purchase.purchaseDetails.reduce((sum, detail) => {
        return sum + (detail.unitPrice * detail.quantity);
      }, 0);
    },

    openAddItemTypeModal() {
      this.showAddItemTypeModal = true;
    },

    closeAddItemTypeModal() {
      this.showAddItemTypeModal = false;
    },

    async handleItemTypeAdded(newItemTypeId) {
      this.closeAddItemTypeModal();
      await this.fetchItemTypes();

      if (newItemTypeId) {
        this.newPurchaseDetail.itemTypeId = newItemTypeId;
      }
    },

    async submitForm() {
      this.calculateTotalAmount();

      if (this.purchase.purchaseDetails.length === 0) {
        alert("Please add at least one item detail to the purchase.");
        return;
      }

      try {
        const payload = this.purchase.toBackendCreateFormat();

        await this.supplyPurchaseService.createSupplyPurchase(payload);
        this.$emit("purchase-added");
        this.$emit("close");
      } catch (error) {
        console.error("Error adding supply purchase:", error);
        alert("Failed to add purchase. Please try again.");
      }
    }
  },
  watch: {
    'purchase.purchaseDetails': {
      handler: 'calculateTotalAmount',
      deep: true
    }
  },
  created() {
    this.supplyPurchaseService = new SupplyPurchaseApiService();
    this.itemTypeService = new ItemTypeApiService();
    this.employeeService = new EmployeeApiService();
    this.fetchItemTypes();
    this.fetchEmployees();
  }
};
</script>

<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h2 class="modal-title">{{ $t('purchase.add-new-purchase') }}</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="purchaseDate">{{ $t('purchase.date') }}</label>
          <pv-datepicker id="purchaseDate" v-model="purchase.date" dateFormat="yy-mm-dd" class="form-input-field" required aria-label="Purchase date" />
        </div>
        <div class="form-group">
          <label for="purchaseMethod">{{ $t('purchase.method') }}</label>
          <pv-inputtext id="purchaseMethod" v-model="purchase.method" class="form-input-field" required aria-label="Payment method" />
        </div>
        <div class="form-group">
          <label for="purchaseCurrency">{{ $t('purchase.currency') }}</label>
          <pv-inputtext id="purchaseCurrency" v-model="purchase.currency" class="form-input-field" required aria-label="Currency" />
        </div>
        <div class="form-group">
          <label for="purchaseVendorName">{{ $t('purchase.vendor-name') }}</label>
          <pv-inputtext id="purchaseVendorName" v-model="purchase.vendorName" class="form-input-field" required aria-label="Vendor name" />
        </div>

        <h3 class="modal-subtitle">{{ $t('purchase.item-details') }}</h3>

        <div class="detail-form-grid">
          <div class="grid-item-wrapper">
            <label for="itemTypeId">{{ $t('purchase.item-type') }}</label>
            <pv-select
                id="itemTypeId"
                v-model="newPurchaseDetail.itemTypeId"
                :options="itemTypes"
                :placeholder="$t('purchase.select-item-type')"
                option-label="name"
                option-value="value"
                class="grid-item-input"
                @change="handleItemTypeSelectChange" required aria-label="Select item type"
            />
          </div>
          <div class="grid-item-wrapper">
            <label for="unitPrice">{{ $t('purchase.unit-price') }}</label>
            <pv-inputtext id="unitPrice" v-model.number="newPurchaseDetail.unitPrice" type="number" step="0.01" class="grid-item-input" required aria-label="Unit price" />
          </div>
          <div class="grid-item-wrapper">
            <label for="quantity">{{ $t('purchase.quantity') }}</label>
            <pv-inputtext id="quantity" v-model.number="newPurchaseDetail.quantity" type="number" class="grid-item-input" required aria-label="Quantity" />
          </div>

          <div class="grid-item-wrapper">
            <label for="employeeId">{{ $t('purchase.assign-employee') }}</label>
            <pv-select
                id="employeeId"
                v-model="newPurchaseDetail.employeeId"
                :options="employees"
                :placeholder="$t('purchase.select-employee')"
                option-label="name"
                option-value="value"
                class="grid-item-input"
                aria-label="Assign employee"
            />
          </div>
          <div class="grid-item-wrapper">
            <label for="nextMaintenanceDate">{{ $t('purchase.next-maintenance') }}</label>
            <pv-datepicker id="nextMaintenanceDate" v-model="newPurchaseDetail.nextMaintenanceDate" dateFormat="yy-mm-dd" class="grid-item-input" aria-label="Next maintenance date" />
          </div>
          <div class="grid-item-wrapper">
            <label for="status">{{ $t('purchase.item-status') }}</label>
            <pv-select
                id="status"
                v-model="newPurchaseDetail.status"
                :options="itemStatuses"
                :placeholder="$t('purchase.select-status')"
                class="grid-item-input"
                aria-label="Item status"
            />
          </div>
          <pv-button :label="currentDetailIndex === -1 ? $t('purchase.add-detail') : $t('purchase.update-detail')" type="button" @click="addDetail" class="add-detail-button" aria-label="Add item detail" />
        </div>

        <div v-if="purchase.purchaseDetails.length > 0" class="details-list">
          <h4>{{ $t('purchase.added-items') }}</h4>
          <div class="details-items-container">
            <ul>
              <li v-for="(detail, index) in purchase.purchaseDetails" :key="index" class="detail-item">
                <span class="detail-text-content">
                  {{ itemTypes.find(type => type.value === detail.itemTypeId)?.name || 'Unknown Item Type' }}<br>
                  {{ $t('purchase.quantity') }}: {{ detail.quantity }} | {{ $t('purchase.unit-price') }}: ${{ detail.unitPrice.toFixed(2) }}
                  <template v-if="detail.employeeId"><br>{{ $t('purchase.assigned')}}: {{ (employees.find(emp => emp.value === detail.employeeId) || {}).name || 'N/A' }}</template>                  <template v-if="detail.status"><br>{{ $t('purchase.status') }}: {{ detail.status }}</template>
                </span>
                <div class="detail-actions">
                  <pv-button icon="pi pi-pencil" class="p-button-rounded p-button-text p-button-sm" @click="editDetail(detail, index)" aria-label="Edit item detail" />
                  <pv-button icon="pi pi-times" class="p-button-rounded p-button-text p-button-danger p-button-sm" @click="removeDetail(index)" aria-label="Remove item detail" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="total-amount">
          <strong>{{ $t('purchase.total-amount') }}: ${{ purchase.amount.toFixed(2) }}</strong>
        </div>

        <div class="actions">
          <pv-button :label="$t('general.add')" type="submit" class="add-button" aria-label="Add purchase" />
          <pv-button :label="$t('general.cancel')" type="button" @click="$emit('close')" class="cancel-button" aria-label="Cancel" />
        </div>
      </form>
    </div>
    <AddItemType
        v-if="showAddItemTypeModal"
        @close="closeAddItemTypeModal"
        @item-type-added="handleItemTypeAdded"
    />
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
  width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.modal-title, .modal-subtitle {
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

.detail-form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: flex-end;
}

.grid-item-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
  min-width: 0;
}

.grid-item-wrapper label {
  font-size: 0.9rem;
  color: #555;
  text-align: left;
}

.grid-item-input {
  background-color: white;
  border: 1px solid #A7D1D2;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
  box-sizing: border-box;
}

.add-detail-button {
  grid-column: span 2;
  width: 100%;
  margin-top: 0.5rem;
  background-color: #5d7273;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  white-space: nowrap;
}

.add-detail-button:hover {
  background-color: #4a5c5d;
}

.details-list {
  border-top: 1px solid #eee;
  padding-top: 1rem;
  margin-top: 1rem;
}

.details-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.details-items-container {
  overflow-x: hidden;
}


.detail-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0;
  border-bottom: 1px dashed #eee;
}

.detail-item .detail-text-content {
  flex-grow: 1;
  word-break: break-word;
  overflow-wrap: break-word;
  width: 100%;
}

.detail-actions {
  margin-top: 0.5rem;
  align-self: flex-end;
  white-space: nowrap;
}

.detail-item:last-child {
  border-bottom: none;
}

.detail-actions pv-button {
  margin-left: 0.5rem;
}

.total-amount {
  text-align: right;
  margin-top: 1.5rem;
  font-size: 1.2rem;
  color: #333;
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
  gap: 1rem;
  margin-top: 1rem;
}
</style>