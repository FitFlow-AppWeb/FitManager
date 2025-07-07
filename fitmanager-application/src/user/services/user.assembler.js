/*
  This code defines a `UserAssembler` class that is responsible for transforming data (resources or responses) into `User` entity instances.
  It's updated to reflect the new simplified User entity structure.

  Author: Juan Alvarado
*/

import { User } from '../model/user.entity.js';

export class UserAssembler {
    /**
     * Converts a single API resource (object) into a User entity instance.
     * @param {Object} resource The API resource object.
     * @returns {User} A User entity instance.
     */
    static toEntityFromResource(resource) {
        return new User(
            resource.id,
            resource.email,
            resource.icon,
            resource.subscription
        );
    }

    /**
     * Converts an array of API resources into an array of User entity instances.
     * @param {Array<Object>} response The array of API resource objects.
     * @returns {Array<User>} An array of User entity instances.
     */
    static toEntitiesFromResponse(response) {
        return response.map(this.toEntityFromResource);
    }

    /**
     * Converts a User entity instance into a resource object for sending to the API.
     * This is useful for PUT/POST requests.
     * @param {User} user The User entity instance.
     * @returns {Object} A resource object formatted for the API.
     */
    static toResourceFromEntity(user) {
        return {
            id: user.id,
            email: user.email,
            icon: user.icon,
            subscription: user.subscription
        };
    }
}