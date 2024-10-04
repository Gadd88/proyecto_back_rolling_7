const express = require("express");
const uploadFile = require("../middlewares/multer.js");
const {
  actualizarUnProducto,
  crearProducto,
  eliminarProducto,
  traerProductosPorCategoria,
  traerTodosProductos,
  traerUnProducto,
} = require("../controllers/product-controller.js");
const checkAuth = require("../middlewares/auth.js");

const router = express.Router();

router.get("/products", traerTodosProductos);
router.get("/products/:product_id", traerUnProducto);
router.post(
  "/products",
  checkAuth("admin"),
  uploadFile.single("imagen"),
  crearProducto
);
router.patch(
  "/products/:product_id",
  checkAuth("admin"),
  uploadFile.single("imagen"),
  actualizarUnProducto
);
router.delete("/products/:product_id", checkAuth("admin"), eliminarProducto);
router.get("/products/category/:category", traerProductosPorCategoria);
//router.post('/products', checkAuth('admin'));
//router.patch('/products/:product_id', checkAuth('admin'))
//router.delete('/products/:product_id', checkAuth('admin'))

module.exports = router;
