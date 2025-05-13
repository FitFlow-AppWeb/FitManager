import axios from 'axios';
import { UserAssembler } from './user.assembler.js';

export class UserApiService {
    async getAllUsers() {
        try {
            const response = await axios.get('http://localhost:3000/users');
            return UserAssembler.toEntitiesFromResponse(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    }

    async updateUserSettings(userId, newSettings) {
        try {
            const response = await axios.get(`http://localhost:3000/users/${userId}`);
            const user = response.data;

            user.settings = { ...user.settings, ...newSettings };
            console.log(user.settings);
            const updateResponse = await axios.put(`http://localhost:3000/users/${userId}`, user);
            return updateResponse.data;
        } catch (error) {
            console.error(`Error updating settings for user ${userId}:`, error);
            throw error;
        }
    }

    async getUserById(user_id) {
        try {
            const response = await axios.get(`http://localhost:3000/users/${user_id}`);
            return UserAssembler.toEntityFromResource(response.data);
        } catch (error) {
            console.error(`Error fetching user with ID ${user_id}:`, error);
            throw error;
        }
    }

}