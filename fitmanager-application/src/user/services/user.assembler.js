import { User } from '../model/user.entity.js';

export class UserAssembler {
    static toEntityFromResource(resource) {
        return new User(
            resource.id,
            resource.name,
            resource.username,
            resource.email,
            resource.phone,
            resource.role,
            resource.devices,
            resource.avatar,
            resource.gymLogo,
            resource.settings,
            resource.permissions
        );
    }

    static toEntitiesFromResponse(response) {
        return response.map(this.toEntityFromResource);
    }
}
