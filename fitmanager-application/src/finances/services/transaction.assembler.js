// 
// The `TransactionAssembler` class is responsible for transforming raw transaction data into structured `Transaction` entities.
// It provides two methods:
// 1. `toEntityFromResource(resource)`: Converts a single raw resource into a `Transaction` entity.
// 2. `toEntitiesFromResources(resources)`: Converts an array of raw transaction data into an array of `Transaction` entities.
// 
// Author: Renzo Luque
//

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
