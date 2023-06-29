//Schema of a user
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const keyAuth = "ANFJFNJKKOJDJJNJNDSDLOKKIJI";
const keyReset = "JDKJFJNNEPZMPOINCNSNHKSUEe";

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


UserSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password,this.password);
};


UserSchema.methods.generateAuthToken = function(){
    const user = this;
    return jwt.sign({user}, keyAuth);
};

UserSchema.methods.generateResetToken = function(){
    const userEmail = this.mail;
    return jwt.sign({userEmail}, keyReset)
}

module.exports = mongoose.model("User", UserSchema);