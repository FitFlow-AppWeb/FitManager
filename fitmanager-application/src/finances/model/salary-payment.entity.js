/**
 * SalaryPayment Class
 *
 * This class defines a **SalaryPayment** object, representing a record of a salary payment made to an employee.
 * It includes details such as the payment ID, date, amount, payment method, currency,
 * and the ID of the employee who received the payment.
 *
 * The constructor initializes these properties, ensuring the `date` is properly
 * handled as a `Date` object.
 *
 * The methods include:
 * - `toBackendCreateFormat`: Converts the instance into a format suitable for sending
 * to the backend API for creating a new salary payment, matching the `CreateSalaryPaymentResource`.
 *
 * Author: Tomio Nakamurakare
 */
export class SalaryPayment {
    constructor({ id, date, amount, method, currency, employeeId }) {
        this.id = id;
        this.date = date;
        this.amount = amount;
        this.method = method;
        this.currency = currency;
        this.employeeId = employeeId;
    }

    toBackendCreateFormat() {
        return {
            date: this.date.toISOString(),
            amount: this.amount,
            method: this.method,
            currency: this.currency,
            employeeId: this.employeeId
        };
    }
}