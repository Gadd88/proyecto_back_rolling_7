const express = require("express");
const {
  crearUsuario,
  traerTodosLosUsuarios,
  traerUnUsuario,
  actualizarUnUsuario,
  eliminarUnUsuario,
  habilitarUnUsuario,
  deshabilitarUnUsuario
} = require("../controllers/user-controller.js");
const checkAuth = require("../middlewares/auth.js");  

const router = express.Router();

router.get('/users', traerTodosLosUsuarios);
router.get('/users/:user_id', traerUnUsuario);
router.post('/users', crearUsuario);
router.patch('/users/:user_id', checkAuth('admin'), actualizarUnUsuario);
router.patch('/users/:user_id/habilitar', checkAuth('admin'), habilitarUnUsuario);
router.patch('/users/:user_id/deshabilitar', checkAuth('admin'), deshabilitarUnUsuario);
router.delete('/users/:user_id', checkAuth('admin'), eliminarUnUsuario);

module.exports = router;
