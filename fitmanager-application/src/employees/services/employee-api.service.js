import axios from 'axios';
import { EmployeeAssembler } from './employee.assembler.js';

export class EmployeeApiService{
    getAllEmployees() {
        return axios.get('http://localhost:3000/employees')
            .then(response => EmployeeAssembler.toEntitiesFromResponse(response.data))
            .catch(error => {
                console.error('Error fetching employees:', error);
                throw error;
            });
    }
    addEmployee(employee) {
        return axios.post("http://localhost:3000/employees", employee);
    }
    updateEmployee(employee) {
        return axios.put(`http://localhost:3000/employees/${employee.id}`, employee)
            .catch(error => {
                console.error('Error updating employee:', error);
                throw error;
            });
    }
    fireEmployee(employee) {
        return axios.delete(`http://localhost:3000/employees/${employee.id}`)
            .catch(error => {
                console.error('Error deleting employee:', error);
                throw error;
            });
    }
}

