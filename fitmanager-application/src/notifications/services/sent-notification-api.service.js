/**
 * This file contains the SentNotificationApiService class, which is responsible for interacting with
 * the backend API to fetch, create, update, and deactivate sent notifications. It makes HTTP requests
 * to the API and processes the responses using the SentNotificationAssembler class to convert raw data
 * into properly structured SentNotification entities.
 *
 * Author: Victor Ortiz
 */

import axios from 'axios';
import { SentNotificationAssembler } from './sent-notification.assembler.js';

export class SentNotificationApiService {
    getAllSentNotifications() {
        return axios.get('http://localhost:3000/sentnotification')
            .then(response => SentNotificationAssembler.toEntitiesFromResponse(response.data))
            .catch(error => {
                console.error('Error fetching sent notifications:', error);
                throw error;
            });
    }

    addSentNotification(notification) {
        return axios.post("http://localhost:3000/sentnotification", notification);
    }

    updateSentNotification(notification) {
        return axios.put(`http://localhost:3000/sentnotification/${notification.id}`, notification)
            .catch(error => {
                console.error('Error updating sent notification:', error);
                throw error;
            });
    }

    deactivateSentNotification(notification) {
        return axios.patch(`http://localhost:3000/sentnotification/${notification.id}`, {
            status: "inactive"
        });
    }
}
