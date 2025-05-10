import { Transaction } from "../model/transaction.entity.js";

export class TransactionAssembler {
    static toEntityFromResource(resource) {
        return new Transaction(
            resource.id,
            resource.recipient,
            resource.payer,
            resource.concept,
            resource.amount,
            resource.currency,
            resource.date
        );
    }

    static toEntitiesFromResources(resources) {
        return resources.map(resource => this.toEntityFromResource(resource));
    }
}