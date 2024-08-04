const db = require('./database');

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

const updateProduct = (id, product, callback) => {
  const { nombre_pro, cantidad_pro, estado_pro } = product;
  db.run(
    "UPDATE CProducto SET nombre_pro = ?, cantidad_pro = ?, estado_pro = ? WHERE id_pro = ?",
    [nombre_pro, cantidad_pro, estado_pro, id],
    function (err) {
      if (err) {
        return callback(err);
      }
      callback(null, { changes: this.changes });
    }
  );
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
  updateProduct,
  deleteProduct,
};
