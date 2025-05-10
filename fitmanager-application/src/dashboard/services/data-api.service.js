/**
 * This file defines the DataApiService class.
 * It is responsible for fetching dashboard statistics from the backend API
 * and transforming them into Data entity instances using the DataAssembler.
 *
 * Tomio Nakamurakare
 */

import axios from 'axios';
import { DataAssembler } from './data.assembler.js';

export class DataApiService {

    // Retrieves dashboard statistics from the API and converts them into Data entities
    getStatistics() {
        return axios.get('http://localhost:3000/dashboard/')
            .then(response => {
                const statistics = response.data?.statistics;
                if (!Array.isArray(statistics)) {
                    console.error('Invalid statistics format');
                    return [];
                }
                return DataAssembler.toEntitiesFromResponse(statistics);
            })
            .catch(error => {
                console.error('Error fetching statistics:', error);
                throw error;
            });
    }
}
