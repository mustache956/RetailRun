//Controller for reported problem
const User = require("../models/user.model"); //Importation of the User Schema

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
    let newUser = new User(req.body);

    newUser.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

//user Sign-in
exports.signIn = (req, res) => {
    User.findOne({email: req.param.email}).then(user => { 
        if (user == null){
            res.status(401).json({ message: 'Authentication failed. email does not exist' });
        }
        else if (!user.password === req.param.password) {
            res.status(403).json({ message: 'Authentication failed. Wrong password.' });
        }
        else
        {
            res.send(user)
        }

    });
};