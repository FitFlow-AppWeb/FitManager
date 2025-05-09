/**
 * This file contains the DataAssembler class, which is responsible
 * for transforming raw data objects into instances of the Data entity.
 * It simulates the deserialization process, typically used when handling
 * API responses that provide data in a raw format.
 *
 * Tomio Nakamurakare
 */

import { Data } from "../model/data.entity.js";

export class DataAssembler {

    static toEntitiesFromResponse(response) {
        if (!Array.isArray(response)) {
            console.error("Invalid response format for data");
            return [];
        }

        return response.map((dataRaw) => this.toEntityFromResource(dataRaw));
    }

    static toEntityFromResource(resource) {
        return new Data(resource);
    }
}
