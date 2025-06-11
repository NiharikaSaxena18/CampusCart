import API from './axios';

export const productAPI = {
  getAllProducts: async (filters = {}) => {
    const response = await API.get('/products', { params: filters });
    return response.data;
  },

  getProductById: async (id) => {
    const response = await API.get(`/products/${id}`);
    return response.data;
  },

  createProduct: async (productData) => {
    const response = await API.post('/products', productData);
    return response.data;
  },

  updateProduct: async (id, productData) => {
    const response = await API.put(`/products/${id}`, productData);
    return response.data;
  },

  deleteProduct: async (id) => {
    const response = await API.delete(`/products/${id}`);
    return response.data;
  },

  searchProducts: async (query) => {
    const response = await API.get(`/products/search?q=${query}`);
    return response.data;
  }
};