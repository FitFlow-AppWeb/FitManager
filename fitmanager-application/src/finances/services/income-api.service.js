// 
// The `IncomeApiService` class is responsible for fetching income data from a remote server (via an API) and transforming it into entities.
// It has one primary method:
// 1. `getIncomeData()`: Makes a GET request to the `/finances` endpoint and retrieves the subscription income data. If the data is not an array or is missing, it logs an error. The valid data is then passed to the `IncomeAssembler` to convert it into structured `IncomeData` entities.
// 
// Author: Renzo Luque
//

import { IncomeAssembler} from "./income.assembler.js";
import axios from "axios";

export class IncomeApiService {
    getIncomeData() {
        return axios.get('https://fitmanager.onrender.com/finances')
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
