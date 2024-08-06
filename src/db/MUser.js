const db = require("./database");
const bcrypt = require("bcrypt");

const getAllUsers = (callback) => {
  db.all("SELECT * FROM MUser", [], (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

const getUserById = (id, callback) => {
  db.get("SELECT * FROM MUser WHERE id_user = ?", [id], (err, row) => {
    if (err) {
      return callback(err);
    }
    callback(null, row);
  });
};

const getUserByUsername = (username, callback) => {
  db.get(
    "SELECT * FROM MUser WHERE usuario_user = ?",
    [username],
    (err, row) => {
      if (err) {
        return callback(err);
      }
      callback(null, row);
    }
  );
};

const createUser = (
  { nombre_user, tel_user, usuario_user, contrasena_user, id_rol },
  callback
) => {
  const saltRounds = 10;
  bcrypt.hash(contrasena_user, saltRounds, (err, hash) => {
    if (err) {
      return callback(err);
    }
    db.run(
      "INSERT INTO MUser (nombre_user, tel_user, usuario_user, contrasena_user, id_rol, estado_user) VALUES (?, ?, ?, ?, ?, ?)",
      [nombre_user, tel_user, usuario_user, hash, id_rol, 1],
      function (err) {
        if (err) {
          return callback(err);
        }
        callback(null, { id: this.lastID });
      }
    );
  });
};

const updateUserPassword = (id, newPassword, callback) => {
  const saltRounds = 10;
  bcrypt.hash(newPassword, saltRounds, (err, hash) => {
    if (err) {
      return callback(err);
    }
    db.run(
      "UPDATE MUser SET contrasena_user = ? WHERE id_user = ?",
      [hash, id],
      function (err) {
        if (err) {
          return callback(err);
        }
        callback(null, { changes: this.changes });
      }
    );
  });
};

const updateUserStatus = (id, estado_user, callback) => {
  db.run(
    "UPDATE MUser SET estado_user = ? WHERE id_user = ?",
    [estado_user, id],
    function (err) {
      if (err) {
        return callback(err);
      }
      callback(null, { changes: this.changes });
    }
  );
};

const deleteUser = (id, callback) => {
  db.run("DELETE FROM MUser WHERE id_user = ?", [id], function (err) {
    if (err) {
      return callback(err);
    }
    callback(null, { changes: this.changes });
  });
};

const authenticateUser = (username, password, callback) => {
  getUserByUsername(username, (err, user) => {
    if (err) return callback(err);
    if (!user) return callback(null, false);

    bcrypt.compare(password, user.contrasena_user, (err, isMatch) => {
      if (err) return callback(err);
      if (isMatch) {
        callback(null, true, user);
      } else {
        callback(null, false);
      }
    });
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByUsername,
  createUser,
  updateUserPassword,
  updateUserStatus,
  deleteUser,
  authenticateUser,
};
