/**
 * This file contains the AdminAssembler class, which is responsible for
 * converting simple data objects into instances of the Admin entity.
 * It is used to simulate the deserialization of data from a fake API response.
 *
 * Author: Victor Ortiz
 */

import { Admin } from '../model/admin.entity.js';

export class AdminAssembler {
    static toEntityFromResource(resource) {
        return new Admin(
            resource.id,
            resource.fullName,
            resource.email,
            resource.password,
            resource.role,
            resource.lastLoginDate,
            resource.phone,
            resource.address,
            resource.profilePicture
        );
    }

    static toEntitiesFromResponse(response) {
        return response.map(this.toEntityFromResource);
    }
}
