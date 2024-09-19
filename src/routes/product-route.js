import express from "express";
// import ProductController from "../controllers/product-controller.js";
import { checkAuth } from "../middlewares/auth.js";

const router = express.Router();

router.get('/products');
router.get('/products/:product_id');
router.post('/products', checkAuth('admin'));
router.patch('/products/:product_id', checkAuth('admin'))
router.delete('/products/:product_id', checkAuth('admin'))


export default router