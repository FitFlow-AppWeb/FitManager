/**
 * MembershipPayment Class
 *
 * This class defines a **MembershipPayment** object, representing a record of a
 * payment made for a membership. It includes details such as the payment ID,
 * date, amount, payment method, currency, and the ID of the member who made the payment.
 *
 * The constructor initializes these properties, ensuring the `date` is properly
 * handled as a `Date` object.
 *
 * The methods include:
 * - `toBackendCreateFormat`: Converts the instance into a format suitable for sending
 * to the backend API for creating a new membership payment, matching the
 * `CreateMembershipPaymentResource` (C# record).
 *
 * Author: Tomio Nakamurakare
 */
export class MembershipPayment {
    constructor({ id, date, amount, method, currency, memberId }) {
        this.id = id;
        this.date = (date instanceof Date) ? date : new Date(date);
        this.amount = amount;
        this.method = method;
        this.currency = currency;
        this.memberId = memberId;
    }

    toBackendCreateFormat() {
        return {
            date: this.date.toISOString(),
            amount: this.amount,
            method: this.method,
            currency: this.currency,
            memberId: this.memberId
        };
    }
}