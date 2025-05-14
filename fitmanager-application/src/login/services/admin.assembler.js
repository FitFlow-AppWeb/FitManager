/**
 * Este archivo contiene la clase AdminAssembler, que es responsable de
 * convertir objetos de datos simples en instancias de la entidad Admin.
 * Se utiliza para simular la deserialización de datos de una respuesta de una API falsa.
 *
 * Cassius Martel
 */

import { Admin } from '../model/admin.entity.js';

export class AdminAssembler {
    static toEntityFromResource(resource) {
        return new Admin(
            resource.id,
            resource.fullName,
            resource.email,
            resource.password,
            resource.role,
            resource.lastLoginDate,
            resource.phone,
            resource.address,
            resource.profilePicture
        );
    }

    static toEntitiesFromResponse(response) {
        return response.map(this.toEntityFromResource);
    }
}
