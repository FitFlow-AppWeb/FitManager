/*
  This code defines a `User` class in JavaScript, which is used to create and manage user data. The class constructor accepts multiple parameters such as `id`, `name`, `username`, `email`, `phone`, `role`, `devices`, `avatar`, `gymLogo`, `settings`, and `permissions`. These parameters are used to initialize the instance properties of the `User` object. This class is likely used in a larger application to represent a user and store relevant information associated with that user.

  Author: Juan Alvarado
*/

export class User {
    constructor(
        id,
        name,
        username,
        email,
        phone,
        role,
        devices,
        avatar,
        gymLogo,
        settings,
        permissions
    ) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.role = role;
        this.devices = devices;
        this.avatar = avatar;
        this.gymLogo = gymLogo;
        this.settings = settings;
        this.permissions = permissions;
    }
}
