import api from './api';

export const getAllStatus = async () => {
  try {
    const response = await api.get('/status');
    return response.data;
  } catch (error) {
    console.error("Error fetching all statuses:", error);
    throw error;
  }
};

export const getStatusById = async (id) => {
  try {
    const response = await api.get(`/status/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching status with ID ${id}:`, error);
    throw error;
  }
};
