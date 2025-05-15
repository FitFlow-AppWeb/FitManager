/*
  This code defines a `UserAssembler` class that is responsible for transforming data (resources or responses) into `User` entity instances. The `toEntityFromResource` method converts a single resource (like an API response) into a `User` object by mapping the properties from the resource to the corresponding fields in the `User` class. The `toEntitiesFromResponse` method is designed to handle arrays of resources, converting each resource into a `User` object using the `toEntityFromResource` method. This class is typically used to process raw data and structure it into a format that can be used in the application (in this case, a `User` entity).

  Author: Juan Alvarado
*/

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
