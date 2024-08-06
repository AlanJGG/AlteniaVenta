const db = require("./database");

const getAllRols = (callback) => {
  db.all("SELECT * FROM CRol", [], (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

const getRolById = (id, callback) => {
  db.get("SELECT * FROM CRol WHERE id_rol = ?", [id], (err, row) => {
    if (err) {
      return callback(err);
    }
    callback(null, row);
  });
};

module.exports = {
  getAllRols,
  getRolById,
};
