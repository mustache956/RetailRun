//Schema of a product
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    store_shelf: {
      type: String,
      trim: true,
      required: true
    },
    price: {
        type: String,
        trim: true,
        required: true
    },
    promo: {
        type:String
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
    },
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Product", ProductSchema);