/**
 * This file defines the TodayClassesAssembler class, responsible for
 * converting raw data objects into TodayClass entity instances.
 * It simulates the deserialization process used for API responses
 * that provide today's class schedule in a raw format.
 *
 * Tomio Nakamurakare
 */

import { TodayClass } from "../model/today-classes.entity.js";

export class TodayClassesAssembler {

    // Converts a single raw object to a TodayClass instance
    static toEntityFromResource(resource) {
        return new TodayClass(
            resource.hour,
            resource.classes || [] // Defaults to empty array if undefined
        );
    }

    // Converts an array of raw objects to an array of TodayClass instances
    static toEntitiesFromResponse(response) {
        if (!Array.isArray(response)) {
            console.error("Invalid todayClasses format");
            return [];
        }

        return response.map(this.toEntityFromResource);
    }
}
