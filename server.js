const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json()); // Middleware para analizar JSON
app.use(express.text()); // Middleware para analizar texto plano

// Ruta base
const routesBasePath = path.resolve(__dirname, "./src/utils/routes/api");

// Importar rutas
const productoRoutes = require(path.join(routesBasePath, "productoRoutes"));
const clienteRoutes = require(path.join(routesBasePath, "clienteRoutes"));
// Importa otras rutas según sea necesario

// Usar rutas
app.use("/api/productos", productoRoutes);
app.use("/api/clientes", clienteRoutes);
// Usa otras rutas según sea necesario

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});

module.exports = app;
