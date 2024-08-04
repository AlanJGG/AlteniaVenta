const express = require('express');
const app = express();
const port = 3001;

const productoRoutes = require('./src/db/CProducto');
const clienteRoutes = require('./src/db/CCliente');
const repartidorRoutes = require('./src/db/CRepartidor');
const rolRoutes = require('./src/db/CRol');
const corteRoutes = require('./src/db/MCorte');
const gastoRoutes = require('./src/db/MGasto');
const pedidoRoutes = require('./src/db/MPedido');
const userRoutes = require('./src/db/MUser');
const ventaRoutes = require('./src/db/MVenta');
// Importa las rutas de los demás módulos según sea necesario

app.use(express.json());

// Rutas para CProducto
app.get('/api/productos', (req, res) => {
  productoRoutes.getAllProducts((err, rows) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(rows);
  });
});

app.get('/api/productos/:id', (req, res) => {
  const id = req.params.id;
  productoRoutes.getProductById(id, (err, row) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(row);
  });
});

app.post('/api/productos', (req, res) => {
  const product = req.body;
  productoRoutes.createProduct(product, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(201).send(result);
  });
});

app.put('/api/productos/:id', (req, res) => {
  const id = req.params.id;
  const product = req.body;
  productoRoutes.updateProduct(id, product, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(result);
  });
});

app.delete('/api/productos/:id', (req, res) => {
  const id = req.params.id;
  productoRoutes.deleteProduct(id, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(result);
  });
});

// Repite las rutas para las demás tablas

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});

module.exports = app;
