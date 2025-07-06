/**
 * ItemType Class
 *
 * This class defines an item type object with attributes for identification, name, and description.
 * The constructor initializes the item type with properties like ID, name, and a descriptive text.
 * It also includes methods for formatting the object for backend API interactions.
 *
 * The methods include:
 * - `toBackendCreateFormat`: Converts the instance to a format suitable for creating a new item type on the backend.
 * - `toBackendUpdateFormat`: Converts the instance to a format suitable for updating an existing item type on the backend.
 *
 * Author: Tomio Nakamurakare
 */
export class ItemType {
    constructor({ id, name, description }) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    toBackendCreateFormat() {
        return {
            name: this.name,
            description: this.description
        };
    }

    toBackendUpdateFormat() {
        return {
            id: this.id,
            name: this.name,
            description: this.description
        };
    }
}