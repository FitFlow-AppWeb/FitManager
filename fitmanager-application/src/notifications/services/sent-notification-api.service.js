// sent-notification-api.service.js
import axios from 'axios';
import { SentNotificationAssembler } from './sent-notification.assembler.js';

export class SentNotificationApiService {
    getAllSentNotifications() {
        return axios.get('http://localhost:3004/sentnotification')
            .then(response => SentNotificationAssembler.toEntitiesFromResponse(response.data))
            .catch(error => {
                console.error('Error fetching sent notifications:', error);
                throw error;
            });
    }

    addSentNotification(notification) {
        return axios.post("http://localhost:3004/sentnotification", notification);
    }

    updateSentNotification(notification) {
        return axios.put(`http://localhost:3004/sentnotification/${notification.id}`, notification)
            .catch(error => {
                console.error('Error updating sent notification:', error);
                throw error;
            });
    }

    deactivateSentNotification(notification) {
        return axios.patch(`http://localhost:3004/sentnotification/${notification.id}`, {
            status: "inactive"
        });
    }
}
