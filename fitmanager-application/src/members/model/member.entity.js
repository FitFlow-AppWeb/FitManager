/**
 * Member Class Definition
 *
 * This class models a Member entity with all relevant attributes such as personal details,
 * membership status, contact information, and important dates. It serves as a data structure
 * for representing members within the application logic.
 *
 * Author: Cassius Martel
 */

export class Member {
    constructor(id, fullName, age, membershipStatus, membershipType, expirationDate, dni, email, phone, address, membershipStartDate, profilePicture) {
        this.id = id;
        this.fullName = fullName;
        this.age = age;
        this.membershipStatus = membershipStatus;
        this.membershipType = membershipType;
        this.expirationDate = expirationDate;
        this.dni = dni;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.membershipStartDate = membershipStartDate;
        this.profilePicture = profilePicture;
    }
}
