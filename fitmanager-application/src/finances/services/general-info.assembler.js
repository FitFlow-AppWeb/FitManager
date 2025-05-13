import {GeneralInfo} from '../model/general-info.entity.js';

export class GeneralInfoAssembler {
    static toEntityFromResource(resource) {
        return new GeneralInfo(
            resource.month,
            resource.year,
            resource.total_income,
            resource.total_expenses,
            resource.earnings,
            resource.membership_income_breakdown
        );
    }

    static toEntitiesFromResources(resources) {
        return resources.map(resource => this.toEntityFromResource(resource));
    }
}