// 
// This code defines the InventoryAssembler class, which is responsible for transforming raw resource data into Inventory entities.
// - `toEntityFromResource`: Converts a single resource object into an instance of the Inventory class.
// - `toEntitiesFromResponse`: Converts an array of resource objects into an array of Inventory entities.
// The Inventory class, imported from the '../model/inventory.entity.js' file, models an inventory item with properties such as id, name, description, quantity, maintenance dates, and trainer_id.
// Author: Cassius Martel
//

import { Inventory } from '../model/inventory.entity.js';

export class InventoryAssembler {
    static toEntityFromResource(resource) {
        return new Inventory(
            resource.id,
            resource.name,
            resource.description,
            resource.quantity,
            resource.last_maintenance,
            resource.next_maintenance,
            resource.trainer_id,
        );
    }

    static toEntitiesFromResponse(response) {
        return response.map(this.toEntityFromResource);
    }
}
