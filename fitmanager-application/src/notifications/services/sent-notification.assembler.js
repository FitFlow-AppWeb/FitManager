// sent-notification-assembler.js

import { SentNotification } from '../model/sent-notification.entity.js';

export class SentNotificationAssembler {
    static toEntityFromResource(resource) {
        return new SentNotification(
            resource.id,
            resource.title,
            resource.body,
            resource.recipients,
            resource.date,
            resource.status
        );
    }

    static toEntitiesFromResponse(response) {
        return response.map(this.toEntityFromResource);
    }
}
