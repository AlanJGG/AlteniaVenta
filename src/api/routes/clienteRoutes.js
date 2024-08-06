const express = require("express");
const router = express.Router();
const clienteController = require("../../db/CCliente");
const { body, param, validationResult } = require("express-validator");

router.get("/", (req, res) => {
  clienteController.getAllClientes((err, rows) => {
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
    clienteController.getClienteById(id, (err, row) => {
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
    body("nombre_cli").isString().withMessage("nombre_cli must be a string"),
    body("tel_cli").isString().withMessage("tel_cli must be a string"),
    body("ubi_cli").isString().withMessage("ubi_cli must be a string"),
    body("precios_cli").isArray().withMessage("precios_cli must be an array"),
    body("precios_cli.*.id_pro")
      .isInt()
      .withMessage("id_pro must be an integer"),
    body("precios_cli.*.nombre_pro")
      .isString()
      .withMessage("nombre_pro must be a string"),
    body("precios_cli.*.precio")
      .isFloat()
      .withMessage("precio must be a float"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const cliente = req.body;
    clienteController.createCliente(cliente, (err, result) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.status(201).send(result);
    });
  }
);

router.put(
  "/:id/deuda",
  [
    param("id").isInt().withMessage("id must be an integer"),
    body().isFloat().withMessage("deuda_cli must be a float"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = req.params.id;
    const deuda_cli = parseFloat(req.body);

    clienteController.updateClienteDeuda(id, deuda_cli, (err, result) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.send(result);
    });
  }
);

router.put(
  "/:id/estado",
  [
    param("id").isInt().withMessage("id must be an integer"),
    body().isInt().withMessage("estado_cli must be an integer"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = req.params.id;
    const estado_cli = parseInt(req.body);

    clienteController.updateClienteEstado(id, estado_cli, (err, result) => {
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
    clienteController.deleteCliente(id, (err, result) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.send(result);
    });
  }
);

module.exports = router;
