import api from "./api";

export const getAllVentas = async () => {
  try {
    const response = await api.get("/venta");
    return response.data;
  } catch (error) {
    console.error("Error fetching all ventas:", error.message);
    throw new Error(`Unable to fetch ventas: ${error.message}`);
  }
};

export const getVentaById = async (id) => {
  try {
    const response = await api.get(`/venta/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching venta with ID ${id}:`, error.message);
    throw new Error(`Unable to fetch venta with ID ${id}: ${error.message}`);
  }
};

export const getVentasByCorte = async (id_cor) => {
  try {
    const response = await api.get(`/venta/corte/${id_cor}`);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching ventas with corte ID ${id_cor}:`,
      error.message
    );
    throw new Error(
      `Unable to fetch ventas with corte ID ${id_cor}: ${error.message}`
    );
  }
};

export const createVenta = async (ticket_ven) => {
  try {
    const response = await api.post("/venta", ticket_ven);
    return response.data;
  } catch (error) {
    console.error("Error creating venta:", error.message);
    throw new Error(`Unable to create venta: ${error.message}`);
  }
};

export const deleteVenta = async (id) => {
  try {
    const response = await api.delete(`/venta/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting venta with ID ${id}:`, error.message);
    throw new Error(`Unable to delete venta with ID ${id}: ${error.message}`);
  }
};
