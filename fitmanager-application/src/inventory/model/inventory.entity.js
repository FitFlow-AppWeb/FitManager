// 
// This class represents an Inventory item, used to define and manage an inventory object's properties such as its ID, name, description, quantity, maintenance dates, and associated trainer. 
// The class constructor allows the creation of an Inventory object with the provided details.
// - `id`: Unique identifier for the inventory item.
// - `name`: The name of the inventory item.
// - `description`: A description of the inventory item.
// - `quantity`: The quantity of the inventory item available.
// - `last_maintenance`: The last maintenance date of the inventory item.
// - `next_maintenance`: The next scheduled maintenance date for the inventory item.
// - `trainer_id`: The ID of the trainer associated with the inventory item.
// Author: Cassius Martel
//

export class Inventory {
    constructor(id, name, description, quantity, last_maintenance, next_maintenance, trainer_id) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.last_maintenance = last_maintenance;
        this.next_maintenance = next_maintenance;
        this.trainer_id = trainer_id;
    }
} 
