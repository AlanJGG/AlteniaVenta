import api from "./api";

export const getAllUsers = async () => {
  try {
    const response = await api.get("/user");
    return response.data;
  } catch (error) {
    console.error("Error fetching all users:", error);
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const response = await api.get(`/user/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with ID ${id}:`, error);
    throw error;
  }
};

export const createUser = async (user) => {
  try {
    const response = await api.post("/user", user);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const updateUserPassword = async (id, newPassword) => {
  try {
    const response = await api.put(
      `/user/${id}/password`,
      { newPassword },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating password for user with ID ${id}:`, error);
    throw error;
  }
};

export const updateUserStatus = async (id, status) => {
  try {
    const response = await api.put(
      `/user/${id}/status`,
      { status },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating status for user with ID ${id}:`, error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await api.delete(`/user/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting user with ID ${id}:`, error);
    throw error;
  }
};

export const authenticateUser = async (credentials) => {
  try {
    const response = await api.post("/user/login", credentials);
    return response.data;
  } catch (error) {
    console.error("Error authenticating user:", error);
    throw error;
  }
};
