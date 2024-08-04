import api from "./api";

export const getAllCliente = async () => {
  const response = await api.get("/cliente");
  return response.data;
};

export const getClienteyId = async (id) => {
  const response = await api.get(`/cliente/${id}`);
  return response.data;
};

export const createCliente = async (cliente) => {
  const response = await api.post("/cliente", cliente);
  return response.data;
};

export const updateClienteDeuda = async (id, deuda_cli) => {
  const response = await api.put(`/cliente/${id}/cantidad`, deuda_cli, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
  return response.data;
};

export const disableCliente = async (id) => {
  const response = await api.put(`/cliente/${id}/estado`, "0", {
    headers: {
      "Content-Type": "text/plain",
    },
  });
  return response.data;
};

export const enableCliente = async (id) => {
  const response = await api.put(`/cliente/${id}/estado`, "1", {
    headers: {
      "Content-Type": "text/plain",
    },
  });
  return response.data;
};

export const deleteCliente = async (id) => {
  const response = await api.delete(`/cliente/${id}`);
  return response.data;
};
