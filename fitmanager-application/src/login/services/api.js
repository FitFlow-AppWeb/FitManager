import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:7070/',
    withCredentials: true
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('jwt');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
localStorage.getItem('token')
