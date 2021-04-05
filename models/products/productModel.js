const mongodb = require('mongoose');
//Hämtar class
const Product = require('./productSchema');

// Söka igenom ALLA produkterna i databasen
// Om allt går bra skickas en statuskod på 200 med JSON
// Vid fel hamnar den i catch med statuskod 500
exports.getProducts = (req, res) => {
    Product.find()
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(500).json(err))
}
// Hämta EN produkt som först kollar om id finns på servern och sedan kollar om produkten redan finns
exports.getOneProduct = (req, res) => {

    Product.exists({ _id: req.params.id }, (err, result) => {
        if (err) {
            return res.status(400).json(err)
        }
        else {
            if (result) {
                Product.findById(req.params.id)
                    .then(data => res.status(200).json(data))
                    .catch(err => res.status(500).json(err))
            }
            else {
                return res.status(404).json({
                    statusCode: 400,
                    status: false,
                    message: 'This product does not exist'
                })
            }
        }
    })
}
// Skapar en produkt och kollar först om den redan finns
exports.createPoduct = (req, res) => {
    Product.exists({ name: req.body.name }, (err, result) => {
        if (err) {
            return res.status(500).json(err)
        }
        else {
            if (result) {
                return res.status(400).json({
                    statusCode: 400,
                    status: false,
                    message: 'A product by that name already exsist, pelase update product insted'
                })
            }
            else {
                // ny instans av product 
                const Newproduct = new Product({

                    name: req.body.name,
                    short: req.body.short,
                    desc: req.body.desc,
                    price: req.body.price,
                    image: req.body.image
                })
                Newproduct.save()
                    .then(() => {
                        res.status(201).json({
                            statusCode: 201,
                            status: true,
                            message: 'Product created successfully'
                        })
                    })
                    .catch(() => {
                        res.status(500).json({
                            statusCode: 500,
                            status: false,
                            message: 'Failed to create product'
                        })
                    })
            }
        }
    })
}

//Uppdatera en produkt och först kolla om den redan finns

exports.updateProduct = (req, res) => {

    Product.exists({ _id: req.params.id }, (err, result) => {
      if(err) {
        return res.status(400).json(err)
      } else {
  
        if(result) {
          
          Product.updateOne({ _id: req.params.id }, {
            ...req.body,
            modified: Date.now()
          })
          .then(() => {
            res.status(200).json({
              statusCode: 200,
              status: true,
              message: 'Product updated successfully'
            })
          })
          .catch(() => {
            res.status(500).json({
              statusCode: 500,
              status: false,
              message: 'Failed to update product'
            })
          })
  
        }
        else {
          return res.status(404).json({
            statusCode: 404,
            status: false,
            message: 'This product does not exist'
          })
        }
  
      }
    })
  
  }
  // Ta bort en produkt och kollar först om den finns
  exports.deleteProduct = (req, res) => {
    Product.exists({ _id: req.params.id }, (err, result) => {
      if(err) {
        return res.status(400).json(err)
      } 
      else {
        if(result){
          Product.deleteOne({ _id: req.params.id })
            .then(() => {
              res.status(200).json({
                statusCode: 200,
                status: true,
                message: 'Product deleted'
              })
            })
            .catch(() => {
              res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Failed to delete product'
              })
            })
        }
        else {
          return res.status(404).json({
            statusCode: 404,
            status: false,
            message: 'This product does not exist'
          })
        }
      }
    })
  }