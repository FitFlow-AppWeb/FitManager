import { SalaryPayment } from '../model/salary-payment.entity.js';

/**
 * SalaryPayment Assembler Class
 *
 * Esta clase proporciona métodos para convertir los datos crudos de SalaryPayment del backend
 * en objetos de entidad SalaryPayment (modelos de frontend).
 * Se encarga de transformar las cadenas de fecha a objetos Date de JavaScript.
 *
 * Autor: Tomio Nakamurakare
 */
export class SalaryPaymentAssembler {

    static oneFromBackend(resource) {
        if (!resource) {
            return null;
        }

        return new SalaryPayment({
            id: resource.id,
            date: new Date(resource.date),
            amount: resource.amount,
            method: resource.method,
            currency: resource.currency,
            employeeId: resource.employeeId
        });
    }

    static manyFromBackend(responseData) {
        let dataArray = [];

        if (Array.isArray(responseData)) {
            dataArray = responseData;
        } else if (responseData && Array.isArray(responseData.data)) {
            dataArray = responseData.data;
        } else {
            console.error("❌ SalaryPaymentAssembler: Se esperaba un array o un objeto con un array 'data' para manyFromBackend, pero se recibió:", responseData);
            return [];
        }

        return dataArray.map(this.oneFromBackend);
    }
}