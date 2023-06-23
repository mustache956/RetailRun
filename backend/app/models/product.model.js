//Schema of a product
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        trim: true
    },
    coordinates: {
        type: Array,
        trim: true,
        required: true
    },
    quantity: {
        type: String,
        trim: true,
        required: true
    }
});

module.exports = mongoose.model("Product", ProductSchema);