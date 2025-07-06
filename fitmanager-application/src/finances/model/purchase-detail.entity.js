/**
 * PurchaseDetail Class
 *
 * This class defines a **PurchaseDetail** object, representing a specific item within a larger
 * supply purchase. It captures granular information about each purchased item, including its
 * associated supply purchase and item type, unit price, quantity, and initial details
 * related to maintenance and assigned personnel for inventory tracking.
 *
 * The constructor initializes properties such as ID, `supplyPurchaseId`, `itemTypeId`,
 * `unitPrice`, `quantity`, `lastMaintenanceDate`, `nextMaintenanceDate`, `status`, and `employeeId`.
 *
 * The methods include:
 * - `toBackendCreateFormat`: Converts the instance into a format suitable for sending
 * to the backend API when creating new purchase details. It ensures dates are
 * converted to ISO strings and handles default values for `employeeId` if not provided.
 *
 * Author: Tomio Nakamurakare
 */
export class PurchaseDetail {
    constructor({ id, supplyPurchaseId, itemTypeId, unitPrice, quantity, lastMaintenanceDate, nextMaintenanceDate, status, employeeId }) {
        this.id = id;
        this.supplyPurchaseId = supplyPurchaseId;
        this.itemTypeId = itemTypeId;
        this.unitPrice = unitPrice;
        this.quantity = quantity;
        this.lastMaintenanceDate = lastMaintenanceDate;
        this.nextMaintenanceDate = nextMaintenanceDate;
        this.status = status;
        this.employeeId = employeeId;
    }

    toBackendCreateFormat() {
        return {
            itemTypeId: this.itemTypeId,
            unitPrice: this.unitPrice,
            quantity: this.quantity,
            lastMaintenanceDate: this.lastMaintenanceDate instanceof Date ? this.lastMaintenanceDate.toISOString() : null,
            nextMaintenanceDate: this.nextMaintenanceDate instanceof Date ? this.nextMaintenanceDate.toISOString() : null,
            status: this.status,
            employeeId: this.employeeId === null ? 0 : this.employeeId
        };
    }
}