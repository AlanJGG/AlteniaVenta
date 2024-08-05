const express = require("express");
const router = express.Router();
const statusController = require("../../../db/CStatus");

router.get("/", (req, res) => {
  statusController.getAllStatus((err, rows) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(rows);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  statusController.getStatusById(id, (err, row) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(row);
  });
});

module.exports = router;
