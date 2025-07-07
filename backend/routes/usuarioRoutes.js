const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.get("/usuario", usuarioController.getUsuario);
router.get("/usuario/:id", usuarioController.getUserById);
router.post("/usuario", usuarioController.saveUser);
router.put("/usuario/:id", usuarioController.updateUser);
router.delete("/usuario/:id", usuarioController.deleteUser);

module.exports = router;
