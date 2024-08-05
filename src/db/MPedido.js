const db = require("./database");

const getAllPedidos = (callback) => {
  db.all("SELECT * FROM MPedido", [], (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

const getPedidoById = (id, callback) => {
  db.get("SELECT * FROM MPedido WHERE id_ped = ?", [id], (err, row) => {
    if (err) {
      return callback(err);
    }
    callback(null, row);
  });
};

const createPedido = (pedido, callback) => {
  const { id_cli, fEntrega_ped, ticket_ped } = pedido;
  const fRecepcion_ped = new Date().toISOString();

  db.get(
    "SELECT precios_cli FROM CCliente WHERE id_cli = ?",
    [id_cli],
    (err, row) => {
      if (err) {
        return callback;
      }

      if (!row) {
        return callback(new Error("Cliente no encontrado"));
      }

      const precios_cli = JSON.parse(row.precios_cli);
      let costo_ped = 0.0;

      for (const [producto, cantidad] of Object.entries(ticket_ped)) {
        if (precios_cli[producto] !== undefined) {
          costo_ped += precios_cli[producto] * cantidad;
        } else {
          return callback(
            new Error(`Precio no encontrado para el producto: ${producto}`)
          );
        }
      }

      db.run(
        "INSERT INTO MPedido (id_cli, fRecepcion_ped, fEntrega_ped, ticket_ped, costo_ped) VALUES (?, ?)",
        [id_cli, fRecepcion_ped, fEntrega_ped, ticket_ped, costo_ped],
        function (err) {
          if (err) {
            return callback(err);
          }
          callback(null, { id: this.lastID });
        }
      );
    }
  );
};

const updatePedidoRepartidor = (id, id_rep, callback) => {
  db.run(
    "UPDATE MPedido SET id_rep = ? WHERE id_ped = ?",
    [id_rep, id],
    function (err) {
      if (err) {
        return callback(err);
      }
      callback(null, { changes: this.changes });
    }
  );
};

const updatePedidoStatus = (id, id_sta, callback) => {
  db.run(
    "UPDATE MPedido SET id_sta = ? WHERE id_ped = ?",
    [id_sta, id],
    function (err) {
      if (err) {
        return callback(err);
      }
      callback(null, { changes: this.changes });
    }
  );
};

const updatePedidoPago = (id, pago_ped, callback) => {
    db.run(
      "UPDATE MPedido SET pago_ped = ? WHERE id_ped = ?",
      [pago_ped, id],
      function (err) {
        if (err) {
          return callback(err);
        }
        callback(null, { changes: this.changes });
      }
    );
  };

const deletePedido = (id, callback) => {
  db.run("DELETE FROM MPedido WHERE id_ped = ?", [id], function (err) {
    if (err) {
      return callback(err);
    }
    callback(null, { changes: this.changes });
  });
};

module.exports = {
  getAllPedidos,
  getPedidoById,
  createPedido,
  updatePedidoRepartidor,
  updatePedidoStatus,
  updatePedidoPago,
  deletePedido,
};
