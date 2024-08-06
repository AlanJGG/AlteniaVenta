import api from './api';

export const getAllProducts = async () => {
  try {
    const response = await api.get('/producto');
    return response.data;
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await api.get(`/producto/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};

export const createProduct = async (nombre_pro, precioM_pro) => {
  try {
    const response = await api.post('/producto', {nombre_pro, precioM_pro}, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

export const updateProductCantidad = async (id, cantidad_pro) => {
  try {
    const response = await api.put(`/producto/${id}/cantidad`, cantidad_pro, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating cantidad for product with ID ${id}:`, error);
    throw error;
  }
};

export const disableProduct = async (id) => {
  try {
    const response = await api.put(`/producto/${id}/estado`, "0", {
      headers: {
        "Content-Type": "text/plain",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error disabling product with ID ${id}:`, error);
    throw error;
  }
};

export const enableProduct = async (id) => {
  try {
    const response = await api.put(`/producto/${id}/estado`, "1", {
      headers: {
        "Content-Type": "text/plain",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error enabling product with ID ${id}:`, error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/producto/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting product with ID ${id}:`, error);
    throw error;
  }
};
