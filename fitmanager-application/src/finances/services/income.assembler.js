// 
// The `IncomeAssembler` class is responsible for converting income-related data resources into `IncomeData` entities.
// It has two static methods:
// 1. `toEntityFromResource(resource)`: Converts a single resource object to an `IncomeData` entity, which includes fields like date, month, year, and income breakdowns (monthly, quarterly, yearly).
// 2. `toEntitiesFromResources(resources)`: Takes an array of resources and maps each one to an `IncomeData` entity using `toEntityFromResource`.
// 
// Author: Renzo Luque
//

import { IncomeData } from "../model/income.entity.js";

export class IncomeAssembler {
    static toEntityFromResource(resource) {
        return new IncomeData(
            resource.date,
            resource.month,
            resource.year,
            resource.monthly,
            resource.quarterly,
            resource.yearly
        );
    }

    static toEntitiesFromResources(resources) {
        return resources.map(resource => this.toEntityFromResource(resource));
    }
}
