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


}