import api from './api';

export const getAllRepartidores = async () => {
  try {
    const response = await api.get('/repartidor');
    return response.data;
  } catch (error) {
    console.error("Error fetching all repartidores:", error);
    throw error;
  }
};

export const getRepartidorById = async (id) => {
  try {
    const response = await api.get(`/repartidor/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching repartidor with ID ${id}:`, error);
    throw error;
  }
};

export const createRepartidor = async (repartidor) => {
  try {
    const response = await api.post('/repartidor', repartidor);
    return response.data;
  } catch (error) {
    console.error("Error creating repartidor:", error);
    throw error;
  }
};

export const updateRepartidorDeuda = async (id, deuda_cli) => {
  try {
    const response = await api.put(`/repartidor/${id}/cantidad`, deuda_cli, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating deuda for repartidor with ID ${id}:`, error);
    throw error;
  }
};

export const disableRepartidor = async (id) => {
  try {
    const response = await api.put(`/repartidor/${id}/estado`, "0", {
      headers: {
        "Content-Type": "text/plain",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error disabling repartidor with ID ${id}:`, error);
    throw error;
  }
};

export const enableRepartidor = async (id) => {
  try {
    const response = await api.put(`/repartidor/${id}/estado`, "1", {
      headers: {
        "Content-Type": "text/plain",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error enabling repartidor with ID ${id}:`, error);
    throw error;
  }
};

export const deleteRepartidor = async (id) => {
  try {
    const response = await api.delete(`/repartidor/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting repartidor with ID ${id}:`, error);
    throw error;
  }
};
