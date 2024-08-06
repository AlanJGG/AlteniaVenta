const db = require("./database");

const getAllGastos = (callback) => {
  db.all("SELECT * FROM MGasto", [], (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

const getGastoById = (id, callback) => {
  db.get("SELECT * FROM MGasto WHERE id_gas = ?", [id], (err, row) => {
    if (err) {
      return callback(err);
    }
    callback(null, row);
  });
};

const getGastosByCorte = (id_cor, callback) => {
  db.get("SELECT * FROM MGasto WHERE id_cor = ?", [id_cor], (err, row) => {
    if (err) {
      return callback(err);
    }
    callback(null, row);
  });
};

const createGasto = ({ descripcion_gas, monto_gas }, callback) => {
  db.get("SELECT id_cor FROM MCorte WHERE actual_cor = 1", (err, row) => {
    if (err) {
      return callback(err);
    }
    const id_cor = row.id_cor;
    const fecha_gas = new Date().toISOString();
    db.run(
      "INSERT INTO MGasto (fecha_gas, descripcion_gas, monto_gas, id_cor) VALUES (?, ?)",
      [fecha_gas, descripcion_gas, monto_gas, id_cor],
      function (err) {
        if (err) {
          return callback(err);
        }
        callback(null, { id: this.lastID });
      }
    );
  });
};

const deleteGasto = (id, callback) => {
  db.run("DELETE FROM MGasto WHERE id_gas = ?", [id], function (err) {
    if (err) {
      return callback(err);
    }
    callback(null, { changes: this.changes });
  });
};

module.exports = {
  getAllGastos,
  getGastoById,
  getGastosByCorte,
  createGasto,
  deleteGasto,
};
