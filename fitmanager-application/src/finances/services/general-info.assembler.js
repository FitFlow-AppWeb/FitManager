// 
// The `GeneralInfoAssembler` class is responsible for transforming raw resource data into `GeneralInfo` entities.
// It provides two static methods:
// 1. `toEntityFromResource(resource)` - Converts a single resource object into a `GeneralInfo` entity.
// 2. `toEntitiesFromResources(resources)` - Converts an array of resource objects into an array of `GeneralInfo` entities by calling `toEntityFromResource` for each resource.
// 
// Author: Renzo Luque
//

import {GeneralInfo} from '../model/general-info.entity.js';

export class GeneralInfoAssembler {
    static toEntityFromResource(resource) {
        return new GeneralInfo(
            resource.month,
            resource.year,
            resource.total_income,
            resource.total_expenses,
            resource.earnings,
            resource.membership_income_breakdown
        );
    }

    static toEntitiesFromResources(resources) {
        return resources.map(resource => this.toEntityFromResource(resource));
    }
}
