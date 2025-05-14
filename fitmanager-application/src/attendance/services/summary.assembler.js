/**
 * SummaryAssembler is a utility class for transforming raw data into Summary entities.
 * It provides static methods to convert individual resources or response arrays into Summary instances.
 *
 * Author: Renzo Luque
 */

import { Summary } from "../model/summary.entity";

export class SummaryAssembler {
    /**
     * Transforms a single resource object into a Summary entity.
     * @param resource - Raw resource containing weeklyOverview and historicalSummary data
     * @returns {Summary} - A new instance of Summary
     */
    static toEntityFromResource(resource) {
        return new Summary(
            resource.weeklyOverview,       // Weekly attendance breakdown
            resource.historicalSummary     // Historical statistical summary
        );
    }

    /**
     * Transforms an array of resource objects into an array of Summary entities.
     * @param response - Array of resource objects from API or service
     * @returns {Summary[]} - Array of Summary instances
     */
    static toEntitiesFromResponse(response) {
        return response.map(this.toEntityFromResource);
    }
}
