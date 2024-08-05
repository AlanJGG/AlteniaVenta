import api from "./api";

export const getAllCortes = async () => {
  try {
    const response = await api.get("/cortes");
    return response.data;
  } catch (error) {
    console.error("Error fetching all cortes:", error);
    throw error;
  }
};

export const getCorteById = async (id) => {
  try {
    const response = await api.get(`/cortes/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching corte with ID ${id}:`, error);
    throw error;
  }
};

export const getCorteActual = async () => {
  try {
    const response = await api.get("/cortes/actual");
    return response.data;
  } catch (error) {
    console.error("Error fetching current corte:", error);
    throw error;
  }
};

export const getCortesByDateRange = async (startDate, endDate) => {
  try {
    const response = await api.get("/cortes/range", {
      params: { startDate, endDate },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching cortes by date range:", error);
    throw error;
  }
};

export const createCorte = async () => {
  try {
    const response = await api.post("/cortes");
    return response.data;
  } catch (error) {
    console.error("Error creating corte:", error);
    throw error;
  }
};

export const finishCorte = async (recogido_cor, id_user) => {
  try {
    const response = await api.put("/cortes/finish", { recogido_cor, id_user });
    return response.data;
  } catch (error) {
    console.error("Error finishing corte:", error);
    throw error;
  }
};

export const updateCorte = async (id, updates) => {
  try {
    const response = await api.put(`/cortes/${id}`, updates);
    return response.data;
  } catch (error) {
    console.error(`Error updating corte with ID ${id}:`, error);
    throw error;
  }
};

export const deleteCorte = async (id) => {
  try {
    const response = await api.delete(`/cortes/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting corte with ID ${id}:`, error);
    throw error;
  }
};
