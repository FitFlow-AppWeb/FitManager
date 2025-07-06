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

import axios from "axios";
import { EmployeeAssembler } from "./employee.assembler.js";

const BASE_URL = import.meta.env.VITE_API_URL;

export class EmployeeApiService {
    getAllEmployees() {
        return axios
            .get(`${BASE_URL}/api/v1/Employee`)
            .then(response => EmployeeAssembler.manyFromBackend(response.data))
            .catch(error => {
                console.error("❌ Error fetching employees from backend:", error);
                throw error;
            });
    }

    addEmployee(employee) {
        return axios.post(`${BASE_URL}/api/v1/Employee`, employee
        ).catch(error => {
            console.error("❌ Error adding employee:", error);
            throw error;
        });
    }

    updateEmployee(employee) {
        return axios.put(`${BASE_URL}/api/v1/Employee/${employee.id}`, employee, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    fireEmployee(employeeId) {
        return axios.delete(`${BASE_URL}/api/v1/Employee/${employeeId}`)
            .catch(error => {
                console.error("❌ Error firing employee:", error);
                throw error;
            });
    }
    addSpecialty(specialty, employeeId) {
        return axios.post(`${BASE_URL}/api/v1/Specialties`, {
            name: specialty,
            description: "a",
            employeeId: employeeId
        });
    }

    addCertification(certification, employeeId) {
        return axios.post(`${BASE_URL}/api/v1/Certifications`, {
            name: certification,
            description: "a",
            employeeId: employeeId
        });
    }
}