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
const repartidorRoutes = require(path.join(routesBasePath, "repartidorRoutes"));
const statusRoutes = require(path.join(routesBasePath, "statusRoutes"));
const pedidoRoutes = require(path.join(routesBasePath, "pedidoRoutes"));
// const corteRoutes = require(path.join(routesBasePath, "corteRoutes"));
// const ventaRoutes = require(path.join(routesBasePath, "ventaRoutes"));
// const gastoRoutes = require(path.join(routesBasePath, "gastoRoutes"));
// const rolRoutes = require(path.join(routesBasePath, "rolRoutes"));
// const userRoutes = require(path.join(routesBasePath, "userRoutes"));

// Usar rutas
app.use("/api/producto", productoRoutes);
app.use("/api/cliente", clienteRoutes);
app.use("/api/repartidor", repartidorRoutes);
app.use("/api/status", statusRoutes);
app.use("/api/pedido", pedidoRoutes);
// app.use("/api/corte", corteRoutes);
// app.use("/api/venta", ventaRoutes);
// app.use("/api/gasto", gastoRoutes);
// app.use("/api/rol", rolRoutes);
// app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});

module.exports = app;
