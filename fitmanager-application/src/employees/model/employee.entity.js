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