const express = require("express");
const router = express.Router();
const gastoController = require("../../../db/CGasto");
const { body, param, validationResult } = require("express-validator");

router.get("/", (req, res) => {
  gastoController.getAllGastos((err, rows) => {
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
    gastoController.getGastoById(id, (err, row) => {
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
    gastoController.getGastosByCorte(id_cor, (err, row) => {
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
    body("descripcion_gas")
      .isString()
      .withMessage("descripcion_gas must be a string"),
    body("monto_gas").isFloat().withMessage("monto_gas must be a float"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { descripcion_gas, monto_gas } = req.body;
    gastoController.createGasto(
      { descripcion_gas, monto_gas },
      (err, result) => {
        if (err) {
          return res.status(500).send(err.message);
        }
        res.status(201).send(result);
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
    gastoController.deleteGasto(id, (err, result) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.send(result);
    });
  }
);

module.exports = router;
