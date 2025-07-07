const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.get("/usuario", usuarioController.getUsuario);
router.post("/usuario", usuarioController.salvarUsuario);
router.put("/usuario/:id", usuarioController.atualizarUsuario);
router.delete("/usuario/:id", usuarioController.deletarUsuario);

module.exports = router;
