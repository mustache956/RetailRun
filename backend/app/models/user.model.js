//Schema of a user
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    nom: {
        type: String,
        trim: true,
        required: true
    },

    prenom: {
        type: String,
        trim: true,
        required: true
    },

    mail: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },

    password: { 
        type: String,
        required: true
    }
});

module.exports = mongoose.model("User", UserSchema);