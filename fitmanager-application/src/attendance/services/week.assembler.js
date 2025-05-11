import { WeeklyAttendance } from "../model/week.entity";
export class WeekAssembler {

    static toEntityFromResource(resource) {
        return new WeeklyAttendance(
            resource.lunes,
            resource.martes,
            resource.miercoles,
            resource.jueves,
            resource.viernes,
            resource.sabado,
            resource.domingo
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