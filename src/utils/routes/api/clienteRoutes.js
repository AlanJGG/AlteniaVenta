const express = require('express');
const router = express.Router();
const clienteController = require('../../../db/CCliente');

router.get("/", (req, res) => {
  clienteController.getAllClientes((err, rows) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(rows);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  clienteController.getClienteById(id, (err, row) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(row);
  });
});

router.post("/", (req, res) => {
  const { nombre_pro } = req.body;
  clienteController.createCliente(nombre_pro, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(201).send(result);
  });
});

router.put("/:id/deuda", (req, res) => {
  const id = req.params.id;
  const cliente = req.body;
  clienteController.updateClienteDeuda(id, cliente, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(result);
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  clienteController.deleteCliente(id, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(result);
  });
});

module.exports = router;
