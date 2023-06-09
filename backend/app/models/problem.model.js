//Schema of a reported problem
const mongoose = require("mongoose")


const ProblemSchema = mongoose.Schema({

    type: {
        type: String,
        trim: true,
        required: true
    },
    date: {
      type: Date,
      default: Date.now()
    },
    store_shelf: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    }

});


module.exports = mongoose.model("Problem", ProblemSchema);