import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7011/api',//'https://localhost:7011/api',//'https://edusyncapi20250622115519-gqhvgzf0ffd4hthj.centralindia-01.azurewebsites.net/api',
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
