// src/assemblers/today-attendance.assembler.js
/**
 * This file defines the TodayAttendanceAssembler class.
 * It transforms raw attendance data into instances of the TodayAttendance entity,
 * implementing the logic to calculate hourly occupancy from entry and exit times.
 * /
 * Author: Tomio Nakamurakare
 */

import { TodayAttendance } from "../model/today-attendance.entity.js";

export class TodayAttendanceAssembler {

    /**
     * Helper to format a Date object into "HH:MM".
     * @param {Date} date - The date object.
     * @returns {string} Formatted hour string.
     */
    static formatHour(date) {
        // Los métodos getHours() y getMinutes() ya devuelven la hora y minuto LOCAL del objeto Date,
        // que es el comportamiento deseado para la visualización al usuario.
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    /**
     * Determines if a given date is today in the LOCAL timezone.
     * @param {Date} date - The date to check.
     * @returns {boolean} True if the date is today, false otherwise.
     */
    static isToday(date) {
        // 'today' se crea en la zona horaria local del navegador.
        // Los métodos getDate(), getMonth(), getFullYear() en 'date' (que fue creada a partir de UTC y luego ajustada por JS)
        // ya reflejan la fecha local del objeto Date.
        const today = new Date();
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    }

    /**
     * Converts an array of raw attendance records (with entryTime, exitTime) from the backend API
     * into an array of TodayAttendance instances, representing hourly occupancy for today.
     *
     * IMPORTANT: This implementation assumes the backend sends UTC times without the 'Z' indicator.
     * It manually appends 'Z' to force JavaScript's Date constructor to interpret them as UTC,
     * then leverages Date's native conversion to the user's local timezone for calculations.
     *
     * @param {Array<Object>} apiAttendanceRecords - An array of raw attendance objects from the API.
     * Each object should have 'entryTime' and 'exitTime' (ISO strings, potentially missing 'Z').
     * @returns {Array<TodayAttendance>} An array of TodayAttendance instances, representing today's hourly occupancy.
     */
    static toHourlyOccupancyFromApiRecords(apiAttendanceRecords) {
        if (!Array.isArray(apiAttendanceRecords)) {
            console.error("Invalid input: apiAttendanceRecords must be an array.");
            return [];
        }

        const hourlyOccupancyMap = new Map();
        for (let i = 0; i < 24; i++) {
            const hourKey = `${i.toString().padStart(2, '0')}:00`;
            hourlyOccupancyMap.set(hourKey, 0);
        }

        apiAttendanceRecords.forEach(record => {
            // *** INICIO DE LA MODIFICACIÓN CLAVE ***
            // Verifica si la cadena ya tiene 'Z' o un offset. Si no, asume que es UTC y añade 'Z'.
            // Esto es crucial para que new Date() interprete la cadena como UTC.
            const entryTimeIso = record.entryTime.endsWith('Z') || /[+-]\d{2}:\d{2}$/.test(record.entryTime) ? record.entryTime : record.entryTime + 'Z';
            const exitTimeIso = record.exitTime.endsWith('Z') || /[+-]\d{2}:\d{2}$/.test(record.exitTime) ? record.exitTime : record.exitTime + 'Z';

            const entryDate = new Date(entryTimeIso);
            const exitDate = new Date(exitTimeIso);
            // *** FIN DE LA MODIFICACIÓN CLAVE ***


            // El resto de la lógica utiliza los métodos de fecha que ya ajustan a la zona horaria local del navegador.
            if (TodayAttendanceAssembler.isToday(entryDate)) {
                let currentHour = entryDate.getHours(); // Hora LOCAL del inicio del registro
                const exitHour = exitDate.getHours();    // Hora LOCAL del fin del registro

                // Esto asegura que si una salida se extiende al día siguiente (localmente), solo se cuente hasta el final del día actual.
                // Es importante que la fecha límite (23:59:59) sea también en la zona horaria local del día de entrada.
                const effectiveExitDate = TodayAttendanceAssembler.isToday(exitDate) ? exitDate : new Date(
                    entryDate.getFullYear(),
                    entryDate.getMonth(),
                    entryDate.getDate(),
                    23, 59, 59 // Final del día de entrada, en la zona local del objeto Date.
                );


                while (currentHour <= effectiveExitDate.getHours()) {
                    const hourKey = `${currentHour.toString().padStart(2, '0')}:00`;
                    if (hourlyOccupancyMap.has(hourKey)) {
                        hourlyOccupancyMap.set(hourKey, hourlyOccupancyMap.get(hourKey) + 1);
                    }
                    currentHour++;
                }
            }
        });

        const sortedHours = Array.from(hourlyOccupancyMap.keys()).sort();
        return sortedHours.map(hour => new TodayAttendance(hour, hourlyOccupancyMap.get(hour)));
    }

    static toEntityFromResource(resource) {
        return new TodayAttendance(
            resource.hour,
            resource.value
        );
    }

    static toEntitiesFromResponse(response) {
        if (!Array.isArray(response)) {
            console.error("Invalid response format for attendance data");
            return [];
        }
        return response.map(this.toEntityFromResource);
    }
}