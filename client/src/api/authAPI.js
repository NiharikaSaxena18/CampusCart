import API from './axios';

export const authAPI = {
  login: async (email, password) => {
    const response = await API.post('/auth/login', { email, password });
    return response.data;
  },

  register: async (userData) => {
    const response = await API.post('/auth/register', userData);
    return response.data;
  },

  getProfile: async () => {
    const response = await API.get('/auth/me');
    return response.data;
  },

  updateProfile: async (userData) => {
    const response = await API.put('/auth/profile', userData);
    return response.data;
  }
};