// sent-notification.entity.js

export class SentNotification {
    constructor(id, title, body, recipients, date, status = "sent") {
        this.id = id; // ID de la notificación
        this.title = title; // Título de la notificación
        this.body = body; // Cuerpo de la notificación
        this.recipients = recipients; // Array de destinatarios (puede ser un array de correos electrónicos o nombres)
        this.date = date; // Fecha en que se envió la notificación
        this.status = status; // Estado de la notificación (enviada, vista, etc.)
    }
}
