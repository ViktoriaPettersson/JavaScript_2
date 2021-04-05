// Hämtar express med router
const router = require('express').Router();
const productModel = require('../models/products/productModel')
const auth  = require('../authentication/auth')

// hämtar, skapar, uppdaterar och tar bort till olika endpoints
// Använder funktioner som ligger i productModel
// Testar skicka en get till sidan 

// router.get('/', (req, res) => {
//     res.send('hello')
// });

router.get('/', productModel.getProducts)
router.get('/:id', productModel.getOneProduct)
// Först körs verifyToken och om vi blir inloggade kan vi skapa, uppdatera och ta bort en produkt
router.post('/new', auth.verifyToken, productModel.createPoduct)
router.patch('/:id', auth.verifyToken, productModel.updateProduct)
router.delete('/:id', auth.verifyToken, productModel.deleteProduct)
// Exportera router
module.exports = router