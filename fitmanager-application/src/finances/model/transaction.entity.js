// 
// This JavaScript class `Transaction` is used to model a financial transaction with various properties such as:
// - `id`: The unique identifier for the transaction.
// - `recipient`: The individual or entity receiving the funds.
// - `payer`: The individual or entity paying the funds.
// - `concept`: A description of the purpose or nature of the transaction.
// - `amount`: The amount of money involved in the transaction.
// - `currency`: The currency in which the transaction was made.
// - `date`: The date the transaction took place.
// The constructor allows initializing these properties with default values, making it easy to create instances of the `Transaction` class.
// 
// Author: Renzo Luque
//

export class Transaction {
    constructor(
        id = '',
        recipient = '',
        payer = '',
        concept = '',
        amount = 0,
        currency = '',
        date = '')
    {
        this.id = id;
        this.recipient = recipient;
        this.payer = payer;
        this.concept = concept;
        this.amount = amount;
        this.currency = currency;
        this.date = date;
    }
}
