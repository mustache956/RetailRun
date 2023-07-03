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
    console.log(req.body);
    let product = new Product(req.body);
    console.log(product);
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

exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.body._id, req.body)
        .then(() => {
            res.send({message: "Product updated successfully !"});
        })
        .catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
}

//Delete a product
exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
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