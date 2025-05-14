/**
 * This file defines the TodayClass class.
 * It represents the scheduled classes for a specific hour during the current day.
 *
 * Attributes:
 * - hour:    The hour of the day (e.g., "10:00", "15:30")
 * - classes: An array of class names or codes scheduled at that hour
 *
 * This model is used to populate the "Today's Classes" table in the dashboard.
 * /
 * Author: Tomio Nakamurakare
 */

export class TodayClass {
    constructor(hour, classes) {
        this.hour = hour;
        this.classes = classes;
    }
}
