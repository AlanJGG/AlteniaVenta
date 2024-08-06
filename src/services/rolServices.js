import api from "./api";

export const getAllRols = async () => {
  try {
    const response = await api.get("/rol");
    return response.data;
  } catch (error) {
    console.error("Error fetching all roles:", error);
    throw error;
  }
};

export const getRolById = async (id) => {
  try {
    const response = await api.get(`/rol/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching role with ID ${id}:`, error);
    throw error;
  }
};
