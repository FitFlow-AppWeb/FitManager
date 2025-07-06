/**
 * Item Assembler Class
 *
 * This class provides methods for converting raw backend data into **Item** entity objects.
 * It ensures that the data consumed from the API is consistently formatted into the application's
 * defined **Item** structure, including proper handling of related **ItemType** and **Employee** entities.
 *
 * The methods include:
 * - `oneFromBackend`: Converts a single backend resource object into an **Item** entity.
 * - `manyFromBackend`: Converts a list of backend resource objects into an array of **Item** entities.
 *
 * Author: Tomio Nakamurakare
 */
import { Item } from '../model/item.entity.js';

export class ItemAssembler {
    static oneFromBackend(resource) {
        if (!resource) {
            return null;
        }

        return new Item({
            id: resource.id,
            lastMaintenanceDate: resource.lastMaintenanceDate,
            nextMaintenanceDate: resource.nextMaintenanceDate,
            status: resource.status,
            employeeId: resource.employeeId,
            employee: resource.employee,
            itemTypeId: resource.itemTypeId,
            itemType: resource.itemType
        });
    }

    static manyFromBackend(responseData) {
        if (!Array.isArray(responseData)) {
            console.error("❌ ItemAssembler: Expected an array for manyFromBackend, but received:", responseData);
            return [];
        }
        return responseData.map(this.oneFromBackend);
    }
}