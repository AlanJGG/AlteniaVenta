const db = require("./database");

const getAllRepartidores = (callback) => {
  db.all("SELECT * FROM CRepartidor", [], (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

const getRepartidorById = (id, callback) => {
  db.get("SELECT * FROM CRepartidor WHERE id_rep = ?", [id], (err, row) => {
    if (err) {
      return callback(err);
    }
    callback(null, row);
  });
};

const createRepartidor = (repartidor, callback) => {
  const { nombre_rep, tel_rep } = repartidor;
  db.run(
    "INSERT INTO CRepartidor (nombre_rep, tel_rep) VALUES (?, ?)",
    [nombre_rep, tel_rep],
    function (err) {
      if (err) {
        return callback(err);
      }
      callback(null, { id: this.lastID });
    }
  );
};

const updateRepartidorDeuda = (id, deuda, callback) => {
  db.run(
    "UPDATE CRepartidor SET deuda_rep = ? WHERE id_rep = ?",
    [deuda, id],
    function (err) {
      if (err) {
        return callback(err);
      }
      callback(null, { changes: this.changes });
    }
  );
};

const updateRepartidorEstado = (id, estado_rep, callback) => {
  db.run(
    "UPDATE CRepartidor SET estado_rep = ? WHERE id_rep = ?",
    [estado_rep, id],
    function (err) {
      if (err) {
        return callback(err);
      }
      callback(null, { changes: this.changes });
    }
  );
};

const deleteRepartidor = (id, callback) => {
  db.run("DELETE FROM CRepartidor WHERE id_rep = ?", [id], function (err) {
    if (err) {
      return callback(err);
    }
    callback(null, { changes: this.changes });
  });
};

module.exports = {
  getAllRepartidores,
  getRepartidorById,
  createRepartidor,
  updateRepartidorDeuda,
  updateRepartidorEstado,
  deleteRepartidor,
};
