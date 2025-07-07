/*
  This code defines a `User` class in JavaScript, which is used to create and manage user data.
  It aligns with the backend User entity, focusing on authentication and core profile data.

  Author: Juan Alvarado
*/

export class User {
    constructor(id, email, icon, subscription) {
        this.id = id;
        this.email = email;
        this.icon = icon;
        this.subscription = subscription;
    }

    static fromApiResource(resource) {
        return new User(resource.id, resource.email, resource.icon, resource.subscription);
    }
}