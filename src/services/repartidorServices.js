import api from "./api";

export const getAllRepartidores = async () => {
  const response = await api.get("/repartidor");
  return response.data;
};

export const getRepartidoryId = async (id) => {
  const response = await api.get(`/repartidor/${id}`);
  return response.data;
};

export const createRepartidor= async (repartidor) => {
  const response = await api.post("/repartidor", repartidor);
  return response.data;
};

export const updateRepartidorDeuda = async (id, deuda_cli) => {
  const response = await api.put(`/repartidor/${id}/cantidad`, deuda_cli, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
  return response.data;
};

export const disableRepartidor= async (id) => {
  const response = await api.put(`/repartidor/${id}/estado`, "0", {
    headers: {
      "Content-Type": "text/plain",
    },
  });
  return response.data;
};

export const enableRepartidor= async (id) => {
  const response = await api.put(`/repartidor/${id}/estado`, "1", {
    headers: {
      "Content-Type": "text/plain",
    },
  });
  return response.data;
};

export const deleteRepartidor= async (id) => {
  const response = await api.delete(`/repartidor/${id}`);
  return response.data;
};
