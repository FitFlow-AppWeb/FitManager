/**
 * ItemType Assembler Class
 *
 * This class provides methods for converting raw backend data into **ItemType** entity objects.
 * It ensures that the data consumed from the API is consistently formatted into the application's
 * defined **ItemType** structure.
 *
 * The methods include:
 * - `oneFromBackend`: Converts a single backend resource object into an **ItemType** entity.
 * - `manyFromBackend`: Converts a list of backend resource objects into an array of **ItemType** entities.
 *
 * Author: Tomio Nakamurakare
 */
import { ItemType } from '../model/item-type.entity.js';

export class ItemTypeAssembler {
    static oneFromBackend(resource) {
        if (!resource) {
            return null;
        }

        return new ItemType({
            id: resource.id,
            name: resource.name,
            description: resource.description
        });
    }

    static manyFromBackend(responseData) {
        if (!Array.isArray(responseData)) {
            console.error("❌ ItemTypeAssembler: Expected an array for manyFromBackend, but received:", responseData);
            return [];
        }
        return responseData.map(this.oneFromBackend);
    }
}