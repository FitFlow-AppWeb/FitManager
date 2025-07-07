/**
 * Item API Service
 *
 * This service handles all the API calls related to **Item** (inventory) data. It interacts with the backend
 * to retrieve, add, update, and delete item information. The methods in this class use `axios`
 * for making HTTP requests and `ItemAssembler` to format the data into **Item** entities.
 *
 * The methods include:
 * - `getAllItems`: Fetches all items from the backend and converts the data to **Item** entities.
 * - `addItem`: Sends a new item record to the backend for creation.
 * - `updateItem`: Updates an existing item record on the backend.
 * - `deleteItem`: Deletes an item record from the backend.
 *
 * Author: Tomio Nakamurakare
 */

import api from '../../login/services/api.js';
import { ItemAssembler } from "./item.assembler.js";

export class ItemApiService {
    async getAllItems() {
        try {
            const response = await api.get('/api/v1/Item');
            return ItemAssembler.manyFromBackend(response.data.data);
        } catch (error) {
            console.error("❌ Error fetching items from backend:", error);
            throw error;
        }
    }

    updateItem(item) {
        return api.put(`/api/v1/Item/${item.id}`, item.toBackendFormat(), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(error => {
            console.error('❌ Error updating item:', error);
            throw error;
        });
    }

    deleteItem(itemId) {
        return api.delete(`/api/v1/Item/${itemId}`)
            .catch(error => {
                console.error('❌ Error deleting item:', error);
                throw error;
            });
    }
}