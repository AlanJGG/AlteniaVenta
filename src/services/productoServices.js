import api from "./api";

export const getAllProducts = async () => {
  const response = await api.get("/producto");
  return response.data;
};

export const getProductById = async (id) => {
  const response = await api.get(`/producto/${id}`);
  return response.data;
};

export const createProduct = async (nombre_pro) => {
  const response = await api.post("/producto", nombre_pro, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
  return response.data;
};

export const updateProductCantidad = async (id, cantidad_pro) => {
  const response = await api.put(`/producto/${id}/cantidad`, cantidad_pro, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
  return response.data;
};

export const disableProduct = async (id) => {
  const response = await api.put(`/producto/${id}/estado`, "0", {
    headers: {
      "Content-Type": "text/plain",
    },
  });
  return response.data;
};

export const enableProduct = async (id) => {
  const response = await api.put(`/producto/${id}/estado`, "1", {
    headers: {
      "Content-Type": "text/plain",
    },
  });
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await api.delete(`/producto/${id}`);
  return response.data;
};
