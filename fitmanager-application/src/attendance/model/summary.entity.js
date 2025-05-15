/**
 * Summary class that encapsulates weekly attendance data and historical statistics.
 * Designed to be used as a data model for reporting or dashboards.
 *
 * Author: Renzo Luque
 */

export class Summary {
    constructor(
        weeklyOverview = {
            asistencias_lunes: 0,      // Monday attendance
            asistencias_martes: 0,     // Tuesday attendance
            asistencias_miercoles: 0,  // Wednesday attendance
            asistencias_jueves: 0,     // Thursday attendance
            asistencias_viernes: 0,    // Friday attendance
            asistencias_sabado: 0,     // Saturday attendance
            asistencias_domingo: 0     // Sunday attendance
        },
        historicalSummary = {
            average_daily_attendance: 0, // Average number of attendees per day
            average_daily_absences: 0,   // Average number of absences per day
            overall_attendance_rate: '', // Attendance rate percentage (e.g. "85%")
            average_peak_time: '',       // Most common peak attendance time (e.g. "10:00 AM")
            max_attendance: 0,           // Highest number of attendees recorded in a day
            min_attendance: 0,           // Lowest number of attendees recorded in a day
            most_frequent_user: ''       // User with the highest attendance frequency
        }
    ) {
        this.weeklyOverview = weeklyOverview;
        this.historicalSummary = historicalSummary;
    }
}
