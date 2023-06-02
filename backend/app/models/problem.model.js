//Schema of a reported problem
const mongoose = require("mongoose")


const ProblemSchema = mongoose.Schema({

    nature: {
        type: String,
        trim: true,
        required: true
    },
    date: {
      type: Date,
      default: Date.now()
    },
    description: {
        type: String,
        required: true
    },
    rayon: {
        type: String
    },
    status: {
        type: Boolean,
        default: false
    }

});


module.exports = mongoose.model("Problem", ProblemSchema);