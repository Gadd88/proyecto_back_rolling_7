const express = require('express')
const productRoutes = require('./product-route')
const userRoutes = require('./user-route')
const authRoutes = require('./auth-route')

const router = express.Router()

router.use('/', productRoutes)
router.use('/', userRoutes)
router.use('/', authRoutes)


module.exports = router