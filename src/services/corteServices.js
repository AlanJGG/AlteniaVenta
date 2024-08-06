import api from "./api";

export const getAllCortes = async () => {
  try {
    const response = await api.get("/corte");
    return response.data;
  } catch (error) {
    console.error("Error fetching all corte:", error);
    throw error;
  }
};

export const getCorteById = async (id) => {
  try {
    const response = await api.get(`/corte/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching corte with ID ${id}:`, error);
    throw error;
  }
};

export const getCorteActual = async () => {
  try {
    const response = await api.get("/corte/actual");
    return response.data;
  } catch (error) {
    console.error("Error fetching current corte:", error);
    throw error;
  }
};

export const getCortesByDateRange = async (startDate, endDate) => {
  try {
    const response = await api.get("/corte/range", {
      params: { startDate, endDate },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching corte by date range:", error);
    throw error;
  }
};

export const createCorte = async () => {
  try {
    const response = await api.post("/corte");
    return response.data;
  } catch (error) {
    console.error("Error creating corte:", error);
    throw error;
  }
};

export const finishCorte = async (recogido_cor, id_user) => {
  try {
    const response = await api.put("/corte/finish", { recogido_cor, id_user });
    return response.data;
  } catch (error) {
    console.error("Error finishing corte:", error);
    throw error;
  }
};

export const updateCorte = async (id, updates) => {
  try {
    const response = await api.put(`/corte/${id}`, updates);
    return response.data;
  } catch (error) {
    console.error(`Error updating corte with ID ${id}:`, error);
    throw error;
  }
};

export const deleteCorte = async (id) => {
  try {
    const response = await api.delete(`/corte/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting corte with ID ${id}:`, error);
    throw error;
  }
};
