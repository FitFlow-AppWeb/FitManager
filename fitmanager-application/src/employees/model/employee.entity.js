/**
 * Employee Class
 *
 * This class defines an employee object with various attributes including personal information,
 * role, pay rate, and professional qualifications.
 * The constructor initializes the employee with properties like ID, full name, age, role, hourly wage,
 * work hours per week, and contact details. Additionally, it includes specialties and certifications.
 *
 * Author: Cassius Martel
 */

export class Employee {
    constructor({
                    id,
                    firstName,
                    lastName,
                    age,
                    dni,
                    phoneNumber,
                    address,
                    email,
                    password = "",
                    wage,
                    role,
                    workHours,
                    profilePicture = "",
                    specialties = [],
                    certifications = []
                }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.dni = dni;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.email = email;
        this.password = password;
        this.wage = wage;
        this.role = role;
        this.workHours = workHours;
        this.profilePicture = profilePicture;
        this.specialties = specialties;
        this.certifications = certifications;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    toBackendFormat() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.age,
            dni: this.dni,
            phoneNumber: this.phoneNumber,
            address: this.address,
            email: this.email,
            password: this.password,
            wage: this.wage,
            role: this.role,
            workHours: this.workHours,
            profilePicture: this.profilePicture,
            specialties: this.specialties,
            certifications: this.certifications
        };
    }
}
