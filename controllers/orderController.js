const router = require('express').Router();
const orderModel = require('../models/order/orderModel')
// const auth  = require('../authentication/auth')

// När en post mot /new görs så ska createOrder köras som ligger i orderModel
router.get('/', orderModel.getOrder);
router.post('/new', orderModel.createOrder)


module.exports = router;