const express = require("express");
const router = express.Router();
const corteController = require("../../../db/MCorte");

router.get("/", (req, res) => {
  corteController.getAllCortes((err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(200).send(result);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  corteController.getCorteById(id, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(200).send(result);
  });
});

router.get("/actual", (req, res) => {
  corteController.getCorteActual((err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(200).send(result);
  });
});

router.get("/range", (req, res) => {
  const { startDate, endDate } = req.query;

  corteController.getCortesByDateRange(startDate, endDate, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(200).send(result);
  });
});

router.post("/", (req, res) => {
  corteController.createCorte((err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(201).send(result);
  });
});

router.put("/finish", (req, res) => {
  const { recogido_cor, id_user } = req.body;

  corteController.finishCorte({ recogido_cor, id_user }, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(200).send(result);
  });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  corteController.updateCorte(id, updates, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(200).send(result);
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  corteController.deleteCorte(id, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(200).send(result);
  });
});

module.exports = router;
