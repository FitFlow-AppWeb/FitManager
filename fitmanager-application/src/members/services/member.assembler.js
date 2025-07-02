/**
 * This file contains the MemberAssembler class, which is responsible
 * for converting plain data objects into instances of the Member entity.
 * It is used to simulate the deserialization of data from a fake API response.
 *
 * Author: Cassius Martel
 */

import { Member } from '../model/member.entity.js';

export class MemberAssembler {

    static toEntityFromResource(resource) {



        return new Member(
            resource.id,
            `${resource.firstName} ${resource.lastName}`,
            resource.age,
            resource.membershipStatus?.status ?? 'N/A',
            resource.membershipStatus?.membershipType?.name ?? 'N/A',
            resource.membershipStatus?.endDate ?? 'N/A',
            resource.dni,
            resource.email,
            resource.phoneNumber,
            resource.address,
            resource.membershipStatus?.startDate ?? 'N/A',
        );
    }

    static toEntitiesFromResponse(response) {
        return response.map(this.toEntityFromResource);
    }

    static fromBackend(raw) {
        const fullName = `${raw.firstName} ${raw.lastName}`;
        const membershipStatus = raw.membershipStatus?.status.toLowerCase() || 'Desconocido';
        const membershipType = raw.membershipStatus?.membershipType?.name || 'Sin membresía';

        const expirationDate = raw.membershipStatus?.endDate
            ? new Date(raw.membershipStatus.endDate).toISOString().split('T')[0]
            : 'N/A';

        const membershipStartDate = raw.membershipStatus?.startDate
            ? new Date(raw.membershipStatus.startDate).toISOString().split('T')[0]
            : 'N/A';

        return new Member(
            raw.id,
            fullName,
            raw.age,
            membershipStatus,
            membershipType,
            expirationDate,
            raw.dni,
            raw.email,
            raw.phoneNumber,
            raw.address,
            membershipStartDate,
            null
        );
    }

    static manyFromBackend(responseArray) {
        return responseArray.map(this.fromBackend);
    }

}
