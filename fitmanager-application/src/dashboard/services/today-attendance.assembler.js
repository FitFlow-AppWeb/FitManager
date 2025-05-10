/**
 * This file defines the TodayAttendanceAssembler class.
 * It transforms raw attendance data into instances of the TodayAttendance entity.
 * This class is typically used to convert API response data into a structured format.
 *
 * Tomio Nakamurakare
 */

import { TodayAttendance } from "../model/today-attendance.entity.js";

export class TodayAttendanceAssembler {

    // Converts a single raw object into a TodayAttendance instance
    static toEntityFromResource(resource) {
        return new TodayAttendance(
            resource.hour,
            resource.value
        );
    }

    // Converts an array of raw attendance objects into an array of TodayAttendance instances
    static toEntitiesFromResponse(response) {
        if (!Array.isArray(response)) {
            console.error("Invalid response format for attendance data");
            return [];
        }
        return response.map(this.toEntityFromResource);
    }
}
