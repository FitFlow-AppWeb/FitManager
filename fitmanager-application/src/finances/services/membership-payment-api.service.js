import api from '../../login/services/api.js';
import { MembershipPaymentAssembler } from './membership-payment.assembler.js';

/**
 * API Service for Membership Payments
 *
 * This service manages all API calls related to **Membership Payments**.
 * It provides methods to create new membership payment records and to retrieve existing ones from the backend.
 * It uses a configured `api` instance for HTTP requests and `MembershipPaymentAssembler`
 * to format the data into `MembershipPayment` entities for application consistency.
 *
 * Author: Tomio Nakamurakare
 */
export class MembershipPaymentApiService {
    async createMembershipPayment(membershipPayment) {
        try {
            const payload = membershipPayment.toBackendCreateFormat();
            const response = await api.post(`/api/v1/MembershipPayment`, payload);
            return MembershipPaymentAssembler.oneFromBackend(response.data.data);
        } catch (error) {
            console.error('❌ Error creating membership payment:', error);
            throw error;
        }
    }

    async getAllMembershipPayments() {
        try {
            const response = await api.get(`/api/v1/MembershipPayment`);
            return MembershipPaymentAssembler.manyFromBackend(response.data.data);
        } catch (error) {
            console.error('❌ Error fetching membership payments:', error);
            throw error;
        }
    }
}