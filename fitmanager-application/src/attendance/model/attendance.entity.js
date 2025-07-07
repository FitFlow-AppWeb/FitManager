/**
 * Attendance Class
 *
 * This class defines an attendance record object, representing a member's presence
 * in a specific class. It includes details such as a unique ID, entry and exit times,
 * and references to the associated member and class.
 *
 * The constructor initializes the attendance record with properties based on the
 * backend's AttendanceResource structure, making it suitable for data transfer
 * and client-side manipulation.
 *
 * Author: Tomio Nakamurakare
 */
export class Attendance {
    constructor({
                    id,
                    entryTime,
                    exitTime,
                    memberId,
                    classId
                }) {
        this.id = id;
        this.entryTime = entryTime ? new Date(entryTime) : null;
        this.exitTime = exitTime ? new Date(exitTime) : null;
        this.memberId = memberId;
        this.classId = classId;
    }

    toBackendFormat() {
        return {
            id: this.id,
            entryTime: this.entryTime ? this.entryTime.toISOString() : null,
            exitTime: this.exitTime ? this.exitTime.toISOString() : null,
            memberId: this.memberId,
            classId: this.classId
        };
    }

    isMarked() {
        return this.entryTime !== null && this.exitTime !== null;
    }

    getDurationInMinutes() {
        if (this.entryTime && this.exitTime) {
            const diffMs = this.exitTime.getTime() - this.entryTime.getTime();
            return Math.round(diffMs / (1000 * 60));
        }
        return null;
    }
}