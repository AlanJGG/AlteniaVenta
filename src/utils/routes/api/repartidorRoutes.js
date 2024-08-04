const express = require("express");
const router = express.Router();
const repartidorController = require("../../../db/CRepartidor");

router.get("/", (req, res) => {
  repartidorController.getAllRepartidores((err, rows) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(rows);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  repartidorController.getRepartidorById(id, (err, row) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(row);
  });
});

router.post("/", (req, res) => {
  const repartidor = req.body;
  repartidorController.createRepartidor(repartidor, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(201).send(result);
  });
});

router.put("/:id/deuda", (req, res) => {
  const id = req.params.id;
  const deuda_rep = parseFloat(req.body);

  repartidorController.updateRepartidorDeuda(id, deuda_rep, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(result);
  });
});

router.put("/:id/estado", (req, res) => {
  const id = req.params.id;
  const estado_rep = parseInt(req.body);

  repartidorController.updateRepartidorEstado(id, estado_rep, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(result);
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  repartidorController.deleteRepartidor(id, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(result);
  });
});

module.exports = router;
