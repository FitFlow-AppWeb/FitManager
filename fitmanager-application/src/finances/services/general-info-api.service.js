// 
// The `GeneralInfoApiService` class is responsible for fetching financial data from an API and processing it into entities.
// It has a method called `getFinancialData` that does the following:
// 1. Sends a GET request to the endpoint `http://localhost:3000/finances` to retrieve financial data.
// 2. Extracts the `monthly_summary` and `overall_summary` from the API response.
// 3. If the `monthly_summary` is valid (an array), it transforms it into `GeneralInfo` entities using the `GeneralInfoAssembler`.
// 4. Returns an object containing both the monthly financial data (as entities) and the overall summary data.
// 5. In case of an error, logs it to the console and returns an empty monthly array and a null overall summary.
// 
// Author: Renzo Luque
//

import axios from "axios";
import { GeneralInfoAssembler } from "./general-info.assembler.js";

export class GeneralInfoApiService {
    getFinancialData() {
        return axios.get('http://localhost:3000/finances')
            .then((response) => {

                const monthlySummariesData = response.data?.general_information?.monthly_summary;
                const overallSummaryData = response.data?.general_information?.overall_summary;

                if (!Array.isArray(monthlySummariesData)) {
                    console.error('Error:', monthlySummariesData);
                    return {
                        monthly: [],
                        overall: overallSummaryData || null
                    };
                }

                const monthlyEntities = GeneralInfoAssembler.toEntitiesFromResources(monthlySummariesData);

                return {
                    monthly: monthlyEntities,
                    overall: overallSummaryData || null
                };
            })
            .catch((error) => {
                console.error('Error completo al obtener datos de /finances:', error);
                if (error.response) {
                    console.error('Error response data:', error.response.data);
                    console.error('Error response status:', error.response.status);
                } else if (error.request) {
                    console.error('Error request:', error.request);
                } else {
                    console.error('Error message:', error.message);
                }
                return { monthly: [], overall: null };
            });
    }
}
