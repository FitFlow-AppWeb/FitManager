// src/notifications/services/notification.assembler.js

import { Notification } from '../model/notification.entity.js';

export class NotificationAssembler {

    /**
     * Converts a raw backend notification resource (e.g., MemberNotificationResource or EmployeeNotificationResource)
     * into a frontend Notification entity.
     * @param {object} raw - The raw notification object from the backend response.
     * @returns {Notification|null} A Notification entity or null if invalid data.
     */
    static fromBackendResource(raw) {
        // Based on the provided Swagger response, the notification details
        // (title, message) are directly in the raw resource, but with specific names.
        // Also, it seems the 'id' of the EmployeeNotification/MemberNotification itself is used,
        // and the notification's 'createdAt' might not be directly exposed in these specific resources
        // or might need to be inferred/handled differently.
        // For now, let's assume 'createdAt' is either coming or can be 'N/A' as a fallback.

        // If the 'raw' object contains 'notificationTitle' and 'notificationMessage', use them.
        // Otherwise, assume it directly contains 'title' and 'message' (for Notification aggregate itself if ever fetched directly)
        const id = raw.id; // This is the ID of the EmployeeNotification/MemberNotification
        const title = raw.notificationTitle || raw.title; // Map 'notificationTitle' to 'title'
        const message = raw.notificationMessage || raw.message; // Map 'notificationMessage' to 'message'
        const createdAt = raw.createdAt || 'N/A'; // Assuming createdAt might be missing or named differently

        if (id === undefined || !title || !message) {
            console.warn("Invalid notification resource received, missing ID, title, or message:", raw);
            return null;
        }

        // Use the ID of the EmployeeNotification/MemberNotification for the frontend entity,
        // as the Notification aggregate itself might not be directly fetched in these lists.
        return new Notification(
            id,
            createdAt, // You might need to adjust this if createdAt is available and named differently
            title,
            message
        );
    }

    /**
     * Converts an array of raw backend notification resources into an array of frontend Notification entities.
     * Assumes the backend response structure for lists is { message: ..., data: [...] }.
     * @param {object} response - The full response object from the backend (e.g., { message: ..., data: [...] }).
     * @returns {Array<Notification>} An array of Notification entities.
     */
    static manyFromBackendResponse(response) {
        if (!response || !Array.isArray(response.data)) {
            console.warn("Invalid response structure for many notifications, 'data' array not found:", response);
            return [];
        }
        return response.data.map(this.fromBackendResource).filter(n => n !== null);
    }

    /**
     * Creates a resource object suitable for sending to the backend when creating a new notification for employees.
     * @param {string} title - The title of the notification.
     * @param {string} message - The message content of the notification.
     * @param {Array<number>} employeeIds - An array of employee IDs to send the notification to.
     * @returns {object} The resource object for CreateEmployeeNotification.
     */
    static toCreateEmployeeNotificationResource(title, message, employeeIds) {
        // C# backend for notifications should handle CreatedAt
        return {
            title: title,
            message: message,
            employeeIds: employeeIds,
        };
    }

    /**
     * Creates a resource object suitable for sending to the backend when creating a new notification for members.
     * @param {string} title - The title of the notification.
     * @param {string} message - The message content of the notification.
     * @param {Array<number>} memberIds - An array of member IDs to send the notification to.
     * @returns {object} The resource object for CreateMemberNotification.
     */
    static toCreateMemberNotificationResource(title, message, memberIds) {
        // C# backend for notifications should handle CreatedAt
        return {
            title: title,
            message: message,
            memberIds: memberIds,
        };
    }
}