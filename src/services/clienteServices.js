import api from "./api";

export const getAllCliente = async () => {
  try {
    const response = await api.get("/cliente");
    return response.data;
  } catch (error) {
    console.error("Error fetching all clientes:", error);
    throw error;
  }
};

export const getClienteyId = async (id) => {
  try {
    const response = await api.get(`/cliente/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching cliente with ID ${id}:`, error);
    throw error;
  }
};

export const createCliente = async (cliente) => {
  try {
    const response = await api.post("/cliente", cliente);
    return response.data;
  } catch (error) {
    console.error("Error creating cliente:", error);
    throw error;
  }
};

export const updateClienteDeuda = async (id, deuda_cli) => {
  try {
    const response = await api.put(`/cliente/${id}/cantidad`, deuda_cli, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating deuda for cliente with ID ${id}:`, error);
    throw error;
  }
};

export const disableCliente = async (id) => {
  try {
    const response = await api.put(`/cliente/${id}/estado`, "0", {
      headers: {
        "Content-Type": "text/plain",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error disabling cliente with ID ${id}:`, error);
    throw error;
  }
};

export const enableCliente = async (id) => {
  try {
    const response = await api.put(`/cliente/${id}/estado`, "1", {
      headers: {
        "Content-Type": "text/plain",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error enabling cliente with ID ${id}:`, error);
    throw error;
  }
};

export const deleteCliente = async (id) => {
  try {
    const response = await api.delete(`/cliente/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting cliente with ID ${id}:`, error);
    throw error;
  }
};
