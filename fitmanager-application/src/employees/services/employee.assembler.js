import { Employee } from '../model/employee.entity.js';

export class EmployeeAssembler {
    static toEntityFromResource(resource) {
        return new Employee(
            resource.id,
            resource.fullName,
            resource.age,
            resource.role,
            resource.hourlyWage,
            resource.hoursPerWeek,
            resource.dni,
            resource.email,
            resource.phone,
            resource.address,
            resource.profilePicture,
            resource.specialties || [],
            resource.certifications || []
        );
    }

    static toEntitiesFromResponse(response) {
        return response.map(this.toEntityFromResource);
    }
}
