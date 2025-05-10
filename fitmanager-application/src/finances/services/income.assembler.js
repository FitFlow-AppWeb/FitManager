import { IncomeData } from "../model/income.entity.js";

export class IncomeAssembler {
    static toEntityFromResource(resource) {
        return new IncomeData(
            resource.date,
            resource.month,
            resource.year,
            resource.monthly,
            resource.quarterly,
            resource.yearly
        );
    }

    static toEntitiesFromResources(resources) {
        return resources.map(resource => this.toEntityFromResource(resource));
    }
}