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
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    /**
     * Determines if a given date is today.
     * @param {Date} date - The date to check.
     * @returns {boolean} True if the date is today, false otherwise.
     */
    static isToday(date) {
        const today = new Date();
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    }

    /**
     * Converts an array of raw attendance records (with entryTime, exitTime) from the backend API
     * into an array of TodayAttendance instances, representing hourly occupancy for today.
     *
     * @param {Array<Object>} apiAttendanceRecords - An array of raw attendance objects from the API.
     * Each object should have 'entryTime' and 'exitTime' (ISO strings).
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
            const entryDate = new Date(record.entryTime);
            const exitDate = new Date(record.exitTime);

            if (TodayAttendanceAssembler.isToday(entryDate)) {
                let currentHour = entryDate.getHours();
                const exitHour = exitDate.getHours();

                const effectiveExitDate = TodayAttendanceAssembler.isToday(exitDate) ? exitDate : new Date(entryDate.getFullYear(), entryDate.getMonth(), entryDate.getDate(), 23, 59, 59);

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