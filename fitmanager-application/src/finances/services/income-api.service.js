import { IncomeAssembler} from "./income.assembler.js";
import axios from "axios";

export class IncomeApiService {
    getIncomeData() {
        return axios.get('http://localhost:3000/finances')
            .then((response) => {

                const subscriptionIncomeArray = response.data?.subscription_income;

                if (!Array.isArray(subscriptionIncomeArray)) {
                    console.error('Error: subscription_income is not an array or not found. Data received:', response.data);
                    return [];
                }

                return IncomeAssembler.toEntitiesFromResources(subscriptionIncomeArray);
            })
            .catch((error) => {
                console.error('Error fetching income data from /finances:', error);
                if (error.response) {
                    console.error('Error response data:', error.response.data);
                    console.error('Error response status:', error.response.status);
                } else if (error.request) {
                    console.error('Error request:', error.request);
                } else {
                    console.error('Error message:', error.message);
                }
                return [];
            });
    }
}