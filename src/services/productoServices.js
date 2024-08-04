import api from "./api";

export const getAllProducts = async () => {
  const response = await api.get("/productos");
  return response.data;
};

export const getProductById = async (id) => {
  const response = await api.get(`/productos/${id}`);
  return response.data;
};

export const createProduct = async (nombre_pro) => {
  const response = await api.post("/productos", nombre_pro, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
  return response.data;
};

export const updateProductCantidad = async (id, cantidad_pro) => {
  const response = await api.put(`/productos/${id}/cantidad`, cantidad_pro, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
  return response.data;
};

export const disableProduct = async (id) => {
  const response = await api.put(`/productos/${id}/estado`, "0", {
    headers: {
      "Content-Type": "text/plain",
    },
  });
  return response.data;
};

export const enableProduct = async (id) => {
  const response = await api.put(`/productos/${id}/estado`, "1", {
    headers: {
      "Content-Type": "text/plain",
    },
  });
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await api.delete(`/productos/${id}`);
  return response.data;
};
