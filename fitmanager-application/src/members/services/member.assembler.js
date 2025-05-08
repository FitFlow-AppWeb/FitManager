
/**
 * This file contains the MemberAssembler class, which is responsible
 * for converting plain data objects into instances of the Member entity.
 * It is used to simulate the deserialization of data from a fake API response.
 *
 * Cassius Martel
 */

import { Member } from "../model/member.entity.js";

export class MemberAssembler {

    static toEntitiesFromResponse(response) {
        if (!Array.isArray(response)) {
            console.error("Invalid response format for members");
            return [];
        }

        return response.map((memberRaw) => this.toEntityFromResource(memberRaw));
    }

    static toEntityFromResource(resource) {
        return new Member(resource);
    }
}
