/*import express from "express";
// import UserController from "../controllers/user-controller.js";
import { checkAuth } from "../middlewares/auth.js";

const router = express.Router();

router.get('/users');
router.get('/users/:user_id');
router.post('/users', checkAuth('admin'));
router.patch('/users/:user_id', checkAuth('admin'))
router.delete('/users/:user_id', checkAuth('admin'))


export default router */


const express = require('express')
const { crearUsuario, traerTodosLosUsuarios, traerUnUsuario, actualizarUnUsuario, eliminarUnUsuario, inicioSesion, habilitarUnUsuario, deshabilitarUnUsuario } = require('../controllers/usuarios.controllers')
const auth = require('../middlewares/auth')
const { check } = require('express-validator')

const router = express.Router()

router.post('/', [
  check('nombreUsuario', 'Campo NOMBREUSUARIO vacio').not().isEmpty(),
  check('nombreUsuario', 'Minimo de 5 caracteres').isLength({min:5}),
  check('contrasenia', 'Campo CONTRASEÑA vacio').not().isEmpty(),
  check('contrasenia', 'Min: 8 y Max: 40').isLength({min:8, max:40}),
], crearUsuario)