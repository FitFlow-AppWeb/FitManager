import axios from "axios";
import { GeneralInfoAssembler } from "./general-info.assembler.js"; // Ajusta la ruta si es necesario

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