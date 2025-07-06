// employee-api.service.js
import api from '../../login/services/api.js';
import { EmployeeAssembler } from './employee.assembler.js';

export class EmployeeApiService {
    getAllEmployees() {
        return api.get('/api/v1/Employee')
            .then(res => EmployeeAssembler.manyFromBackend(res.data.data))
            .catch(error => {
                console.error('❌ Error fetching employees from backend:', error);
                throw error;
            });
    }

    addEmployee(employee) {
        return api.post('/api/v1/Employee', employee)
            .catch(error => {
                console.error('❌ Error adding employee:', error);
                throw error;
            });
    }

    updateEmployee(employee) {
        return api.put(`/api/v1/Employee/${employee.id}`, employee)
            .catch(error => {
                console.error('❌ Error updating employee:', error);
                throw error;
            });
    }

    fireEmployee(employeeId) {
        return api.delete(`/api/v1/Employee/${employeeId}`)
            .catch(error => {
                console.error('❌ Error firing employee:', error);
                throw error;
            });
    }

    addSpecialty(specialty, employeeId) {
        return api.post('/api/v1/Specialties', {
            name: specialty,
            description: 'a',
            employeeId
        });
    }

    addCertification(certification, employeeId) {
        return api.post('/api/v1/Certifications', {
            name: certification,
            description: 'a',
            employeeId
        });
    }
}
