/**
 * Employee API Service
 *
 * This service handles all the API calls related to employee data. It interacts with the backend
 * to retrieve, add, update, and delete employee information. The methods in this class use `axios`
 * for making HTTP requests and `EmployeeAssembler` to format the data into `Employee` entities.
 *
 * The methods include:
 * - `getAllEmployees`: Fetches all employees from the backend and converts the data to `Employee` entities.
 * - `addEmployee`: Sends a new employee record to the backend for creation.
 * - `updateEmployee`: Updates an existing employee record on the backend.
 * - `fireEmployee`: Deletes an employee record from the backend.
 *
 * Author: Cassius Martel
 */

import axios from 'axios';
import { EmployeeAssembler } from './employee.assembler.js';

export class EmployeeApiService{
    getAllEmployees() {
        return axios.get('https://fitmanager.onrender.com/employees')
            .then(response => EmployeeAssembler.toEntitiesFromResponse(response.data))
            .catch(error => {
                console.error('Error fetching employees:', error);
                throw error;
            });
    }
    addEmployee(employee) {
        return axios.post("https://fitmanager.onrender.com/employees", employee);
    }
    updateEmployee(employee) {
        return axios.put(`https://fitmanager.onrender.com/employees/${employee.id}`, employee)
            .catch(error => {
                console.error('Error updating employee:', error);
                throw error;
            });
    }
    fireEmployee(employee) {
        return axios.delete(`https://fitmanager.onrender.com/employees/${employee.id}`)
            .catch(error => {
                console.error('Error deleting employee:', error);
                throw error;
            });
    }
}
