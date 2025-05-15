/**
 * WeeklyAttendance class stores attendance data for each day of the week.
 * Each day is represented as an object that can hold detailed attendance records.
 * This class is designed to be used as a data structure for organizing daily attendance.
 *
 * Author: Renzo Luque
 */

export class WeeklyAttendance {
    constructor(
        lunes = {},     // Monday attendance data
        martes = {},    // Tuesday attendance data
        miercoles = {}, // Wednesday attendance data
        jueves = {},    // Thursday attendance data
        viernes = {},   // Friday attendance data
        sabado = {},    // Saturday attendance data
        domingo = {}    // Sunday attendance data
    ) {
        this.lunes = lunes;
        this.martes = martes;
        this.miercoles = miercoles;
        this.jueves = jueves;
        this.viernes = viernes;
        this.sabado = sabado;
        this.domingo = domingo;
    }
}
