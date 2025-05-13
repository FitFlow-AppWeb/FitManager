// received-notification.entity.js

export class ReceivedNotification {
    constructor(id, title, body, sender, recipients, date, status = "unread") {
        this.id = id; // ID de la notificación
        this.title = title; // Título de la notificación
        this.body = body; // Cuerpo de la notificación
        this.sender = sender; // Remitente de la notificación
        this.recipients = recipients; // Array de destinatarios
        this.date = date; // Fecha en que se recibió la notificación
        this.status = status; // Estado de la notificación (leída, no leída)
    }
}
