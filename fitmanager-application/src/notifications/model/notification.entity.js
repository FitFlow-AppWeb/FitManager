/**
 * Notification Class Definition
 *
 * This class models a Notification entity with relevant attributes such as
 * ID, creation timestamp, title, and message.
 *
 * Author: [Tu Nombre]
 */
export class Notification {
    constructor(id, createdAt, title, message) {
        this.id = id;
        this.createdAt = createdAt; // Assuming this will be a Date object or string for display
        this.title = title;
        this.message = message;
    }

    // Optional: Add a method to format the creation date for display
    get formattedCreatedAt() {
        if (this.createdAt) {
            const date = new Date(this.createdAt);
            // Example: "YYYY-MM-DD HH:MM"
            return date.toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        }
        return 'N/A';
    }
}