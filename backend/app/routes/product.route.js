//Routes of existing products
module.exports = function(app){
    const product = require('../controllers/product.controller');

    // post request for retrieving all the existing product
    app.get('/api/product/getAllProducts', product.getAllProducts);
    // post request for product creation
    app.post('/api/product/create', product.createProduct);
    // delete product
    app.delete('/api/product/delete/:id', product.deleteProduct);
    // update product
    app.put('/api/product/update/', product.updateProduct);
}