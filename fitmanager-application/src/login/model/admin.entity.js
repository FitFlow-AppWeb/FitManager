/**
 * Esta clase define a un Admin, con información esencial para el inicio de sesión y la gestión de roles.
 * Incluye propiedades como nombre, correo, estado de la cuenta y tipo de usuario.
 *
 * Cassius Martel
 */

export class Admin {
    constructor(id, fullName, email, password, role, lastLoginDate, phone, address, profilePicture) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.password = password;  // Almacenarlo de manera segura (encriptado)
        this.role = role;  // "admin" o "user" o cualquier otro rol
        this.lastLoginDate = lastLoginDate;
        this.phone = phone;
        this.address = address;
        this.profilePicture = profilePicture;
    }

    // Métodos adicionales pueden incluir:
    // Validar contraseña (en caso de que necesites la lógica para el login)
    validatePassword(password) {
        return this.password === password;
    }

    // Método para cambiar la contraseña
    changePassword(newPassword) {
        this.password = newPassword;
    }
}
