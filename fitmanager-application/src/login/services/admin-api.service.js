/**
 * This file contains the AdminApiService class, which is responsible for
 * making API calls to manage admin data. It handles fetching, adding,
 * updating, and deactivating admin accounts using axios requests.
 * It also utilizes the AdminAssembler to transform raw API data into
 * Admin entities for use within the application.
 *
 * Author: Victor Ortiz
 */

import axios from 'axios';
import { AdminAssembler } from './admin.assembler.js';

export class AdminApiService {
    getAllAdmins() {
        return axios.get('https://fitmanager.onrender.com/admin')
            .then(response => AdminAssembler.toEntitiesFromResponse(response.data))
            .catch(error => {
                console.error('Error fetching admins:', error);
                throw error;
            });
    }

    addAdmin(admin) {
        return axios.post("https://fitmanager.onrender.com/admin", admin);
    }

    updateAdmin(admin) {
        return axios.put(`https://fitmanager.onrender.com/admin/${admin.id}`, admin)
            .catch(error => {
                console.error('Error updating admin:', error);
                throw error;
            });
    }

    deactivateAdmin(admin) {
        return axios.patch(`https://fitmanager.onrender.com/admin/${admin.id}`, {
            membershipStatus: "inactive"
        });
    }
}
