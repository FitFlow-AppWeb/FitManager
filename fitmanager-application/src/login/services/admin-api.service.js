/**
 * This file contains the AdminApiService class, responsible for
 * authenticating admin users via the backend authentication service.
 *
 * Author: Victor Ortiz (modificado por Cassius Martel)
 */
import api from './axios.config.js';

export class AdminApiService {
    login(credentials) {
        return api.post('/api/v1/Authentication/sign-in', credentials)
            .then(res => res.data)
            .catch(error => {
                console.error('❌ Error during login:', error.response?.data || error.message);
                throw error;
            });
    }

    signUp(adminData) {
        return api.post('/api/v1/Authentication/sign-up', adminData)
            .then(res => res.data)
            .catch(error => {
                console.error('❌ Error during sign-up:', error.response?.data || error.message);
                throw error;
            });
    }
}
