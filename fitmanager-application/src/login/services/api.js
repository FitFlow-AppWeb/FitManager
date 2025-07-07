import axios from 'axios';
import router from '../../router/index.js';

const api = axios.create({
    baseURL: 'https://app-250707032508.azurewebsites.net/',
    withCredentials: true
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('jwt');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            console.error('API Error: Token invalid or expired. Redirecting to login.', error.response);

            localStorage.removeItem('jwt');
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('user');

            if (router.currentRoute.value.name !== 'Login') {
                router.push({ name: 'Login' });
            }
        }
        return Promise.reject(error);
    }
);

export default api;

