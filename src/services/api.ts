import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour ajouter le token aux requêtes
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  login: async (email: string, password: string) => {
    const response = await api.post('/login', { email, password });
    localStorage.setItem('token', response.data.token);
    return response.data;
  },
  
  register: async (email: string, password: string, full_name: string) => {
    const response = await api.post('/register', { email, password, full_name });
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  }
};

export const productService = {
  getProducts: async () => {
    const response = await api.get('/products');
    return response.data;
  }
};

export default api;