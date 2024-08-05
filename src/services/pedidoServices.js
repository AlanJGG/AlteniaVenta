import api from './api';

export const getAllPedido = async () => {
  try {
    const response = await api.get('/pedido');
    return response.data;
  } catch (error) {
    console.error("Error fetching all pedidos:", error);
    throw error;
  }
};

export const getPedidoById = async (id) => {
  try {
    const response = await api.get(`/pedido/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching pedido with ID ${id}:`, error);
    throw error;
  }
};

export const createPedido = async (pedido) => {
  try {
    const response = await api.post('/pedido', pedido);
    return response.data;
  } catch (error) {
    console.error("Error creating pedido:", error);
    throw error;
  }
};

export const updatePedidoRepartidor = async (id, id_rep) => {
  try {
    const response = await api.put(`/pedido/${id}/repartidor`, id_rep, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating repartidor for pedido with ID ${id}:`, error);
    throw error;
  }
};

export const updatePedidoStatus = async (id, status) => {
  try {
    const response = await api.put(`/pedido/${id}/status`, status, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating status for pedido with ID ${id}:`, error);
    throw error;
  }
};

export const updatePedidoPago = async (id, pago_ped) => {
  try {
    const response = await api.put(`/pedido/${id}/pago`, pago_ped, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating pago for pedido with ID ${id}:`, error);
    throw error;
  }
};

export const deletePedido = async (id) => {
  try {
    const response = await api.delete(`/pedido/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting pedido with ID ${id}:`, error);
    throw error;
  }
};
