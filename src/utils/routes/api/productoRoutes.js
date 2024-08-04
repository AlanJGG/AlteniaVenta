const express = require("express");
const router = express.Router();
const productoController = require("../../../db/CProducto");

router.get("/", (req, res) => {
  productoController.getAllProducts((err, rows) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(rows);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  productoController.getProductById(id, (err, row) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(row);
  });
});

router.post("/", (req, res) => {
  const nombre_pro = req.body;
  console.log("NOMBRE:", nombre_pro);
  productoController.createProduct(nombre_pro, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(201).send(result);
  });
});

router.put("/:id/cantidad", (req, res) => {
  const id = req.params.id;
  const cantidad_pro = parseInt(req.body);
  productoController.updateProductCantidad(id, cantidad_pro, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(result);
  });
});

router.put("/:id/estado", (req, res) => {
  const id = req.params.id;
  const estado_pro = parseInt(req.body);
  productoController.updateProductEstado(id, estado_pro, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(result);
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  productoController.deleteProduct(id, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(result);
  });
});

module.exports = router;
