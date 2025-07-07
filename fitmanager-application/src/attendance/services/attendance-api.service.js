import api from '../../login/services/api.js';
import { AttendanceAssembler } from './attendance.assembler.js';

export class AttendanceApiService {
    /**
     * Fetches all attendance records from the backend API.
     * It uses the AttendanceAssembler to convert the raw backend response
     * into an array of Attendance entity objects for the frontend.
     * @returns {Promise<Array<Attendance>>} A promise that resolves to an array of Attendance entities.
     * @throws {Error} If the API call fails.
     */
    getAllAttendanceRecords() {
        return api.get('/api/v1/Attendances')
            .then(res => {
                return AttendanceAssembler.manyFromBackend(res.data.data);
            })
            .catch(error => {
                console.error('❌ Error fetching all attendance records from backend:', error);
                throw error;
            });
    }
}