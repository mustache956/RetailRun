//Controller for reported problem
const User = require("../models/user.model"); //Importation of the User Schema
const bcrypt = require('bcryptjs');
//Retrieving all the existing users
exports.getAllUsers = (req, res) => {
    User.find()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

//User Register
exports.register = (req, res) => {
    User.findOne({mail: req.body.mail}).then(user => {
        if (user == null) {
            req.body.password = bcrypt.hashSync(req.body.password,10);
             User.create(req.body)
                .then(data => {
                    res.send(data)
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.message
                    })
                });
        } else {
            res.status(500).send();
        }
    })
};

//user logIn
exports.logIn = (req, res) => {
    User.findOne({mail: req.body.mail}).then(user => {
        if (user == null){
            res.status(401).json({ message: 'Authentication failed. email does not exist' });
        }
        else if (!user.comparePassword(req.body.password)) {
            res.status(403).json({ message: 'Authentication failed. Wrong password.' });
        }
        else
        {
            const token = user.generateAuthToken();
            res.send({user, token});
        }

    });
};