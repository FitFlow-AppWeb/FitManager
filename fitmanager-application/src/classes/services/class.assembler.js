// 
// Description: This code defines the `ClassAssembler` class, which is responsible for transforming resources (such as JSON objects or API responses) into instances of the `Class` entity. It provides two static methods: 
// - `toEntityFromResource`: Converts a single resource object into an instance of the `Class` entity.
// - `toEntitiesFromResponse`: Maps an array of response objects to an array of `Class` entities.
// The `Class` class itself is imported from the `class.entity.js` file, and instances are created with the data from the resource.
// Author: Cassius Martel
//

import { Class } from '../model/class.entity.js';

export class ClassAssembler {
    static toEntityFromResource(resource) {
        return new Class(
            resource.id,
            resource.name,
            resource.type,
            resource.date,
            resource.time,
            resource.duration,
            resource.status,
            resource.trainer_id,
            resource.members_ids
        );
    }

    static toEntitiesFromResponse(response) {
        return response.map(this.toEntityFromResource);
    }
}
