import api from "./api";

export const getAllCliente = async () => {
  const response = await api.get("/clientes");
  return response.data;
};

export const getClienteyId = async (id) => {
  const response = await api.get(`/clientes/${id}`);
  return response.data;
};

export const createCliente= async (cliente) => {
  const response = await api.post("/clientes", cliente, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
  return response.data;
};

export const updateClienteDeuda = async (id, deuda_cli) => {
  const response = await api.put(`/clientes/${id}/cantidad`, deuda_cli, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
  return response.data;
};

export const disableCliente= async (id) => {
  const response = await api.put(`/clientes/${id}/estado`, "0", {
    headers: {
      "Content-Type": "text/plain",
    },
  });
  return response.data;
};

export const enableCliente= async (id) => {
  const response = await api.put(`/clientes/${id}/estado`, "1", {
    headers: {
      "Content-Type": "text/plain",
    },
  });
  return response.data;
};

export const deleteCliente= async (id) => {
  const response = await api.delete(`/clientes/${id}`);
  return response.data;
};
