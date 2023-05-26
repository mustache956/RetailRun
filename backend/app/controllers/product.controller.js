//Controller for reported problem
const Product = require("../models/product.model"); //Importation of the Product Schema

//Get all products
exports.getAllProducts = (req, res) => {
    Product.find()
        .then(products => {
            if (!products) {
                res.status(500).json({message: "No existing product"});
            }
            res.send(products);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
};

//Create a product
exports.createProduct = (req, res) => {
    let product = new Product(req.body);
    product.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

//Delete a product
exports.deleteProduct = (req, res) => {
    Product.findByIdAndRemove(req.params.id)
        .then(product => {
            if(!product){
                return res.status(404).send({message: "Product not found with id " + req.params.id});
            }
            res.send({message: "Product successfully deleted!"});
  
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
  };