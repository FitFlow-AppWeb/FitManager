// src/login/services/auth-assembler.js
import {AuthUser} from "../model/auth-user.entity.js";

export class AuthAssembler {
    /**
     * Convert authentication resource into AuthUser entity.
     * @param {Object} resource
     * @param {number|string} resource.id
     * @param {string} resource.email
     * @param {string} resource.token
     * @returns {AuthUser}
     */
    static toEntity(resource) {
        return new AuthUser({
            id:    resource.id,
            email: resource.email,
            token: resource.token
        });
    }
}