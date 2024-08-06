import api from './api';

export const getAllGastos = async () => {
  try {
    const response = await api.get('/gasto');
    return response.data;
  } catch (error) {
    console.error("Error fetching all gastos:", error);
    throw error;
  }
};

export const getGastoById = async (id) => {
  try {
    const response = await api.get(`/gasto/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching gasto with ID ${id}:`, error);
    throw error;
  }
};

export const createGasto = async (gasto) => {
  try {
    const response = await api.post('/gasto', gasto);
    return response.data;
  } catch (error) {
    console.error("Error creating gasto:", error);
    throw error;
  }
};

export const deleteGasto = async (id) => {
  try {
    const response = await api.delete(`/gasto/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting gasto with ID ${id}:`, error);
    throw error;
  }
};

export const getGastosByCorte = async (id_cor) => {
  try {
    const response = await api.get(`/gasto/corte/${id_cor}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching gastos with corte ID ${id_cor}:`, error);
    throw error;
  }
};
