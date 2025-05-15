/**
 * This file defines the ReceivedNotification class, which models a received notification entity.
 * It includes essential properties such as ID, title, body, sender, recipients, date, and the status of the notification.
 * The class is designed to help structure the data related to a received notification.
 *
 * Author: Victor Ortiz
 */

export class ReceivedNotification {
    constructor(id, title, body, sender, recipients, date, status = "unread") {
        this.id = id; // ID of the notification
        this.title = title; // Title of the notification
        this.body = body; // Body content of the notification
        this.sender = sender; // Sender of the notification
        this.recipients = recipients; // Array of recipients
        this.date = date; // Date when the notification was received
        this.status = status; // Status of the notification (read, unread)
    }
}
