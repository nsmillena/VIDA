import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;