import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api'; // Cambia esto a tu URL de backend

const register = (name, email, password, password_confirmation) => {
  return axios.post(`${API_URL}/register`, {
    name,
    email,
    password,
    password_confirmation
  });
};

const login = (email, password) => {
  return axios.post(`${API_URL}/login`, {
    email,
    password
  })
  .then(response => {
    if (response.data.access_token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  });
};

const logout = () => {
  return axios.post(`${API_URL}/logout`).then(() => {
    localStorage.removeItem('user');
  });
};

const authService = {
  register,
  login,
  logout
};

export default authService;
