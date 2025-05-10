/**
 * This file defines the TodayAttendanceApiService class.
 * It is responsible for retrieving today's attendance data from the API
 * and converting the raw response into structured TodayAttendance entities.
 *
 * Tomio Nakamurakare
 */

import axios from 'axios';
import { TodayAttendanceAssembler } from './today-attendance.assembler.js';

export class TodayAttendanceApiService {

    // Fetches today's attendance data from the API and transforms it into entity instances
    getTodayAttendance() {
        return axios.get('http://localhost:3000/dashboard/')
            .then(response => {
                const todayAttendance = response.data?.todayAttendance;
                if (!Array.isArray(todayAttendance)) {
                    console.error('Invalid todayAttendance format');
                    return [];
                }

                // Transform raw attendance data into structured entities
                return TodayAttendanceAssembler.toEntitiesFromResponse(todayAttendance);
            })
            .catch(error => {
                console.error('Error fetching today attendance:', error);
                throw error;
            });
    }
}
