const express = require("express");
const router = express.Router();
const pedidoController = require("../../../db/MPedido");

router.get("/", (req, res) => {
  pedidoController.getAllPedidos((err, rows) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(rows);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  pedidoController.getPedidoById(id, (err, row) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(row);
  });
});

router.post("/", (req, res) => {
  const pedido = req.body;
  pedidoController.createPedido(pedido, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(201).send(result);
  });
});

router.put("/:id/repartidor", (req, res) => {
  const id = req.params.id;
  const id_rep = parseInt(req.body);

  pedidoController.updatePedidoRepartidor(id, id_rep, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(result);
  });
});

router.put("/:id/status", (req, res) => {
  const id = req.params.id;
  const id_sta = parseInt(req.body);

  pedidoController.updatePedidoStatus(id, id_sta, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(result);
  });
});

router.put("/:id/pago", (req, res) => {
  const id = req.params.id;
  const pago_ped = parseFloat(req.body);

  pedidoController.updatePedidoPago(id, pago_ped, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(result);
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  pedidoController.deletepedido(id, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(result);
  });
});

module.exports = router;
