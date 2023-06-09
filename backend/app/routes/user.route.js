//Routes of existing users
module.exports = function(app){
    const user = require('../controllers/user.controller');

    // post request for retrieving all the existing users
    app.get('/api/user/getAllUsers', user.getAllUsers);
    // post request for user registration
    app.post('/api/user/register', user.register);
    // post request for user log in
    app.post('/api/user/login/:email/:password', user.signIn);

}