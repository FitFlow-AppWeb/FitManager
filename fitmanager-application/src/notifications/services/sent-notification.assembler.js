/**
 * This file contains the SentNotificationAssembler class, which is responsible for converting
 * plain data objects into instances of the SentNotification entity. It is used to simulate
 * the deserialization of data from a fake API response, allowing the application to work with
 * properly structured notification objects.
 *
 * Author: Victor Ortiz
 */

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
