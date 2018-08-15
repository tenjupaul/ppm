var mongoose = require('mongoose')
Product = mongoose.model('Product')

module.exports={
    create:function(req,res){
        Product.create(req.body,function(err,product){
            if(err){
                console.log(err);
                res.json({message: "Error", status:500, error: err})
            }
            else{
                res.json({message: "Success", status:200, product:product})
            }
        })
    },
    all:function(req,res){
        Product.find({},function(err,products){
            if(err){
                console.log(err);
                res.json({message: "Error", status:500, error: err})
            }
            else{
                res.json({message: "Success", status:200, products:products})
            }
        })
    },
    delete:function(req,res){
        Product.remove({_id:req.params.id},function(err){
            if(err){
                console.log(err);
                res.json({message: "Error", status:500, error: err})
            }
            else{
                res.json({message: "Success", status:200})
            }
        })
    },
    edit:function(req,res){
        Product.update({_id:req.params.id},req.body,function(err,product){
            if(err){
                console.log(err)
                res.json({message: "Error", status:500, error: err})
            }
            else{
                res.json({message: "Success", status:200, product:product})
            }
        })
    },
    getProduct:function(req,res){
        Product.findById({_id:req.params.id},function(err,product){
            if(err){
                console.log(err)
                res.json({message: "Error", status:500, error: err})
            }
            else{
                res.json({message: "Success", status:200, product:product})
            }
        })
    }
}