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
