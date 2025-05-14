/**
 * This file defines the SentNotification class, which is used to represent a sent notification.
 * It includes the essential properties like ID, title, body, recipients, date, and status of the notification.
 * This class models a notification that has been sent to one or more recipients.
 *
 * Author: Victor Ortiz
 */

export class SentNotification {
    constructor(id, title, body, recipients, date, status = "sent") {
        this.id = id; // ID of the notification
        this.title = title; // Title of the notification
        this.body = body; // Body content of the notification
        this.recipients = recipients; // Array of recipients (can be emails or names)
        this.date = date; // Date when the notification was sent
        this.status = status; // Status of the notification (sent, viewed, etc.)
    }
}
