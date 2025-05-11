import { Summary } from "../model/summary.entity";

export class SummaryAssembler {
    static toEntityFromResource(resource) {
        return new Summary(
            resource.weeklyOverview,
            resource.historicalSummary
        );
    }

    static toEntitiesFromResponse(response) {
        return response.map(this.toEntityFromResource);
    }
}
