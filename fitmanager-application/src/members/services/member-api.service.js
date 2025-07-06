import api from '../../login/services/api.js';
import { MemberAssembler } from './member.assembler.js';

export class MemberApiService {
    getAllMembers() {
        return api.get('/api/v1/Member')
            .then(response => MemberAssembler.manyFromBackend(response.data.data))
            .catch(error => {
                console.error('❌ Error fetching members from backend:', error);
                throw error;
            });
    }

    addMember(member) {
        return api.post('/api/v1/Member', member);
    }

    updateMember(member) {
        return api.put(`/api/v1/Member/${member.id}`, member)
            .catch(error => {
                console.error('❌ Error updating member:', error);
                throw error;
            });
    }

    deactivateMember(member) {
        return api.delete(`/api/v1/Member/${member.id}`)
            .catch(error => {
                console.error('❌ Error deleting member:', error);
                throw error;
            });
    }

    getMembershipTypes() {
        return api.get('/api/v1/MembershipType')
            .then(response => response.data.data)
            .catch(error => {
                console.error('❌ Error fetching membership types:', error);
                throw error;
            });
    }

    async getAllPayments() {
        try {
            const response = await api.get('/api/v1/MembershipPayment');
            return response.data;
        } catch (error) {
            console.error("Error fetching payments:", error);
            return [];
        }
    }
}
