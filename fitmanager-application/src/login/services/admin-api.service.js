import axios from 'axios';
import { AdminAssembler } from './admin.assembler.js';

export class AdminApiService {
    getAllAdmins() {
        return axios.get('http://localhost:3000/admin')
            .then(response => AdminAssembler.toEntitiesFromResponse(response.data))
            .catch(error => {
                console.error('Error fetching admins:', error);
                throw error;
            });
    }

    addAdmin(admin) {
        return axios.post("http://localhost:3000/admin", admin);
    }

    updateAdmin(admin) {
        return axios.put(`http://localhost:3000/admin/${admin.id}`, admin)
            .catch(error => {
                console.error('Error updating admin:', error);
                throw error;
            });
    }

    deactivateAdmin(admin) {
        return axios.patch(`http://localhost:3000/admin/${admin.id}`, {
            membershipStatus: "inactive"
        });
    }
}
