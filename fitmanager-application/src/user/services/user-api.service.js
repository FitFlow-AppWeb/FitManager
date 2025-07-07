import api from '../../login/services/api.js';

import { UserAssembler } from './user.assembler.js';

const USERS_ENDPOINT_PREFIX = '/api/v1/Users';

export class UserApiService {


    async getUserById(userId) {
        try {
            const response = await api.get(`${USERS_ENDPOINT_PREFIX}/${userId}`);
            return UserAssembler.toEntityFromResource(response.data.data);
        } catch (error) {
            console.error(`Error fetching user with ID ${userId}:`, error);
            throw error;
        }
    }

    async updateProfile(userId, userData) {
        try {
            const resourceToUpdate = UserAssembler.toResourceFromEntity(userData);

            resourceToUpdate.password = userData.password || "";

            const response = await api.put(`${USERS_ENDPOINT_PREFIX}/${userId}`, resourceToUpdate);
            return UserAssembler.toEntityFromResource(response.data.data);
        } catch (error) {
            console.error(`Error updating profile for user ${userId}:`, error);
            throw error;
        }
    }

    async getAllUsers() {
        try {
            const response = await api.get(USERS_ENDPOINT_PREFIX);
            return UserAssembler.toEntitiesFromResponse(response.data.data);
        } catch (error) {
            console.error('Error fetching all users:', error);
            throw error;
        }
    }


}