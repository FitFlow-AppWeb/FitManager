import { WeeklyAttendance } from "../model/week.entity";
export class WeekAssembler {

    static toEntityFromResource(resource) {

        if (!resource) {
            return new WeeklyAttendance();
        }

        return new WeeklyAttendance(
            resource.Lunes,
            resource.Martes,
            resource.Miercoles,
            resource.Jueves,
            resource.Viernes,
            resource.Sabado,
            resource.Domingo
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