const API_URL = 'http://localhost:3000';

export async function getUserInfo() {
    try {
        const response = await fetch(`${API_URL}/users/1`);
        if (!response.ok) throw new Error('Error al obtener datos');
        const user = await response.json();

        return {
            ...user,
            role: user.role || "Admin",
            gymLogo: user.gymLogo || "/assets/gimnasio-profile.PNG",
            avatar: user.avatar || "/assets/logo-profile.PNG",
            settings: user.settings || {
                language: "English",
                units: "kg/cm",
                timezone: "GMT-5",
                notifications: "Enabled",
                currency: "USD"
            }
        };
    } catch (error) {
        console.error("API Error:", error);
        return {
            username: "powergym_peru",
            email: "messi@gmail.com",
            phone: "+51 999 530 751",
            plan: "Platinum",
            devices: 3,
            role: "Admin",
            gymLogo: "/assets/gimnasio-profile.PNG",
            avatar: "/assets/logo-profile.PNG",
            settings: {
                language: "English",
                units: "kg/cm",
                timezone: "GMT-5",
                notifications: "Enabled",
                currency: "USD"
            }
        };
    }
}