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