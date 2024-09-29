import express from "express";
import { actualizarUnProducto, crearProducto, eliminarProducto, traerProductosPorCategoria, traerTodosProductos, traerUnProducto } from "../controllers/product-controller.js";
import { multerConfig } from "../middlewares/multer.js";
// import ProductController from "../controllers/product-controller.js";
//import { checkAuth } from "../middlewares/auth.js";

const router = express.Router();

router.get('/products', traerTodosProductos);
router.get('/products/:product_id', traerUnProducto);
router.post('/products', multerConfig.single('imagen'), crearProducto);
router.patch('/products/:product_id', multerConfig.single('imagen'), actualizarUnProducto)
router.delete('/products/:product_id', eliminarProducto)
router.get("/products/category/:category", traerProductosPorCategoria);
//router.post('/products', checkAuth('admin'));
//router.patch('/products/:product_id', checkAuth('admin'))
//router.delete('/products/:product_id', checkAuth('admin'))


export default router