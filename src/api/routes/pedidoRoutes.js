const express = require("express");
const router = express.Router();
const pedidoController = require("../../db/MPedido");
const { body, param, validationResult } = require("express-validator");

router.get("/", (req, res) => {
  pedidoController.getAllPedidos((err, rows) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(rows);
  });
});

router.get(
  "/:id",
  [param("id").isInt().withMessage("id must be an integer")],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = req.params.id;
    pedidoController.getPedidoById(id, (err, row) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.send(row);
    });
  }
);

router.post(
  "/",
  [
    body("nombre_ped").isString().withMessage("nombre_ped must be a string"),
    body("direccion_ped")
      .isString()
      .withMessage("direccion_ped must be a string"),
    body("telefono_ped")
      .isString()
      .withMessage("telefono_ped must be a string"),
    body("total_ped").isFloat().withMessage("total_ped must be a float"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const pedido = req.body;
    pedidoController.createPedido(pedido, (err, result) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.status(201).send(result);
    });
  }
);

router.put(
  "/:id/repartidor",
  [
    param("id").isInt().withMessage("id must be an integer"),
    body().isInt().withMessage("id_rep must be an integer"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = req.params.id;
    const id_rep = parseInt(req.body);

    pedidoController.updatePedidoRepartidor(id, id_rep, (err, result) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.send(result);
    });
  }
);

router.put(
  "/:id/status",
  [
    param("id").isInt().withMessage("id must be an integer"),
    body().isInt().withMessage("id_sta must be an integer"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = req.params.id;
    const id_sta = parseInt(req.body);

    pedidoController.updatePedidoStatus(id, id_sta, (err, result) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.send(result);
    });
  }
);

router.put(
  "/:id/pago",
  [
    param("id").isInt().withMessage("id must be an integer"),
    body().isFloat().withMessage("pago_ped must be a float"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = req.params.id;
    const pago_ped = parseFloat(req.body);

    pedidoController.updatePedidoPago(id, pago_ped, (err, result) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.send(result);
    });
  }
);

router.delete(
  "/:id",
  [param("id").isInt().withMessage("id must be an integer")],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = req.params.id;
    pedidoController.deletepedido(id, (err, result) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.send(result);
    });
  }
);

module.exports = router;
