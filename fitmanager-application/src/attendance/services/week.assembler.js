/**
 * WeekAssembler is a utility class for transforming raw weekly attendance data
 * into WeeklyAttendance entities. It handles both single resources and arrays of resources.
 *
 * Author: Renzo Luque
 */

import { WeeklyAttendance } from "../model/week.entity";

export class WeekAssembler {

    /**
     * Converts a single raw resource object into a WeeklyAttendance entity.
     * If the resource is missing or null, returns an empty WeeklyAttendance.
     * @param resource - Raw resource with day-by-day attendance data
     * @returns {WeeklyAttendance} - Instance of WeeklyAttendance
     */
    static toEntityFromResource(resource) {
        if (!resource) {
            return new WeeklyAttendance(); // Return empty entity if resource is invalid
        }

        return new WeeklyAttendance(
            resource.Lunes,      // Monday data
            resource.Martes,     // Tuesday data
            resource.Miercoles,  // Wednesday data
            resource.Jueves,     // Thursday data
            resource.Viernes,    // Friday data
            resource.Sabado,     // Saturday data
            resource.Domingo     // Sunday data
        );
    }

    /**
     * Converts an array of raw resource objects into an array of WeeklyAttendance entities.
     * Logs an error and returns an empty array if the response is not an array.
     * @param response - Array of raw weekly attendance objects
     * @returns {WeeklyAttendance[]} - Array of WeeklyAttendance instances
     */
    static toEntitiesFromResponse(response) {
        if (!Array.isArray(response)) {
            console.error("Invalid response format for attendance data");
            return [];
        }

        return response.map(this.toEntityFromResource);
    }
}
