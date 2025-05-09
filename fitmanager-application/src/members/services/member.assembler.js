
/**
 * This file contains the MemberAssembler class, which is responsible
 * for converting plain data objects into instances of the Member entity.
 * It is used to simulate the deserialization of data from a fake API response.
 *
 * Cassius Martel
 */

import { Member } from '../model/member.entity.js';

export class MemberAssembler {
    static toEntityFromResource(resource) {
        return new Member(
            resource.id,
            resource.fullName,
            resource.age,
            resource.membershipStatus,
            resource.membershipType,
            resource.expirationDate,
            resource.dni,
            resource.email,
            resource.phone,
            resource.address,
            resource.membershipStartDate,
            resource.profilePicture,

        );
    }

    static toEntitiesFromResponse(response) {
        return response.map(this.toEntityFromResource);
    }
}
