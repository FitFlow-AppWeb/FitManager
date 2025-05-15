// 
// Description: This code defines a `Class` class, which serves as a model to represent a class in a scheduling system. It includes properties for the class's unique identifier (`id`), name (`name`), type (`type`), date (`date`), time (`time`), duration (`duration`), status (`status`), trainer identifier (`trainer_id`), and an array of member identifiers (`members_ids`). This class is used to create instances representing individual classes in the system.
// Author: Cassius Martel
//

export class Class {
    constructor(id, name, type, date, time, duration, status, trainer_id, members_ids) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.date = date;
        this.time = time;
        this.duration = duration;
        this.status = status;
        this.trainer_id = trainer_id;
        this.members_ids = members_ids;
    }
}
