const express = require("express");
const router = express.Router();
const corteController = require("../../../db/MCorte");
const { body, param, query, validationResult } = require("express-validator");

router.get("/", (req, res) => {
  corteController.getAllCortes((err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(200).send(result);
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
    corteController.getCorteById(id, (err, result) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.status(200).send(result);
    });
  }
);

router.get("/actual", (req, res) => {
  corteController.getCorteActual((err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(200).send(result);
  });
});

router.get(
  "/range",
  [
    query("startDate")
      .isISO8601()
      .withMessage("startDate must be a valid date"),
    query("endDate").isISO8601().withMessage("endDate must be a valid date"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { startDate, endDate } = req.query;

    corteController.getCortesByDateRange(startDate, endDate, (err, result) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.status(200).send(result);
    });
  }
);

router.post("/", (req, res) => {
  corteController.createCorte((err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(201).send(result);
  });
});

router.put(
  "/finish",
  [
    body("recogido_cor").isFloat().withMessage("recogido_cor must be a float"),
    body("id_user").isInt().withMessage("id_user must be an integer"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { recogido_cor, id_user } = req.body;

    corteController.finishCorte({ recogido_cor, id_user }, (err, result) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.status(200).send(result);
    });
  }
);

router.put(
  "/:id",
  [
    param("id").isInt().withMessage("id must be an integer"),
    body("recogido_cor")
      .optional()
      .isFloat()
      .withMessage("recogido_cor must be a float"),
    body("id_user")
      .optional()
      .isInt()
      .withMessage("id_user must be an integer"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = req.params.id;
    const updates = req.body;

    corteController.updateCorte(id, updates, (err, result) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.status(200).send(result);
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

    corteController.deleteCorte(id, (err, result) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.status(200).send(result);
    });
  }
);

module.exports = router;
