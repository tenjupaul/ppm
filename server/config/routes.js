var mongoose = require('mongoose')

var Product = require('../controllers/products.js')

module.exports=function(app){
    app.post('/product',Product.create)
    app.get('/product',Product.all)
    app.get('/product/:id',Product.getProduct)
    app.delete('/product/:id', Product.delete)
    app.put('/product/:id', Product.edit)
}