// received-notification-assembler.js

import { ReceivedNotification } from '../model/received-notification.entity.js';

export class ReceivedNotificationAssembler {
    static toEntityFromResource(resource) {
        return new ReceivedNotification(
            resource.id,
            resource.title,
            resource.body,
            resource.sender,
            resource.recipients,
            resource.date,
            resource.status
        );
    }

    static toEntitiesFromResponse(response) {
        return response.map(this.toEntityFromResource);
    }
}
