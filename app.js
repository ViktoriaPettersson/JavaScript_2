//Hämtar paket
const express = require('express');
const app = express();
const cors = require('cors')


// Import på productController och userController
const productController = require('./controllers/productController')
const userController = require('./controllers/userController')
const orderController = require('./controllers/orderController')


// Få tillgång från olika adresser
app.use(cors()); 
app.use(express.urlencoded({extended: false}));
// Tolka JSON
app.use(express.json());


// Använda productController när vi går in på /products
app.use('/api/products', productController)
// Använda userController när vi går in på /users
app.use('/api/users', userController)
// Använda orderController när vi går in på /order
app.use('/api/order', orderController)


// Exporterar app
module.exports = app;