/**
 * Employee Assembler Class
 *
 * This class provides methods for converting raw resource data into Employee entity objects.
 * It includes two main methods:
 * - `toEntityFromResource`: Converts a single resource object into an `Employee` entity.
 * - `toEntitiesFromResponse`: Converts a list of resource objects into an array of `Employee` entities.
 * These methods help in structuring the data into a more usable form for the application.
 *
 * Author: Cassius Martel
 */

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
