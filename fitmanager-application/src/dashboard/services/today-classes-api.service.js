/**
 * This file defines the TodayClassesApiService class, responsible for
 * retrieving today's class schedule from the backend API.
 * It uses the pre-configured API instance to perform the HTTP request and delegates the
 * transformation of raw data to the TodayClassesAssembler.
 * /
 * Tomio Nakamurakare
 */


import api from '../../login/services/api.js';
import { TodayClassesAssembler } from './today-classes.assembler.js';

export class TodayClassesApiService {

    getTodayClasses() {
        return api.get('/api/v1/Classes')
            .then(response => {
                const classesData = response.data.data;

                if (!Array.isArray(classesData)) {
                    console.error('Invalid classes data format from API');
                    return [];
                }

                // *** CAMBIO AQUÍ: Corrige el nombre de la función ***
                return TodayClassesAssembler.toTodayClassesFromApiClasses(classesData);
            })
            .catch(error => {
                console.error('Error fetching todayClasses:', error);
                if (error.response?.status === 401) {
                    console.error('Authentication error. Redirecting to login...');
                }
                throw error;
            });
    }
}