/**
 * WeekApiService is responsible for retrieving weekly attendance heatmap data from the API.
 * It uses axios to perform the HTTP request and transforms the data using the WeekAssembler.
 *
 * Author: Renzo Luque
 */

import axios from "axios";
import { WeekAssembler } from "./week.assembler";

export class WeekApiService {
    /**
     * Fetches weekly attendance heatmap data from the backend API.
     * Transforms the response into a WeeklyAttendance entity.
     * @returns {Promise<WeeklyAttendance>} - A promise that resolves to a WeeklyAttendance instance
     */
    getWeekAttendance() {
        return axios.get("http://localhost:3000/attendance")
            .then((response) => {
                const heatmapResource = response.data?.weekly_heatmap;

                // Validate that the heatmap data is a proper object
                if (typeof heatmapResource !== 'object') {
                    console.error("Invalid weekly_heatmap format");
                    return WeekAssembler.toEntityFromResource({});
                }

                // Transform the valid resource into a WeeklyAttendance entity
                const weekly_heatmap_entity = WeekAssembler.toEntityFromResource(heatmapResource);
                return weekly_heatmap_entity;
            })
            .catch((error) => {
                console.error("Error fetching week attendance:", error);
                throw error; // Propagate the error for further handling
            });
    }
}
