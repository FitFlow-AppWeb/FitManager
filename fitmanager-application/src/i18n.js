import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        'member-list': {
            name: 'Name',
            age: 'Age',
            membershipStatus: 'Membership Status',
            membershipType: 'Membership Type',
            expirationDate: 'Expiration Date',
        }
    },
    es: {
        'member-list': {
            name: 'Nombre',
            age: 'Edad',
            membershipStatus: 'Estado de Membresía',
            membershipType: 'Tipo de Membresía',
            expirationDate: 'Fecha de Expiración',
        }
    }
};

const i18n = createI18n({
    locale: 'en', // idioma por defecto
    messages, // las traducciones
});

// Exportar i18n como valor predeterminado
export default i18n;