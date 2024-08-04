const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Ruta donde se generará la base de datos
const dbPath = path.join(__dirname, 'database.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Conectado a la base de datos SQLite.');
});

// Crea las tablas y añade datos de ejemplo
db.serialize(() => {
  db.run(`DROP TABLE IF EXISTS CProducto`);
  db.run(`CREATE TABLE IF NOT EXISTS CProducto (
    id_pro INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre_pro TEXT NOT NULL,
    cantidad_pro INTEGER NOT NULL DEFAULT 0,
    estado_pro INTEGER NOT NULL DEFAULT 1
  )`);

  db.run(`DROP TABLE IF EXISTS CCliente`);
  db.run(`CREATE TABLE IF NOT EXISTS CCliente (
    id_cli INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre_cli TEXT NOT NULL,
    tel_cli TEXT,
    ubi_cli TEXT NOT NULL,
    deuda_cli REAL NOT NULL DEFAULT 0.0,
    precios_cli TEXT NOT NULL,
    estado_cli INTEGER NOT NULL DEFAULT 1
  )`);

  db.run(`DROP TABLE IF EXISTS CRepartidor`);
  db.run(`CREATE TABLE IF NOT EXISTS CRepartidor (
    id_rep INTEGER PRIMARY KEY,
    nombre_rep TEXT NOT NULL,
    tel_rep TEXT NOT NULL,
    deuda_rep REAL NOT NULL DEFAULT 0.0,
    estado_rep INTEGER NOT NULL DEFAULT 1
  )`);

  db.run(`DROP TABLE IF EXISTS MPedido`);
  db.run(`CREATE TABLE IF NOT EXISTS MPedido (
    id_ped INTEGER PRIMARY KEY,
    id_cli INTEGER NOT NULL,
    id_rep INTEGER NOT NULL,
    productos_ped TEXT NOT NULL,
    fRecepcion_ped TEXT NOT NULL,
    fEntrega_ped TEXT NOT NULL,
    costo_ped REAL NOT NULL,
    pago_ped REAL NOT NULL,
    status_ped TEXT NOT NULL,
    FOREIGN KEY (id_cli) REFERENCES CCliente (id_cli),
    FOREIGN KEY (id_rep) REFERENCES CRepartidor (id_rep)
  )`);

  db.run(`DROP TABLE IF EXISTS MCorte`);
  db.run(`CREATE TABLE IF NOT EXISTS MCorte (
    id_cor INTEGER PRIMARY KEY AUTOINCREMENT,
    fechaInicio_cor TEXT NOT NULL,
    fechaFinal_cor TEXT NULL DEFAULT NULL,
    ticket_cor TEXT NOT NULL,
    balance_cor REAL NOT NULL DEFAULT 0.0,
    id_user INTEGER NOT NULL
  )`);

  db.run(`DROP TABLE IF EXISTS MVenta`);
  db.run(`CREATE TABLE IF NOT EXISTS MVenta (
    id_ven INTEGER PRIMARY KEY AUTOINCREMENT,
    fecha_ven TEXT NOT NULL,
    ticket_ven TEXT NOT NULL,
    monto_ven REAL NOT NULL,
    id_cor INTEGER NOT NULL,
    FOREIGN KEY (id_cor) REFERENCES MCorte (id_cor)
  )`);

  db.run(`DROP TABLE IF EXISTS MGasto`);
  db.run(`CREATE TABLE IF NOT EXISTS MGasto (
    id_gas INTEGER PRIMARY KEY AUTOINCREMENT,
    fecha_gas TEXT NOT NULL,
    descripcion_gas TEXT NOT NULL,
    monto_gas REAL NOT NULL,
    id_cor INTEGER NOT NULL,
    FOREIGN KEY (id_cor) REFERENCES MCorte (id_cor)
  )`);

  db.run(`DROP TABLE IF EXISTS CRol`);
  db.run(`CREATE TABLE IF NOT EXISTS CRol (
    id_rol INTEGER PRIMARY KEY,
    nombre_rol TEXT NOT NULL
  )`);

  db.run(`DROP TABLE IF EXISTS MUser`);
  db.run(`CREATE TABLE IF NOT EXISTS MUser (
    id_user INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre_user TEXT NOT NULL,
    tel_user TEXT NOT NULL,
    usuario_user TEXT NOT NULL,
    contrasena_user TEXT NOT NULL,
    id_rol INTEGER NOT NULL,
    estado_user INTEGER NOT NULL,
    FOREIGN KEY (id_rol) REFERENCES CRol (id_rol)
  )`);

  // Añade datos de ejemplo en CProducto
  // const stmtProducto = db.prepare(`INSERT INTO CProducto (nombre_pro, cantidad_pro) VALUES (?, ?)`);
  // stmtProducto.run('Tortilla', -1);
  // stmtProducto.run('Masa', -1);
  // stmtProducto.finalize();

  // // Añade datos de ejemplo en CCliente
  // const stmtCliente = db.prepare(`INSERT INTO CCliente (nombre_cli, tel_cli, ubi_cli, precios_cli) VALUES (?, ?, ?, ?)`);
  // stmtCliente.run('Cliente1', '1234567890', 'Ubicacion1', 'Precios1');
  // stmtCliente.run('Cliente2', '0987654321', 'Ubicacion2', 'Precios2');
  // stmtCliente.finalize();

  // // Añade datos de ejemplo en CRepartidor
  // const stmtRepartidor = db.prepare(`INSERT INTO CRepartidor (nombre_rep, tel_rep) VALUES (?, ?)`);
  // stmtRepartidor.run('Repartidor1', '1234567890');
  // stmtRepartidor.run('Repartidor2', '0987654321');
  // stmtRepartidor.finalize();

  // // Añade datos de ejemplo en CRol
  // const stmtRol = db.prepare(`INSERT INTO CRol (nombre_rol) VALUES (?)`);
  // stmtRol.run('Admin');
  // stmtRol.run('User');
  // stmtRol.finalize();

  // // Añade datos de ejemplo en MUser
  // const stmtUser = db.prepare(`INSERT INTO MUser (nombre_user, tel_user, usuario_user, contrasena_user, id_rol, estado_user) VALUES (?, ?, ?, ?, ?, ?)`);
  // stmtUser.run('User1', '1234567890', 'user1', 'password1', 1, 1);
  // stmtUser.run('User2', '0987654321', 'user2', 'password2', 2, 1);
  // stmtUser.finalize();

  // // Ejemplo de consulta para verificar inserciones
  // db.each(`SELECT id_user, nombre_user, usuario_user FROM MUser`, (err, row) => {
  //   if (err) {
  //     throw err;
  //   }
  //   console.log(`${row.id_user}: ${row.nombre_user} - ${row.usuario_user}`);
  // });
});

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Cerrada la conexión con la base de datos SQLite.');
});
