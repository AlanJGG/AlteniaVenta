const express = require("express");
const router = express.Router();
const repartidorController = require("../../db/CRepartidor");
const { body, param, validationResult } = require("express-validator");

router.get("/", (req, res) => {
  repartidorController.getAllRepartidores((err, rows) => {
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
    repartidorController.getRepartidorById(id, (err, row) => {
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
    body("nombre_rep").isString().withMessage("nombre_rep must be a string"),
    body("telefono_rep")
      .isString()
      .withMessage("telefono_rep must be a string"),
    body("estado_rep").isInt().withMessage("estado_rep must be an integer"),
    body("deuda_rep").isFloat().withMessage("deuda_rep must be a float"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const repartidor = req.body;
    repartidorController.createRepartidor(repartidor, (err, result) => {
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
    body().isFloat().withMessage("deuda_rep must be a float"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = req.params.id;
    const deuda_rep = parseFloat(req.body);

    repartidorController.updateRepartidorDeuda(id, deuda_rep, (err, result) => {
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
    body().isInt().withMessage("estado_rep must be an integer"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = req.params.id;
    const estado_rep = parseInt(req.body);

    repartidorController.updateRepartidorEstado(
      id,
      estado_rep,
      (err, result) => {
        if (err) {
          return res.status(500).send(err.message);
        }
        res.send(result);
      }
    );
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
    repartidorController.deleteRepartidor(id, (err, result) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.send(result);
    });
  }
);

module.exports = router;
