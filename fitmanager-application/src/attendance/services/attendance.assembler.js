import { Attendance } from '../model/attendance.entity.js';

export class AttendanceAssembler {
    /**
     * Converts a single raw attendance resource object from the backend into an Attendance entity.
     * @param {object} resource - The raw attendance resource object from the backend API.
     * Expected to have camelCase properties (e.g., id, entryTime).
     * @returns {Attendance} A new Attendance entity instance.
     */
    static oneFromBackend(resource) {
        return new Attendance({
            id: resource.id,
            entryTime: resource.entryTime,
            exitTime: resource.exitTime,
            memberId: resource.memberId,
            classId: resource.classId
        });
    }

    /**
     * Converts an array of raw attendance resource objects from the backend into an array of Attendance entities.
     * @param {Array<object>} response - An array of raw attendance resource objects from the backend API.
     * @returns {Array<Attendance>} An array of Attendance entity instances.
     */
    static manyFromBackend(response) {
        if (!Array.isArray(response)) {
            console.error("Expected an array for attendance response, but received:", response);
            return [];
        }
        return response.map(this.oneFromBackend);
    }
}