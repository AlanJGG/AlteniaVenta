const db = require("./database");

const getAllCortes = (callback) => {
  db.all("SELECT * FROM MCorte", [], (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

const getCorteById = (id, callback) => {
  db.get("SELECT * FROM MCorte WHERE id_pro = ?", [id], (err, row) => {
    if (err) {
      return callback(err);
    }
    callback(null, row);
  });
};

const getCorteActual = (callback) => {
  db.serialize(() => {
    db.get("SELECT * FROM MCorte WHERE actual_cor = 1", [], (err, corte) => {
      if (err) {
        return callback(err);
      }

      if (!corte) {
        return callback(new Error("No active corte found"));
      }

      const id_cor = corte.id_cor;

      db.get(
        "SELECT SUM(monto_ven) AS total_ventas FROM MVenta WHERE id_cor = ?",
        [id_cor],
        (err, result) => {
          if (err) {
            return callback(err);
          }

          const venta_cor = result.total_ventas || 0;

          db.get(
            "SELECT SUM(monto_gas) AS total_gastos FROM MGasto WHERE id_cor = ?",
            [id_cor],
            (err, result) => {
              if (err) {
                return callback(err);
              }

              const gasto_cor = result.total_gastos || 0;
              const balance_cor = venta_cor - gasto_cor;

              db.all(
                "SELECT ticket_ven FROM MVenta WHERE id_cor = ?",
                [id_cor],
                (err, ventas) => {
                  if (err) {
                    return callback(err);
                  }

                  const combinedTickets = combineTickets(ventas);

                  db.run(
                    `
                      UPDATE MCorte 
                      SET 
                        venta_cor = ?, 
                        gasto_cor = ?, 
                        balance_cor = ?, 
                        ticket_cor = ?
                      WHERE id_cor = ?
                      `,
                    [
                      venta_cor,
                      gasto_cor,
                      balance_cor,
                      combinedTickets,
                      id_cor,
                    ],
                    function (err) {
                      if (err) {
                        return callback(err);
                      }

                      db.get(
                        "SELECT * FROM MCorte WHERE id_cor = ?",
                        [id_cor],
                        (err, updatedRow) => {
                          if (err) {
                            return callback(err);
                          }
                          callback(null, updatedRow);
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
};

const getCortesByDateRange = (startDate, endDate, callback) => {
  db.all(
    "SELECT * FROM MCorte WHERE fechaInicio_cor BETWEEN ? AND ?",
    [startDate.toISOString(), endDate.toISOString()],
    (err, rows) => {
      if (err) {
        return callback(err);
      }
      callback(null, rows);
    }
  );
};

const createCorte = (callback) => {
  const fechaInicio_cor = new Date().toISOString();
  db.run(
    "INSERT INTO MCorte (fechaInicio_cor) VALUES (?)",
    [fechaInicio_cor],
    function (err) {
      if (err) {
        return callback(err);
      }
      callback(null, { id: this.lastID });
    }
  );
};

const finishCorte = (body, callback) => {
  const { recogido_cor, id_user } = body;
  db.serialize(() => {
    db.get("SELECT id_cor FROM MCorte WHERE actual_cor = 1", [], (err, row) => {
      if (err) {
        return callback(err);
      }

      if (!row) {
        return callback(new Error("No active corte found"));
      }

      const id_cor = row.id_cor;

      db.get(
        "SELECT SUM(monto_ven) AS total_ventas FROM MVenta WHERE id_cor = ?",
        [id_cor],
        (err, result) => {
          if (err) {
            return callback(err);
          }

          const venta_cor = result.total_ventas || 0;

          db.get(
            "SELECT SUM(monto_gas) AS total_gastos FROM MGasto WHERE id_cor = ?",
            [id_cor],
            (err, result) => {
              if (err) {
                return callback(err);
              }

              const gasto_cor = result.total_gastos || 0;
              const balance_cor = venta_cor - gasto_cor;

              db.all(
                "SELECT ticket_ven FROM MVenta WHERE id_cor = ?",
                [id_cor],
                (err, ventas) => {
                  if (err) {
                    return callback(err);
                  }

                  const combinedTickets = combineTickets(ventas);

                  db.run(
                    `
                      UPDATE MCorte 
                      SET 
                        venta_cor = ?, 
                        gasto_cor = ?, 
                        balance_cor = ?, 
                        recogido_cor = ?, 
                        fechaFinal_cor = ?, 
                        actual_cor = 0, 
                        id_user = ?, 
                        ticket_cor = ?
                      WHERE id_cor = ?
                      `,
                    [
                      venta_cor,
                      gasto_cor,
                      balance_cor,
                      recogido_cor,
                      new Date().toISOString(),
                      id_user,
                      combinedTickets,
                      id_cor,
                    ],
                    function (err) {
                      if (err) {
                        return callback(err);
                      }

                      db.get(
                        "SELECT * FROM MCorte WHERE id_cor = ?",
                        [id_cor],
                        (err, updatedRow) => {
                          if (err) {
                            return callback(err);
                          }
                          callback(null, updatedRow);
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
};

const updateCorte = (id, updates, callback) => {
  const setString = Object.keys(updates)
    .map((key) => `${key} = ?`)
    .join(", ");
  const values = Object.values(updates).concat(id);

  db.run(
    `UPDATE MCorte SET ${setString} WHERE id_cor = ?`,
    values,
    function (err) {
      if (err) {
        return callback(err);
      }
      callback(null, { changes: this.changes });
    }
  );
};

const deleteCorte = (id, callback) => {
  db.run("DELETE FROM MCorte WHERE id_pro = ?", [id], function (err) {
    if (err) {
      return callback(err);
    }
    callback(null, { changes: this.changes });
  });
};

// Función para combinar los tickets de ventas
const combineTickets = (ventas) => {
  const combined = ventas.reduce((acc, venta) => {
    const ticket = JSON.parse(venta.ticket_ven);
    ticket.forEach((item) => {
      if (acc[item.nombre_pro]) {
        acc[item.nombre_pro] += item.cantidad;
      } else {
        acc[item.nombre_pro] = item.cantidad;
      }
    });
    return acc;
  }, {});

  return JSON.stringify(
    Object.keys(combined).map((key) => ({
      nombre_pro: key,
      cantidad: combined[key],
    }))
  );
};

module.exports = {
  getAllCortes,
  getCorteById,
  getCorteActual,
  getCortesByDateRange,
  createCorte,
  finishCorte,
  updateCorte,
  deleteCorte,
};
