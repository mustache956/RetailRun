const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");


const passwordResetTokensSchema = mongoose.Schema({
    mail: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
    token: {
        type: String,
        required:true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});



module.exports = mongoose.model("passwordResetTokens", passwordResetTokensSchema);