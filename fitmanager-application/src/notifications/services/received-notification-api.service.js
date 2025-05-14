// received-notification-api.service.js
import axios from 'axios';
import { ReceivedNotificationAssembler } from './received-notification.assembler.js';

export class ReceivedNotificationApiService {
    getAllReceivedNotifications() {
        return axios.get('http://localhost:3000/receivednotification')
            .then(response => ReceivedNotificationAssembler.toEntitiesFromResponse(response.data))
            .catch(error => {
                console.error('Error fetching received notifications:', error);
                throw error;
            });
    }

    addReceivedNotification(notification) {
        return axios.post("http://localhost:3000/receivednotification", notification);
    }

    updateReceivedNotification(notification) {
        return axios.put(`http://localhost:3000/receivednotification/${notification.id}`, notification)
            .catch(error => {
                console.error('Error updating received notification:', error);
                throw error;
            });
    }

    markAsReadReceivedNotification(notification) {
        return axios.patch(`http://localhost:3000/receivednotification/${notification.id}`, {
            status: "read"
        });
    }
}
