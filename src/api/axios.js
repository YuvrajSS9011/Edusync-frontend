import axios from 'axios';

const api = axios.create({
  baseURL: 'https://edusyncapi20250628150056yuvnew-d6aqcdh6cudnf2b9.centralindia-01.azurewebsites.net/api',//'https://localhost:7011/api',//'https://edusyncapi20250622115519-gqhvgzf0ffd4hthj.centralindia-01.azurewebsites.net/api',
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
