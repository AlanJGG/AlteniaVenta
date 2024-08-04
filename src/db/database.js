// /src/db/database.js
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${env}` });

const dbPath = path.join(__dirname, '../../', process.env.DATABASE_PATH);

const initializeDatabase = (db) => {
  db.serialize(() => {
    // Coloca aquí tus scripts de creación de tablas
    db.run(`
      CREATE TABLE IF NOT EXISTS CProducto (
        id_pro INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre_pro TEXT NOT NULL,
        cantidad_pro INTEGER NOT NULL DEFAULT 0,
        estado_pro INTEGER NOT NULL DEFAULT 1
      );
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS CCliente (
        id_cli INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre_cli TEXT NOT NULL,
        tel_cli TEXT,
        ubi_cli TEXT NOT NULL,
        deuda_cli REAL NOT NULL DEFAULT 0.0,
        precios_cli TEXT NOT NULL,
        estado_cli INTEGER NOT NULL DEFAULT 1
      );
    `);

    // Agrega aquí las demás tablas de tu esquema
    db.run(`
      CREATE TABLE IF NOT EXISTS CRepartidor (
        id_rep INTEGER PRIMARY KEY,
        nombre_rep TEXT NOT NULL,
        tel_rep TEXT NOT NULL,
        deuda_rep REAL NOT NULL DEFAULT 0.0,
        estado_rep INTEGER NOT NULL DEFAULT 1
      );
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS MPedido (
        id_ped INTEGER PRIMARY KEY,
        id_cli INTEGER NOT NULL,
        id_rep INTEGER NOT NULL,
        fRecepcion_ped TEXT NOT NULL,
        fEntrega_ped TEXT NOT NULL,
        costo_ped REAL NOT NULL,
        pago_ped REAL NOT NULL,
        status_ped TEXT NOT NULL,
        FOREIGN KEY (id_cli) REFERENCES CCliente (id_cli),
        FOREIGN KEY (id_rep) REFERENCES CRepartidor (id_rep)
      );
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS MCorte (
        id_cor INTEGER PRIMARY KEY AUTOINCREMENT,
        fechaInicio_cor TEXT NOT NULL,
        fechaFinal_cor TEXT NULL DEFAULT NULL,
        ticket_cor TEXT NOT NULL,
        balance_cor REAL NOT NULL DEFAULT 0.0,
        id_user INTEGER NOT NULL
      );
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS MVenta (
        id_ven INTEGER PRIMARY KEY AUTOINCREMENT,
        fecha_ven TEXT NOT NULL,
        ticket_ven TEXT NOT NULL,
        monto_ven REAL NOT NULL,
        id_cor INTEGER NOT NULL,
        FOREIGN KEY (id_cor) REFERENCES MCorte (id_cor)
      );
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS MGasto (
        id_gas INTEGER PRIMARY KEY AUTOINCREMENT,
        fecha_gas TEXT NOT NULL,
        descripcion_gas TEXT NOT NULL,
        monto_gas REAL NOT NULL,
        id_cor INTEGER NOT NULL,
        FOREIGN KEY (id_cor) REFERENCES MCorte (id_cor)
      );
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS CRol (
        id_rol INTEGER PRIMARY KEY,
        nombre_rol TEXT NOT NULL
      );
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS MUser (
        id_user INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre_user TEXT NOT NULL,
        tel_user TEXT NOT NULL,
        usuario_user TEXT NOT NULL,
        contrasena_user TEXT NOT NULL,
        id_rol INTEGER NOT NULL,
        estado_user INTEGER NOT NULL,
        FOREIGN KEY (id_rol) REFERENCES CRol (id_rol)
      );
    `);
  });
};

const dbExists = fs.existsSync(dbPath);
const db = new sqlite3.Database(dbPath);

if (!dbExists) {
  initializeDatabase(db);
}

module.exports = db;
