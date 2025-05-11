


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