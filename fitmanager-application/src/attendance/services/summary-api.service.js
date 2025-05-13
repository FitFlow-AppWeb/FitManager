import { SummaryAssembler } from "./summary.assembler";
import axios from "axios";

export class SummaryApiService {
    getSummary() {
        return axios.get("http://localhost:3000/attendance")
            .then((response) => {
                const weeklyOverviewResource = response.data?.weekly_overview;
                const historicalSummaryResource = response.data?.historical_summary;

                if (!weeklyOverviewResource || !historicalSummaryResource) {
                    console.error("Invalid summary format");
                    return new Summary();
                }

                const resourceForAssembler = {
                    weeklyOverview: weeklyOverviewResource,
                    historicalSummary: historicalSummaryResource
                }
                
                return SummaryAssembler.toEntityFromResource(resourceForAssembler);
            })
            .catch((error) => {
                console.error("Error fetching summary:", error);
                return SummaryAssembler.toEntityFromResource({});
            });
    }
}

