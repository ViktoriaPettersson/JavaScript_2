const mongodb = require('mongoose');
//Hämtar class
const Order = require('./orderSchema');

exports.getOrder = (req, res) => {
    Order.find()
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(500).json(err))
}

exports.createOrder = (req, res) => {
                // ny instans av product 
                // Skapar en ny order som innehåller cart och userInfo
                const NewOrder = new Order({
                    // user: req.body.user
                    // cart: req.body.cart,
                    // userInfo: req.body.userInfo
                    cart: req.body.cart,
                    userInfo: req.body.userInfo
                    // price: req.body.price,
                    // quantity: req.body.quantity
                  
                })
                NewOrder.save()
                    .then(() => {
                        res.status(201).json({
                            statusCode: 201,
                            status: true,
                            message: 'Order created successfully'
                        })
                    })
                    .catch(() => {
                        res.status(500).json({
                            statusCode: 500,
                            status: false,
                            message: 'Failed to create order'
                        })
                    })
            }