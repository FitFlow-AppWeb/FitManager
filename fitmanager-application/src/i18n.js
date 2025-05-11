import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        'member-list': {
            name: 'Name',
            age: 'Age',
            membershipStatus: 'Membership Status',
            membershipType: 'Membership Type',
            expirationDate: 'Expiration Date',
        },
        settings: {
            title: "Settings",
            language: "Language",
            measurementUnit: "Measurement Unit",
            timezone: "Timezone",
            notifications: "Notifications",
            currency: "Currency",
            help: "Help"
        },
        personalInfo: {
            title: "Personal Information",
            username: "Username",
            email: "Email",
            password: "Password",
            phone: "Phone Number",
            devices: "Linked Devices",
            plan: "Current Plan"
        },
        buttons: {
            edit: "Edit Account",
            logout: "Logout"
        },
        notificationOptions: {
            enabled: "Enabled",
            disabled: "Disabled",
            importantOnly: "Important only"
        }
    },
    es: {
        'member-list': {
            name: 'Nombre',
            age: 'Edad',
            membershipStatus: 'Estado de Membresía',
            membershipType: 'Tipo de Membresía',
            expirationDate: 'Fecha de Expiración',
        },
        settings: {
            title: "Configuración",
            language: "Idioma",
            measurementUnit: "Unidad de medida",
            timezone: "Zona horaria",
            notifications: "Notificaciones",
            currency: "Moneda",
            help: "Ayuda"
        },
        personalInfo: {
            title: "Información Personal",
            username: "Usuario",
            email: "Correo electrónico",
            password: "Contraseña",
            phone: "Número de teléfono",
            devices: "Dispositivos vinculados",
            plan: "Plan actual"
        },
        buttons: {
            edit: "Editar cuenta",
            logout: "Cerrar sesión"
        },
        notificationOptions: {
            enabled: "Activadas",
            disabled: "Desactivadas",
            importantOnly: "Solo importantes"
        }
    }
};

const i18n = createI18n({
    legacy: false,
    locale: 'en', // idioma por defecto
    fallbackLocale: 'en',
    messages, // las traducciones
});

// Exportar i18n como valor predeterminado
export default i18n;