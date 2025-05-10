import axios from 'axios';
import { TransactionAssembler } from './transaction.assembler.js';

export class TransactionApiService {
    getTransactions() {
        return axios.get('http://localhost:3000/finances')
            .then(response => {
                const transactionHistoryArray = response.data?.transaction_history;

                if (!Array.isArray(transactionHistoryArray)) {
                    console.error('TransactionApiService:', transactionHistoryArray);
                    console.log('Response:', response.data); // Para depuración
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