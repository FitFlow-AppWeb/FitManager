/**
 * SummaryApiService is responsible for fetching attendance summary data from the API.
 * It uses axios to retrieve the data and delegates transformation to the SummaryAssembler.
 * This service returns a Summary entity based on the API response.
 *
 * Author: Renzo Luque
 */

import { SummaryAssembler } from "./summary.assembler";
import axios from "axios";
import { Summary } from "../model/summary.entity";

export class SummaryApiService {
    /**
     * Fetches the summary data from the backend API.
     * Transforms the response into a Summary entity using the assembler.
     * @returns {Promise<Summary>} - Promise resolving to a Summary entity
     */
    getSummary() {
        return axios.get("http://localhost:3000/attendance")
            .then((response) => {
                const weeklyOverviewResource = response.data?.weekly_overview;
                const historicalSummaryResource = response.data?.historical_summary;

                // Validate the structure of the response before transformation
                if (!weeklyOverviewResource || !historicalSummaryResource) {
                    console.error("Invalid summary format");
                    return new Summary(); // Return empty Summary if response is invalid
                }

                const resourceForAssembler = {
                    weeklyOverview: weeklyOverviewResource,
                    historicalSummary: historicalSummaryResource
                };

                // Convert resource into a structured Summary entity
                return SummaryAssembler.toEntityFromResource(resourceForAssembler);
            })
            .catch((error) => {
                console.error("Error fetching summary:", error);
                // Return a default Summary entity in case of error
                return SummaryAssembler.toEntityFromResource({});
            });
    }
}
