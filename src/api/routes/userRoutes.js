const express = require("express");
const router = express.Router();
const userController = require("../../db/MUser");
const { body, param, validationResult } = require("express-validator");

router.get("/", (req, res) => {
  userController.getAllUsers((err, rows) => {
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
    userController.getUserById(id, (err, row) => {
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
    body("nombre_user").isString().withMessage("nombre_user must be a string"),
    body("tel_user").isString().withMessage("tel_user must be a string"),
    body("usuario_user")
      .isString()
      .withMessage("usuario_user must be a string"),
    body("contrasena_user")
      .isString()
      .withMessage("contrasena_user must be a string"),
    body("id_rol").isInt().withMessage("id_rol must be an integer"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const user = req.body;
    userController.createUser(user, (err, result) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.status(201).send(result);
    });
  }
);

router.put(
  "/:id/password",
  [
    param("id").isInt().withMessage("id must be an integer"),
    body("newPassword").isString().withMessage("newPassword must be a string"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = req.params.id;
    const { newPassword } = req.body;

    userController.updateUserPassword(id, newPassword, (err, result) => {
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
    body("estado_user").isInt().withMessage("estado_user must be an integer"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = req.params.id;
    const { estado_user } = req.body;

    userController.updateUserStatus(id, estado_user, (err, result) => {
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
    userController.deleteUser(id, (err, result) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.send(result);
    });
  }
);

router.post(
  "/login",
  [
    body("usuario_user")
      .isString()
      .withMessage("usuario_user must be a string"),
    body("contrasena_user")
      .isString()
      .withMessage("contrasena_user must be a string"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { usuario_user, contrasena_user } = req.body;

    userController.authenticateUser(
      usuario_user,
      contrasena_user,
      (err, success, user) => {
        if (err) {
          return res.status(500).send(err.message);
        }
        if (!success) {
          return res
            .status(401)
            .json({ success: false, message: "Invalid username or password" });
        }
        res.json({
          success: true,
          message: `Welcome, ${user.nombre_user}`,
          user,
        });
      }
    );
  }
);

module.exports = router;
