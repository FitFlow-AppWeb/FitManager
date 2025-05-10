


export class Class {
    constructor(id, name, type, date, time, duration, status, trainer_id, members_ids) {
        this.id = id;
        this.name = name;
        this.type = type; // "Group" or "Solo"
        this.date = date; // Format: YYYY-MM-DD
        this.time = time; // Format: HH:mm
        this.duration = duration; // Example: "1 hour"
        this.status = status; // "Pending", "Confirmed", or "Cancelled"
        this.trainer_id = trainer_id; // ID of the trainer
        this.members_ids = members_ids; // Array of member IDs
    }
}