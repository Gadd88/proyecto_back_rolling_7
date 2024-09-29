const express = require("express");
const { inicioSesion } = require("../controllers/user-controller.js"); // Usa require en lugar de import

const router = express.Router();

router.post('/login', inicioSesion);

module.exports = router;
