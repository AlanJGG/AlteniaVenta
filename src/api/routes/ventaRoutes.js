const express = require("express");
const router = express.Router();
const ventaController = require("../../db/MVenta");
const { body, param, validationResult } = require("express-validator");

router.get("/", (req, res) => {
  ventaController.getAllVentas((err, rows) => {
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
    ventaController.getVentaById(id, (err, row) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.send(row);
    });
  }
);

router.get(
  "/corte/:id_cor",
  [param("id_cor").isInt().withMessage("id_cor must be an integer")],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id_cor = req.params.id_cor;
    ventaController.getVentasByCorte(id_cor, (err, row) => {
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
    body().isArray().withMessage("Ticket must be an array"),
    body("*.id_pro").isInt().withMessage("id_pro must be an integer"),
    body("*.cantidad").isInt().withMessage("cantidad must be an integer"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const ticket_ven = JSON.stringify(req.body);
    ventaController.createVenta(ticket_ven, (err, result) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.status(201).send(result);
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
    ventaController.deleteVenta(id, (err, result) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.send(result);
    });
  }
);

module.exports = router;
