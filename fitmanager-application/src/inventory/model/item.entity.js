/**
 * Item Class
 *
 * This class defines an inventory **Item** object, encompassing its core attributes,
 * maintenance schedule, current status, and crucial relationships with an **Employee**
 * (representing the assigned trainer) and an **ItemType**. The constructor handles
 * the instantiation of nested `Employee` and `ItemType` objects when their respective
 * backend resources are provided.
 *
 * The methods include:
 * - `name`: Provides the name of the item from its associated `ItemType`.
 * - `description`: Provides the description of the item from its associated `ItemType`.
 * - `assignedTrainerFullName`: Returns the full name of the assigned `Employee`.
 * - `assignedTrainerEmail`: Returns the email of the assigned `Employee`.
 * - `toBackendFormat`: Converts the instance into a format suitable for sending
 * to the backend API for creation or updates, including only necessary IDs for relationships.
 *
 * Author: Tomio Nakamurakare
 */
import { Employee } from '../../employees/model/employee.entity.js';
import { ItemType } from './item-type.entity.js';

export class Item {
    constructor({
                    id,
                    lastMaintenanceDate,
                    nextMaintenanceDate,
                    status,
                    employeeId,
                    employee,
                    itemTypeId,
                    itemType
                }) {
        this.id = id;
        this.lastMaintenanceDate = lastMaintenanceDate;
        this.nextMaintenanceDate = nextMaintenanceDate;
        this.status = status;
        this.employeeId = employeeId;
        this.employee = employee ? new Employee(employee) : null;
        this.itemTypeId = itemTypeId;
        this.itemType = itemType ? new ItemType(itemType) : null;
    }

    get name() {
        return this.itemType?.name || 'N/A';
    }

    get description() {
        return this.itemType?.description || 'N/A';
    }

    get assignedTrainerFullName() {
        return this.employee?.fullName || 'No Asignado';
    }

    get assignedTrainerEmail() {
        return this.employee?.email || 'N/A';
    }

    toBackendFormat() {
        return {
            id: this.id,
            lastMaintenanceDate: this.lastMaintenanceDate,
            nextMaintenanceDate: this.nextMaintenanceDate,
            status: this.status,
            employeeId: this.employeeId,
            itemTypeId: this.itemTypeId
        };
    }
}