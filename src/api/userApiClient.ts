import axios from "axios";

const USER_API_URL = 'http://localhost:3001'

const userApiClient = axios.create({
  baseURL: USER_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
});

userApiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
});

userApiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      console.log('Unauthorized');
    }

    return Promise.reject(error);
  }
);

export default userApiClient;