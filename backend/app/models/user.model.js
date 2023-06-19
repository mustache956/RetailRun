//Schema of a user
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const key = "ANFJFNJKKOJDJJNJNDSDLOKKIJI"

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
    return jwt.sign({user}, key);
};


module.exports = mongoose.model("User", UserSchema);