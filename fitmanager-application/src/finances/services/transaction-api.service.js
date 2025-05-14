// 
// The `TransactionApiService` class is responsible for making an HTTP request to fetch transaction data from an API.
// It processes the response by checking if the `transaction_history` field contains an array, and if so, it converts the data 
// into structured `Transaction` entities using the `TransactionAssembler`.
// If the response data is not in the expected format, it logs an error and returns an empty array.
// 
// Author: Renzo Luque
//

import axios from 'axios';
import { TransactionAssembler } from './transaction.assembler.js';

export class TransactionApiService {
    getTransactions() {
        return axios.get('http://localhost:3000/finances')
            .then(response => {
                const transactionHistoryArray = response.data?.transaction_history;

                if (!Array.isArray(transactionHistoryArray)) {
                    console.error('TransactionApiService:', transactionHistoryArray);
                    console.log('Response:', response.data); // For debugging
                    return [];
                }

                return TransactionAssembler.toEntitiesFromResources(transactionHistoryArray);
            })
            .catch(error => {
                console.error('Error fetching transactions:', error);
                return [];
            });
    }
}
