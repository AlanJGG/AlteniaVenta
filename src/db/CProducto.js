const db = require("./database");

const getAllProducts = (callback) => {
  db.all("SELECT * FROM CProducto", [], (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

const getProductById = (id, callback) => {
  db.get("SELECT * FROM CProducto WHERE id_pro = ?", [id], (err, row) => {
    if (err) {
      return callback(err);
    }
    callback(null, row);
  });
};

const createProduct = (nombre_pro, callback) => {
  db.run(
    "INSERT INTO CProducto (nombre_pro) VALUES (?)",
    [nombre_pro],
    function (err) {
      if (err) {
        return callback(err);
      }
      callback(null, { id: this.lastID });
    }
  );
};

const updateProductCantidad = (id, cantidad_pro, callback) => {
  db.run(
    "UPDATE CProducto SET cantidad_pro = ? WHERE id_pro = ?",
    [cantidad_pro, id],
    function (err) {
      if (err) {
        return callback(err);
      }
      callback(null, { changes: this.changes });
    }
  );
};

const updateProductEstado = (id, estado_pro, callback) => {
  if (estado_pro) {
    db.run(
      "UPDATE CProducto SET estado_pro = 1 WHERE id_pro = ?",
      [id],
      function (err) {
        if (err) {
          return callback(err);
        }
        callback(null, { changes: this.changes });
      }
    );
  } else {
    db.run(
      "UPDATE CProducto SET estado_pro = 0, cantidad_pro = 0 WHERE id_pro = ?",
      [id],
      function (err) {
        if (err) {
          return callback(err);
        }
        callback(null, { changes: this.changes });
      }
    );
  }
};

const deleteProduct = (id, callback) => {
  db.run("DELETE FROM CProducto WHERE id_pro = ?", [id], function (err) {
    if (err) {
      return callback(err);
    }
    callback(null, { changes: this.changes });
  });
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductCantidad,
  updateProductEstado,
  deleteProduct,
};
