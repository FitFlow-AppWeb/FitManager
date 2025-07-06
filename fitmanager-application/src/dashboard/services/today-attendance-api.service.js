// src/services/today-attendance-api.service.js

import api from '../../login/services/api.js';
import { TodayAttendanceAssembler } from './today-attendance.assembler.js';

export class TodayAttendanceApiService {

    getTodayAttendance() {
        return api.get('/api/v1/attendances/raw-today')
            .then(response => {
                const rawData = response.data?.data || response.data;
                const allAttendanceRecords = Array.isArray(rawData) ? rawData : [];

                if (!Array.isArray(allAttendanceRecords)) {
                    console.error('Invalid attendance records format from API - Fallback triggered');
                    return [];
                }

                return TodayAttendanceAssembler.toHourlyOccupancyFromApiRecords(allAttendanceRecords);
            })
            .catch(error => {
                console.error('Error fetching today attendance:', error);
                if (error.response?.status === 401) {
                    console.error('Authentication error. Redirecting to login...');
                }
                throw error;
            });
    }
}