const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

const env = process.env.NODE_ENV || "development";
dotenv.config({ path: `.env.${env}` });

const dbPath = path.join(__dirname, "../../", process.env.DATABASE_PATH);

const initializeDatabase = (db) => {
  db.serialize(() => {
    // Coloca aquí tus scripts de creación de tablas
    db.run(
      `
      CREATE TABLE IF NOT EXISTS CProducto (
        id_pro INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre_pro TEXT NOT NULL,
        cantidad_pro INTEGER NOT NULL DEFAULT 0,
        estado_pro INTEGER NOT NULL DEFAULT 1
      );
    `,
      (err) => {
        if (err) {
          console.error("Error creating CProducto table:", err.message);
        }
      }
    );

    db.run(
      `
      CREATE TABLE IF NOT EXISTS CCliente (
        id_cli INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre_cli TEXT NOT NULL,
        tel_cli TEXT,
        ubi_cli TEXT NOT NULL,
        deuda_cli REAL NOT NULL DEFAULT 0.0,
        precios_cli TEXT NOT NULL,
        estado_cli INTEGER NOT NULL DEFAULT 1
      );
    `,
      (err) => {
        if (err) {
          console.error("Error creating CCliente table:", err.message);
        }
      }
    );

    db.run(
      `
      CREATE TABLE IF NOT EXISTS CRepartidor (
        id_rep INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre_rep TEXT NOT NULL,
        tel_rep TEXT NOT NULL,
        deuda_rep REAL NOT NULL DEFAULT 0.0,
        estado_rep INTEGER NOT NULL DEFAULT 1
      );
    `,
      (err) => {
        if (err) {
          console.error("Error creating CRepartidor table:", err.message);
        }
      }
    );

    db.run(
      `
      CREATE TABLE IF NOT EXISTS CStatus (
        id_sta INTEGER PRIMARY KEY,
        nombre_sta TEXT NOT NULL
      );
    `,
      (err) => {
        if (err) {
          console.error("Error creating CStatus table:", err.message);
        }
      }
    );

    db.run(
      `
      CREATE TABLE IF NOT EXISTS MPedido (
        id_ped INTEGER PRIMARY KEY AUTOINCREMENT,
        id_cli INTEGER NOT NULL,
        id_sta INTEGER NOT NULL DEFAULT 1,
        id_rep INTEGER DEFAULT NULL,
        fRecepcion_ped TEXT NOT NULL,
        fEntrega_ped TEXT NOT NULL,
        ticket_ped TEXT NOT NULL,
        costo_ped REAL NOT NULL,
        pago_ped REAL DEFAULT NULL,
        FOREIGN KEY (id_cli) REFERENCES CCliente (id_cli),
        FOREIGN KEY (id_sta) REFERENCES CStatus (id_sta),
        FOREIGN KEY (id_rep) REFERENCES CRepartidor (id_rep)
      );
    `,
      (err) => {
        if (err) {
          console.error("Error creating MPedido table:", err.message);
        }
      }
    );

    db.run(
      `
      CREATE TABLE IF NOT EXISTS MCorte (
        id_cor INTEGER PRIMARY KEY AUTOINCREMENT,
        fechaInicio_cor TEXT NOT NULL,
        fechaFinal_cor TEXT DEFAULT NULL,
        ticket_cor TEXT DEFAULT NULL,
        venta_cor REAL DEFAULT 0.0,
        gasto_cor REAL DEFAULT 0.0,
        balance_cor REAL DEFAULT 0.0,
        recogido_cor REAL DEFAULT NULL,
        actual_cor INTEGER NOT NULL DEFAULT 1, 
        id_user INTEGER DEFAULT NULL,
        FOREIGN KEY (id_user) REFERENCES MUser (id_user)
      );
    `,
      (err) => {
        if (err) {
          console.error("Error creating MCorte table:", err.message);
        }
      }
    );

    db.run(
      `
      CREATE TABLE IF NOT EXISTS MVenta (
        id_ven INTEGER PRIMARY KEY AUTOINCREMENT,
        fecha_ven TEXT NOT NULL,
        ticket_ven TEXT NOT NULL,
        monto_ven REAL NOT NULL,
        id_cor INTEGER NOT NULL,
        FOREIGN KEY (id_cor) REFERENCES MCorte (id_cor)
      );
    `,
      (err) => {
        if (err) {
          console.error("Error creating MVenta table:", err.message);
        }
      }
    );

    db.run(
      `
      CREATE TABLE IF NOT EXISTS MGasto (
        id_gas INTEGER PRIMARY KEY AUTOINCREMENT,
        fecha_gas TEXT NOT NULL,
        descripcion_gas TEXT NOT NULL,
        monto_gas REAL NOT NULL,
        id_cor INTEGER NOT NULL,
        FOREIGN KEY (id_cor) REFERENCES MCorte (id_cor)
      );
    `,
      (err) => {
        if (err) {
          console.error("Error creating MGasto table:", err.message);
        }
      }
    );

    db.run(
      `
      CREATE TABLE IF NOT EXISTS CRol (
        id_rol INTEGER PRIMARY KEY,
        nombre_rol TEXT NOT NULL
      );
    `,
      (err) => {
        if (err) {
          console.error("Error creating CRol table:", err.message);
        }
      }
    );

    db.run(
      `
      CREATE TABLE IF NOT EXISTS MUser (
        id_user INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre_user TEXT NOT NULL UNIQUE,
        tel_user TEXT NOT NULL,
        usuario_user TEXT NOT NULL,
        contrasena_user TEXT NOT NULL,
        id_rol INTEGER NOT NULL,
        estado_user INTEGER NOT NULL,
        FOREIGN KEY (id_rol) REFERENCES CRol (id_rol)
      );
    `,
      (err) => {
        if (err) {
          console.error("Error creating MUser table:", err.message);
        }
      }
    );

    db.run(
      `
      INSERT INTO CProducto (nombre_pro, cantidad_pro, estado_pro) VALUES
      ('Tortilla', -1, 1),
      ('Masa', -1, 1),
      ('Papel', -1, 1);
    `,
      (err) => {
        if (err) {
          console.error("Error inserting into CProducto table:", err.message);
        }
      }
    );

    db.run(
      `
      INSERT INTO CStatus (id_sta, nombre_sta) VALUES
      (1, 'Pendiente'),
      (2, 'Enviado'),
      (3, 'Entregado');
    `,
      (err) => {
        if (err) {
          console.error("Error inserting into CStatus table:", err.message);
        }
      }
    );

    db.run(
      `
      INSERT INTO CRol (id_rol, nombre_rol) VALUES
      (1, 'Mostrador'),
      (2, 'Admin');
    `,
      (err) => {
        if (err) {
          console.error("Error inserting into CRol table:", err.message);
        }
      }
    );
  });
};

const dbExists = fs.existsSync(dbPath);
const db = new sqlite3.Database(dbPath);

if (!dbExists) {
  initializeDatabase(db);
}

module.exports = db;
