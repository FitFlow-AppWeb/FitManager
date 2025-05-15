/**
 * This file contains the ReceivedNotificationApiService class, which handles the interaction
 * with the backend API for managing received notifications. It includes methods for fetching,
 * adding, updating, and marking notifications as read. The responses from the API are processed
 * and converted into ReceivedNotification entities using the ReceivedNotificationAssembler.
 *
 * Author: Victor Ortiz
 */

import axios from 'axios';
import { ReceivedNotificationAssembler } from './received-notification.assembler.js';

export class ReceivedNotificationApiService {
    getAllReceivedNotifications() {
        return axios.get('https://fitmanager.onrender.com/receivednotification')
            .then(response => ReceivedNotificationAssembler.toEntitiesFromResponse(response.data))
            .catch(error => {
                console.error('Error fetching received notifications:', error);
                throw error;
            });
    }

    addReceivedNotification(notification) {
        return axios.post("https://fitmanager.onrender.com/receivednotification", notification);
    }

    updateReceivedNotification(notification) {
        return axios.put(`https://fitmanager.onrender.com/receivednotification/${notification.id}`, notification)
            .catch(error => {
                console.error('Error updating received notification:', error);
                throw error;
            });
    }

    markAsReadReceivedNotification(notification) {
        return axios.patch(`https://fitmanager.onrender.com/receivednotification/${notification.id}`, {
            status: "read"
        });
    }
}
