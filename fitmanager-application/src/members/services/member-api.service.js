/**
 * This file contains the MemberApiService class, which is responsible for handling
 * API requests related to member data. It includes methods to fetch all members,
 * add a new member, update an existing member, and deactivate a member (delete).
 * The service uses the MemberAssembler to convert plain data into Member entities.
 *
 * Author: Cassius Martel
 */

import axios from 'axios';
import { MemberAssembler } from './member.assembler.js';

const BASE_URL = import.meta.env.VITE_API_URL;


export class MemberApiService {
    getAllMembers() {
        return axios.get(`${BASE_URL}/api/v1/Member`)
            .then(response => MemberAssembler.manyFromBackend(response.data))
            .catch(error => {
                console.error('❌ Error fetching members from backend:', error);
                throw error;
            });
    }

    addMember(member) {
        return axios.post(`${BASE_URL}/api/v1/Member`, member);
    }

    updateMember(member) {
        return axios.put(`${BASE_URL}/api/v1/Member/${member.id}`, member)
            .catch(error => {
                console.error('❌ Error updating member:', error);
                throw error;
            });
    }

    deactivateMember(member) {
        return axios.delete(`${BASE_URL}/api/v1/Member/${member.id}`)
            .catch(error => {
                console.error('❌ Error deleting member:', error);
                throw error;
            });
    }

    getMembershipTypes() {
        return fetch(`${BASE_URL}/api/v1/MembershipType`)
            .then(res => {
                if (!res.ok) throw new Error("Error fetching membership types");
                return res.json();
            });
    }

    async getAllPayments() {
        try {
            const response = await fetch(`${BASE_URL}/api/v1/MembershipPayment`);
            if (!response.ok) throw new Error("Failed to fetch payments");
            return await response.json();
        } catch (error) {
            console.error("Error fetching payments:", error);
            return [];
        }
    }
}
