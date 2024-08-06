const express = require("express");
const router = express.Router();
const statusController = require("../../db/CStatus");
const { param, validationResult } = require("express-validator");

router.get("/", (req, res) => {
  statusController.getAllStatus((err, rows) => {
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
    statusController.getStatusById(id, (err, row) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.send(row);
    });
  }
);

module.exports = router;
