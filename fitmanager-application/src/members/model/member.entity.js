/**
 * This file contains the definition of the Member class.
 * The class is used to model the member entity, containing essential information about each member.
 * It includes properties like name, age, membership status, and other personal details.
 *
 * Cassius Martel
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
