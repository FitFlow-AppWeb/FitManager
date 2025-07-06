// src/login/services/auth-api.service.js

import axios from 'axios';
import {AuthAssembler} from "./auth.assembler.js";

export class AuthApiService {
    constructor() {
        this.client = axios.create({
            baseURL: 'http://localhost:7070/api/v1/Authentication',
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
}
