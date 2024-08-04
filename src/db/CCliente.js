const db = require("./database");

const getAllClientes = (callback) => {
  db.all("SELECT * FROM CCliente", [], (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

const getClienteById = (id, callback) => {
  db.get("SELECT * FROM CCliente WHERE id_cli = ?", [id], (err, row) => {
    if (err) {
      return callback(err);
    }
    callback(null, row);
  });
};

const createCliente = (cliente, callback) => {
  const { nombre_cli, tel_cli, ubi_cli, precios_cli } = cliente;
  db.run(
    "INSERT INTO CCliente (nombre_cli, tel_cli, ubi_cli, precios_cli) VALUES (?, ?, ?, ?)",
    [nombre_cli, tel_cli, ubi_cli, JSON.stringify(precios_cli)],
    function (err) {
      if (err) {
        return callback(err);
      }
      callback(null, { id: this.lastID });
    }
  );
};

const updateClienteDeuda = (id, deuda, callback) => {
  db.run(
    "UPDATE CCliente SET deuda_cli = ? WHERE id_cli = ?",
    [deuda, id],
    function (err) {
      if (err) {
        return callback(err);
      }
      callback(null, { changes: this.changes });
    }
  );
};

const updateClienteEstado = (id, estado_cli, callback) => {
  db.run(
    "UPDATE CCliente SET estado_cli = ? WHERE id_cli = ?",
    [estado_cli, id],
    function (err) {
      if (err) {
        return callback(err);
      }
      callback(null, { changes: this.changes });
    }
  );
};

const deleteCliente = (id, callback) => {
  db.run("DELETE FROM CCliente WHERE id_pro = ?", [id], function (err) {
    if (err) {
      return callback(err);
    }
    callback(null, { changes: this.changes });
  });
};

module.exports = {
  getAllClientes,
  getClienteById,
  createCliente,
  updateClienteDeuda,
  updateClienteEstado,
  deleteCliente,
};
