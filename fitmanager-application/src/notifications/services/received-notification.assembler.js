/**
 * This file contains the ReceivedNotificationAssembler class, which is responsible for transforming
 * raw data (such as from an API response) into instances of the ReceivedNotification class.
 * The class contains methods to convert a single resource or an array of resources into
 * ReceivedNotification entities.
 *
 * Author: Victor Ortiz
 */

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
