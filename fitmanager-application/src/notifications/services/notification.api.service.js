import api from '../../login/services/api.js'; // Adjust this path if necessary
import { NotificationAssembler } from './notification.assembler.js';

export class NotificationApiService {

    /**
     * Fetches all notifications sent to employees from the backend.
     * @returns {Promise<Array<Notification>>} A promise that resolves to an array of Notification entities.
     */
    async getAllEmployeeNotifications() {
        try {
            const response = await api.get('/api/v1/EmployeeNotifications');
            // The backend returns { message: ..., data: [...] }
            return NotificationAssembler.manyFromBackendResponse(response.data);
        } catch (error) {
            console.error('❌ Error fetching employee notifications from backend:', error);
            throw error; // Re-throw to be handled by the component
        }
    }

    /**
     * Fetches all notifications sent to members from the backend.
     * @returns {Promise<Array<Notification>>} A promise that resolves to an array of Notification entities.
     */
    async getAllMemberNotifications() {
        try {
            const response = await api.get('/api/v1/MemberNotifications');
            // The backend returns { message: ..., data: [...] }
            return NotificationAssembler.manyFromBackendResponse(response.data);
        } catch (error) {
            console.error('❌ Error fetching member notifications from backend:', error);
            throw error; // Re-throw to be handled by the component
        }
    }

    /**
     * Creates and sends a new notification to a list of employees.
     * @param {string} title - The title of the notification.
     * @param {string} message - The message content.
     * @param {Array<number>} employeeIds - Array of employee IDs.
     * @returns {Promise<any>} A promise that resolves with the backend response (e.g., success message).
     */
    async createEmployeeNotification(title, message, employeeIds) {
        try {
            const resource = NotificationAssembler.toCreateEmployeeNotificationResource(title, message, employeeIds);
            const response = await api.post('/api/v1/EmployeeNotifications', resource);
            console.log('✅ Employee notification created successfully:', response.data);
            return response.data; // Return the message object from the backend
        } catch (error) {
            console.error('❌ Error creating employee notification:', error.response ? error.response.data : error.message);
            throw error; // Re-throw to be handled by the component
        }
    }

    /**
     * Creates and sends a new notification to a list of members.
     * @param {string} title - The title of the notification.
     * @param {string} message - The message content.
     * @param {Array<number>} memberIds - Array of member IDs.
     * @returns {Promise<any>} A promise that resolves with the backend response (e.g., success message).
     */
    async createMemberNotification(title, message, memberIds) {
        try {
            const resource = NotificationAssembler.toCreateMemberNotificationResource(title, message, memberIds);
            const response = await api.post('/api/v1/MemberNotifications', resource);
            console.log('✅ Member notification created successfully:', response.data);
            return response.data; // Return the message object from the backend
        } catch (error) {
            console.error('❌ Error creating member notification:', error.response ? error.response.data : error.message);
            throw error; // Re-throw to be handled by the component
        }
    }
}