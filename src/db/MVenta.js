const db = require("./database");

const getAllVentas = (callback) => {
  db.all("SELECT * FROM MVenta", [], (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

const getVentaById = (id, callback) => {
  db.get("SELECT * FROM MVenta WHERE id_ven = ?", [id], (err, row) => {
    if (err) {
      return callback(err);
    }
    callback(null, row);
  });
};

const getVentasByCorte = (id_cor, callback) => {
  db.get("SELECT * FROM MVenta WHERE id_cor = ?", [id_cor], (err, row) => {
    if (err) {
      return callback(err);
    }
    callback(null, row);
  });
};

const createVenta = (ticket_ven, callback) => {
  const ticket = JSON.parse(ticket_ven);

  // Inicializar el monto total de la venta
  let monto_ven = 0;

  // Crear una lista de promesas para obtener los precios de los productos
  const promises = ticket.map((item) => {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT precioM_pro FROM CProducto WHERE id_pro = ?",
        [item.id_pro],
        (err, row) => {
          if (err) {
            return reject(err);
          }
          if (row) {
            resolve(row.precioM_pro * item.cantidad);
          } else {
            reject(new Error(`Producto con id ${item.id_pro} no encontrado`));
          }
        }
      );
    });
  });

  // Ejecutar todas las promesas para calcular el monto total
  Promise.all(promises)
    .then((results) => {
      monto_ven = results.reduce((acc, curr) => acc + curr, 0);

      // Obtener el id_cor actual
      db.get("SELECT id_cor FROM MCorte WHERE actual_cor = 1", (err, row) => {
        if (err) {
          return callback(err);
        }

        const id_cor = row.id_cor;
        const fecha_ven = new Date().toISOString();

        // Insertar la venta en la base de datos
        db.run(
          "INSERT INTO MVenta (fecha_ven, ticket_ven, monto_ven, id_cor) VALUES (?, ?, ?, ?)",
          [fecha_ven, ticket_ven, monto_ven, id_cor],
          (err) => {
            if (err) {
              return callback(err);
            }
            callback(null, "Venta creada con éxito");
          }
        );
      });
    })
    .catch((err) => {
      callback(err);
    });
};


const deleteVenta = (id, callback) => {
  db.run("DELETE FROM MVenta WHERE id_ven = ?", [id], function (err) {
    if (err) {
      return callback(err);
    }
    callback(null, { changes: this.changes });
  });
};

module.exports = {
  getAllVentas,
  getVentaById,
  getVentasByCorte,
  createVenta,
  deleteVenta,
};
