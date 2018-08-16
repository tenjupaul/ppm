var mongoose = require('mongoose')

var ProductSchema = new mongoose.Schema({
    title: {type:String, required:[true, "Product title cannot be empty"],minlength: 4},
    price: {type:Number, required:[true, "Price cannot be empty"]},
    image: {type:String},
},{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }})

mongoose.model('Product', ProductSchema)