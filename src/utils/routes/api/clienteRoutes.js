const express = require("express");
const router = express.Router();
const clienteController = require("../../../db/CCliente");

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
  const cliente = req.body;
  clienteController.createCliente(cliente, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(201).send(result);
  });
});

router.put("/:id/deuda", (req, res) => {
  const id = req.params.id;
  const deuda_cli = parseFloat(req.body);

  clienteController.updateClienteDeuda(id, deuda_cli, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(result);
  });
});

router.put("/:id/estado", (req, res) => {
  const id = req.params.id;
  const estado_cli = parseInt(req.body);

  clienteController.updateClienteEstado(id, estado_cli, (err, result) => {
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
