import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export const getAllProducts = async () => {
  const response = await api.get('/productos');
  return response.data;
};

export const getProductById = async (id) => {
  const response = await api.get(`/productos/${id}`);
  return response.data;
};

export const createProduct = async (product) => {
  const response = await api.post('/productos', product);
  return response.data;
};

export const updateProduct = async (id, product) => {
  const response = await api.put(`/productos/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await api.delete(`/productos/${id}`);
  return response.data;
};
