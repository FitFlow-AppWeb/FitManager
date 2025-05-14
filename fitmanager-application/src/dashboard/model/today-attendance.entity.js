/**
 * This file defines the TodayAttendance class.
 * It represents a single attendance data point for a specific hour of the day.
 *
 * Attributes:
 * - hour:  The hour label (e.g., "08:00", "14:30") representing the time slot
 * - value: The number of attendees recorded during that hour
 *
 * This model is used to build time-based attendance charts on the dashboard.
 * /
 * Author: Tomio Nakamurakare
 */

export class TodayAttendance {
    constructor(hour, value) {
        this.hour = hour;
        this.value = value;
    }
}
