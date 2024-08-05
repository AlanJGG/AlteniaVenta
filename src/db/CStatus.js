const db = require("./database");

const getAllStatus = (callback) => {
  db.all("SELECT * FROM CStatus", [], (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

const getStatusById = (id, callback) => {
  db.get("SELECT * FROM CStatus WHERE id_sta = ?", [id], (err, row) => {
    if (err) {
      return callback(err);
    }
    callback(null, row);
  });
};

module.exports = {
  getAllStatus,
  getStatusById,
  
};
