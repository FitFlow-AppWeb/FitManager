/**
 * SupplyPurchase Assembler Class
 *
 * This class provides methods for converting raw backend data into **SupplyPurchase** entity objects.
 * It ensures that the data consumed from the API is consistently formatted into the application's
 * defined **SupplyPurchase** structure, including proper handling and instantiation of nested
 * **PurchaseDetail** entities. It also handles date string conversions to `Date` objects.
 *
 * The methods include:
 * - `oneFromBackend`: Converts a single backend resource object into a **SupplyPurchase** entity.
 * - `manyFromBackend`: Converts a list of backend resource objects into an array of **SupplyPurchase** entities.
 *
 * Author: Tomio Nakamurakare
 */
import { SupplyPurchase } from '../model/supply-purchase.entity.js';
import { PurchaseDetail } from '../model/purchase-detail.entity.js';

export class SupplyPurchaseAssembler {
    static oneFromBackend(resource) {
        if (!resource) {
            return null;
        }

        return new SupplyPurchase({
            id: resource.id,
            date: new Date(resource.date),
            amount: resource.amount,
            method: resource.method,
            currency: resource.currency,
            vendorName: resource.vendorName,
            purchaseDetails: resource.purchaseDetails
                ? resource.purchaseDetails.map(detailResource => new PurchaseDetail({
                    id: detailResource.id,
                    supplyPurchaseId: detailResource.supplyPurchaseId,
                    itemTypeId: detailResource.itemTypeId,
                    unitPrice: detailResource.unitPrice,
                    quantity: detailResource.quantity,
                    lastMaintenanceDate: new Date(detailResource.lastMaintenanceDate),
                    nextMaintenanceDate: new Date(detailResource.nextMaintenanceDate),
                    status: detailResource.status,
                    employeeId: detailResource.employeeId,
                }))
                : []
        });
    }

    static manyFromBackend(responseData) {
        if (!Array.isArray(responseData)) {
            console.error("❌ SupplyPurchaseAssembler: Expected an array for manyFromBackend, but received:", responseData);
            return [];
        }
        return responseData.map(this.oneFromBackend);
    }
}