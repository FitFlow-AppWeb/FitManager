/**
 * ItemType API Service
 *
 * This service handles all API calls related to **ItemType** data. It interacts with the backend
 * to retrieve and create item type information. The methods in this class use `api`
 * for making HTTP requests and `ItemTypeAssembler` to format the data into **ItemType** entities.
 *
 * The methods include:
 * - `getAllItemTypes`: Fetches all item types from the backend and converts the data to **ItemType** entities.
 * - `createItemType`: Sends a new item type record to the backend for creation.
 *
 * Author: Tomio Nakamurakare
 */
import api from '../../login/services/api.js';
import { ItemTypeAssembler } from './item-type.assembler.js';

export class ItemTypeApiService {
    async getAllItemTypes() {
        try {
            const response = await api.get('/api/v1/ItemTypes');
            return ItemTypeAssembler.manyFromBackend(response.data.data);
        } catch (error) {
            console.error("❌ Error fetching item types from backend:", error);
            throw error;
        }
    }

    async createItemType(itemType) {
        try {
            const response = await api.post('/api/v1/ItemTypes', itemType.toBackendCreateFormat());
            return ItemTypeAssembler.oneFromBackend(response.data.data);
        } catch (error) {
            console.error("❌ Error creating item type:", error);
            throw error;
        }
    }
}