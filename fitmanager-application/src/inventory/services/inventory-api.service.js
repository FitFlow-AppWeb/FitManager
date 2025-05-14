// 
// This code defines the InventoryApiService class, which provides methods for interacting with an API to manage inventory data.
// - `getInventory`: Fetches inventory and employee data concurrently. It then associates each inventory item with the name of its assigned trainer using a map.
// - `addInventory`: Sends a POST request to add a new inventory item.
// - `updateInventory`: Sends a PUT request to update an existing inventory item.
// - `deleteInventory`: Sends a DELETE request to remove an inventory item from the API.
// This service uses axios to perform HTTP requests and the InventoryAssembler class to map raw inventory data into Inventory entities.
// Author: Cassius Martel
//

import axios from "axios";
import { InventoryAssembler } from "./inventory.assembler.js";

export class InventoryApiService {
    async getInventory() {
        try {
            const [inventoryRes, employeesRes] = await Promise.all([
                axios.get('http://localhost:3000/inventory'),
                axios.get('http://localhost:3000/employees')
            ]);

            const inventory = InventoryAssembler.toEntitiesFromResponse(inventoryRes.data);
            const employees = employeesRes.data;
            const employeeMap = {};
            for (const emp of employees) {
                employeeMap[emp.id] = emp.fullName;

            }

            return inventory.map(c => ({
                ...c,
                trainerName: employeeMap[c.trainer_id] || 'Unknown'
            }));

        } catch (error) {
            console.error('Error fetching inventory or employees:', error);
            throw error;
        }
    }
    addInventory(inventory) {
        return axios.post("http://localhost:3000/inventory", inventory);
    }

    updateInventory(inventory) {
        return axios.put(`http://localhost:3000/inventory/${inventory.id}`, inventory)
            .catch(error => {
                console.error('Error updating inventory:', error);
                throw error;
            });
    }

    deleteInventory(inventory) {

        return axios.delete(`http://localhost:3000/inventory/${inventory.id}`)
            .catch(error => {
                console.error('Error deleting item:', error);
                throw error;
            });
    }

}
