const express = require("express");
const router = express.Router();
const productoController = require("../../db/CProducto");
const { body, param, validationResult } = require("express-validator");

router.get("/", (req, res) => {
  productoController.getAllProducts((err, rows) => {
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
    productoController.getProductById(id, (err, row) => {
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
    body("nombre_pro").isString().withMessage("nombre_pro must be a string"),
    body("precioM_pro").isFloat().withMessage("precioM_pro must be a float"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { nombre_pro, precioM_pro } = req.body;
    productoController.createProduct(
      { nombre_pro, precioM_pro },
      (err, result) => {
        if (err) {
          return res.status(500).send(err.message);
        }
        res.status(201).send(result);
      }
    );
  }
);

router.put(
  "/:id/cantidad",
  [
    param("id").isInt().withMessage("id must be an integer"),
    body().isInt().withMessage("cantidad_pro must be an integer"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = req.params.id;
    const cantidad_pro = parseInt(req.body);
    productoController.updateProductCantidad(
      id,
      cantidad_pro,
      (err, result) => {
        if (err) {
          return res.status(500).send(err.message);
        }
        res.send(result);
      }
    );
  }
);

router.put(
  "/:id/estado",
  [
    param("id").isInt().withMessage("id must be an integer"),
    body().isInt().withMessage("estado_pro must be an integer"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = req.params.id;
    const estado_pro = parseInt(req.body);
    productoController.updateProductEstado(id, estado_pro, (err, result) => {
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
    productoController.deleteProduct(id, (err, result) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.send(result);
    });
  }
);

module.exports = router;
