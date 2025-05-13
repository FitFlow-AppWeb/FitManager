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