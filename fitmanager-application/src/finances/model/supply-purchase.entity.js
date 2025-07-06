/**
 * SupplyPurchase Class
 *
 * This class defines a **SupplyPurchase** object, representing a record of supplies bought.
 * It includes details such as the purchase ID, date, total amount, payment method, currency,
 * vendor name, and a collection of **PurchaseDetail** objects that specify the individual items purchased.
 * The constructor initializes these properties, ensuring that `purchaseDetails` are properly
 * instantiated as `PurchaseDetail` entities.
 *
 * The methods include:
 * - `toBackendCreateFormat`: Converts the instance into a format suitable for sending
 * to the backend API for creating a new supply purchase, including formatted purchase details.
 *
 * Author: Tomio Nakamurakare
 */
import { PurchaseDetail } from './purchase-detail.entity.js';

export class SupplyPurchase {
    constructor({ id, date, amount, method, currency, vendorName, purchaseDetails }) {
        this.id = id;
        this.date = date;
        this.amount = amount;
        this.method = method;
        this.currency = currency;
        this.vendorName = vendorName;
        this.purchaseDetails = purchaseDetails ? purchaseDetails.map(detail => new PurchaseDetail(detail)) : [];
    }

    toBackendCreateFormat() {
        return {
            date: this.date.toISOString(),
            amount: this.amount,
            method: this.method,
            currency: this.currency,
            vendorName: this.vendorName,
            purchaseDetails: this.purchaseDetails.map(detail => detail.toBackendCreateFormat())
        };
    }
}