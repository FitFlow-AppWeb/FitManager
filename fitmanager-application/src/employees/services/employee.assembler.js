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
    static oneFromBackend(resource) {
        return new Employee({
            id: resource.id,
            firstName: resource.firstName,
            lastName: resource.lastName,
            age: resource.age,
            dni: resource.dni,
            phoneNumber: resource.phoneNumber,
            address: resource.address,
            email: resource.email,
            password: resource.password || "",
            wage: resource.wage,
            role: resource.role,
            workHours: resource.workHours,
            profilePicture: resource.profilePicture || "",
            specialties: resource.specialties || [],
            certifications: resource.certifications || []
        });
    }

    static manyFromBackend(response) {
        return response.map(this.oneFromBackend);
    }
}
