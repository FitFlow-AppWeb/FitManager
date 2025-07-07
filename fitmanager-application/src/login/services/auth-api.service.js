// src/login/services/auth-api.service.js

import axios from 'axios';
import { AuthAssembler } from "./auth.assembler.js";
import { jwtDecode } from 'jwt-decode'; // Importa jwtDecode

export class AuthApiService {
    constructor() {
        this.client = axios.create({

            baseURL: 'https://app-250707032508.azurewebsites.net/api/v1/Authentication',
            headers: { 'Content-Type': 'application/json' }
        });
    }

    /**
     * Sends credentials to backend and returns an AuthUser entity.
     * @param {Object} credentials
     * @param {string} credentials.email
     * @param {string} credentials.password
     * @returns {Promise<AuthUser>}
     */
    async signIn({ email, password }) {
        const response = await this.client.post('/sign-in', { email, password });
        // map raw response to domain entity
        return AuthAssembler.toEntity(response.data.data);
    }

    /**
     * Registers a new user on the backend.
     * @param {Object} payload
     * @returns {Promise<AxiosResponse>}
     */
    async signUp(payload) {
        return this.client.post('/sign-up', payload);
    }

    /**
     * Checks if a JWT token exists in localStorage and is still valid (not expired).
     * @returns {boolean} True if the token is present and valid, false otherwise.
     */
    isAuthenticated() {
        const token = localStorage.getItem('jwt');

        if (!token) {
            console.log('No token found in localStorage.');
            return false;
        }

        try {
            const decodedToken = jwtDecode(token);

            if (decodedToken.exp * 1000 < Date.now()) {
                console.log('Token has expired. Clearing localStorage.');
                localStorage.removeItem('jwt');
                localStorage.removeItem('token');
                localStorage.removeItem('userId');
                localStorage.removeItem('user');
                return false;
            }
            console.log('Token is valid and not expired.');
            return true;
        } catch (error) {
            console.error('Error decoding token or token is invalid:', error);
            localStorage.removeItem('jwt');
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('user');
            return false;
        }
    }

    /**
     * Removes the JWT token and other session data from localStorage.
     */
    logout() {
        console.log('Logging out: Clearing session data from localStorage.');
        localStorage.removeItem('jwt');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('user');
    }
}

export const authApiService = new AuthApiService();