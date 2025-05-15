/**
 * This class defines an Admin, containing essential information for login and role management.
 * It includes properties such as name, email, account status, and user type.
 *
 * Author: Victor Ortiz
 */

export class Admin {
    constructor(id, fullName, email, password, role, lastLoginDate, phone, address, profilePicture) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.password = password;  // Store it securely (encrypted)
        this.role = role;  // "admin", "user", or any other role
        this.lastLoginDate = lastLoginDate;
        this.phone = phone;
        this.address = address;
        this.profilePicture = profilePicture;
    }

    validatePassword(password) {
        return this.password === password;
    }

    // Method to change the password
    changePassword(newPassword) {
        this.password = newPassword;
    }
}
