/**
 * This file defines the TodayClassesApiService class, responsible for
 * retrieving today's class schedule from the backend API.
 * It uses axios to perform the HTTP request and delegates the
 * transformation of raw data to the TodayClassesAssembler.
 *
 * Tomio Nakamurakare
 */

import axios from 'axios';
import { TodayClassesAssembler } from './today-classes.assembler.js';

export class TodayClassesApiService {

    // Fetches today's classes from the API and converts them to entity objects
    getTodayClasses() {
        return axios.get('http://localhost:3000/dashboard/')
            .then(response => {
                const todayClasses = response.data?.todayClasses;

                // Validate response structure
                if (!Array.isArray(todayClasses)) {
                    console.error('Invalid todayClasses format');
                    return [];
                }

                // Convert raw data to entity instances
                return TodayClassesAssembler.toEntitiesFromResponse(todayClasses);
            })
            .catch(error => {
                console.error('Error fetching todayClasses:', error);
                throw error;
            });
    }
}
