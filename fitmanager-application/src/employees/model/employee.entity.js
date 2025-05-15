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
    constructor(id, fullName, age, role, hourlyWage, hoursPerWeek, dni, email, phone, address, profilePicture, specialties = [], certifications = []) {
        this.id = id;
        this.fullName = fullName;
        this.age = age;
        this.role = role;
        this.hourlyWage = hourlyWage;
        this.hoursPerWeek = hoursPerWeek;
        this.dni = dni;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.profilePicture = profilePicture;
        this.specialties = specialties;
        this.certifications = certifications;
    }
}
