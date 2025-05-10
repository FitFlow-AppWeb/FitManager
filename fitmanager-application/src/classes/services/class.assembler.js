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