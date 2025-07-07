/**
 * Supply Purchase API Service
 *
 * This service handles all API calls related to **Supply Purchases**. It provides methods
 * for creating new supply purchase records and fetching existing ones from the backend.
 * It uses `axios` for HTTP requests and `SupplyPurchaseAssembler` to format the data
 * into **SupplyPurchase** entities for consistency within the application.
 *
 * The methods include:
 * - `createSupplyPurchase`: Sends new supply purchase data to the backend for creation.
 * - `getAllSupplyPurchases`: Retrieves all supply purchase records from the backend.
 *
 * Author: Tomio Nakamurakare
 */
import axios from 'axios';
import { SupplyPurchaseAssembler } from './supply-purchase.assembler.js';

const BASE_URL = 'https://app-250707032508.azurewebsites.net';

export class SupplyPurchaseApiService {
    async createSupplyPurchase(supplyPurchaseData) {
        try {
            const response = await axios.post(`${BASE_URL}/api/v1/SupplyPurchase`, supplyPurchaseData);
            return SupplyPurchaseAssembler.oneFromBackend(response.data);
        } catch (error) {
            console.error('Error creating supply purchase:', error);
            throw error;
        }
    }

    async getAllSupplyPurchases() {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/SupplyPurchase`);
            return SupplyPurchaseAssembler.manyFromBackend(response.data);
        } catch (error) {
            console.error('Error fetching supply purchases:', error);
            throw error;
        }
    }
}