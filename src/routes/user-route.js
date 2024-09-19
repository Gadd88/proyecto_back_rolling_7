import express from "express";
// import UserController from "../controllers/user-controller.js";
import { checkAuth } from "../middlewares/auth.js";

const router = express.Router();

router.get('/users');
router.get('/users/:user_id');
router.post('/users', checkAuth('admin'));
router.patch('/users/:user_id', checkAuth('admin'))
router.delete('/users/:user_id', checkAuth('admin'))


export default router