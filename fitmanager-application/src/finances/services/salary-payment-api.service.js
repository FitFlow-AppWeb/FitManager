import api from '../../login/services/api.js';
import { SalaryPaymentAssembler } from './salary-payment.assembler.js';

/**
 * Servicio API para Pagos de Salario
 *
 * Este servicio maneja todas las llamadas a la API relacionadas con los **Pagos de Salario**.
 * Proporciona métodos para crear nuevos registros de pagos de salario y para obtener los existentes del backend.
 * Utiliza una instancia `api` configurada para las solicitudes HTTP y `SalaryPaymentAssembler`
 * para formatear los datos en entidades `SalaryPayment` para mantener la consistencia en la aplicación.
 *
 * Autor: Tomio Nakamurakare
 */
export class SalaryPaymentApiService {
    async createSalaryPayment(salaryPayment) {
        try {
            const payload = salaryPayment.toBackendCreateFormat();
            const response = await api.post(`/api/v1/SalaryPayment`, payload);
            return SalaryPaymentAssembler.oneFromBackend(response.data.data);
        } catch (error) {
            console.error('❌ Error creating salary payment:', error);
            throw error;
        }
    }

    async getAllSalaryPayments() {
        try {
            const response = await api.get(`/api/v1/SalaryPayment`);
            return SalaryPaymentAssembler.manyFromBackend(response.data.data);
        } catch (error) {
            console.error('❌ Error fetching salary payments:', error);
            throw error;
        }
    }
}