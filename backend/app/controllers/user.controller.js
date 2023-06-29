//Controller for reported problem
const User = require("../models/user.model"); //Importation of the User Schema
const ResetPasswordToken = require("../models/resetPasswordToken.model");//Importation of the resetPassword Schema
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
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
            res.status(402).json({ message: 'Authentication failed. Wrong password.' });
        }
        else
        {
            //Génération du token
            const token = user.generateAuthToken();
            res.send({user, token});
        }

    });
};

exports.forgetPassword = (req,res) => {
    User.findOne({mail: req.body.mail}).then(user => {
        if(user == null){
            res.status(401).json({message : 'Email not found in the database.'})
        }
        else {
            //Génération du token
            const resetToken = user.generateResetToken();

            // Enregistrement du token de réinitialisation dans la base de données
            const resetData = {
                mail : req.body.mail,
                token: resetToken
            };
            ResetPasswordToken.create(resetData)
                .then(data => {
                    console.log(data);
                res.send(data);
     /*           // Envoie de l'e-mail de réinitialisation
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'benjib221001@gmail.com',
                        pass: 'Hellskitchen1'
                    }
                });

                const mailOptions = {
                    from: 'benjib221001@gmail.com',
                    to: mail,
                    subject: 'Réinitialisation de mot de passe',
                    text: `Cliquez sur le lien suivant pour réinitialiser votre mot de passe : http://localhost:8080/reset-password/${resetToken}`
                };

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.error(error);
                        res.status(500).send('Erreur lors de l\'envoi de l\'e-mail de réinitialisation.');
                    } else {
                        console.log('E-mail de réinitialisation envoyé : ' + info.response);
                        res.send('Lien de réinitialisation envoyé à votre adresse e-mail.');
                    }
                })*/
            }).catch(err => {
                    res.status(500).send({
                        message: err.message
                    })
                });
        }
    })

}