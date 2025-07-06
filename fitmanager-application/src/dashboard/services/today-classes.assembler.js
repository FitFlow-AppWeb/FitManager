/**
 * This file defines the TodayClassesAssembler class, responsible for
 * converting raw data objects (Class entities from backend API) into TodayClass entity instances.
 * It transforms a list of full class objects into a summarized schedule grouped by hour for the current day.
 */

import { TodayClass } from "../model/today-classes.entity.js";

export class TodayClassesAssembler {

    static formatHour(dateString) {
        const date = new Date(dateString);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    static isToday(dateString) {
        const classDate = new Date(dateString);
        const today = new Date();
        classDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);
        return classDate.getTime() === today.getTime();
    }


    /**
     * Converts an array of Class entities from the backend API into an array of TodayClass instances.
     * This method filters for today's classes, groups them by hour, and extracts their names.
     * @param {Array<Object>} apiClasses - An array of raw Class objects received from the backend API.
     * @returns {Array<TodayClass>} An array of TodayClass instances, representing today's schedule.
     */
    static toTodayClassesFromApiClasses(apiClasses) {
        if (!Array.isArray(apiClasses)) {
            console.error("Invalid input: apiClasses must be an array.");
            return [];
        }

        const todayScheduleMap = new Map();

        apiClasses.forEach(classItem => {
            if (classItem.startDate && TodayClassesAssembler.isToday(classItem.startDate)) {
                const hour = TodayClassesAssembler.formatHour(classItem.startDate);
                const className = classItem.name;

                if (!todayScheduleMap.has(hour)) {
                    todayScheduleMap.set(hour, []);
                }
                todayScheduleMap.get(hour).push(className);
            }
        });

        const sortedHours = Array.from(todayScheduleMap.keys()).sort();

        return sortedHours.map(hour => {
            const classesForHour = todayScheduleMap.get(hour);
            return new TodayClass(hour, classesForHour);
        });
    }


}