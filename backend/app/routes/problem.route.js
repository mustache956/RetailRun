//Routes of reported problems
module.exports = function(app){
    const problem = require("../controllers/problem.controller");

    // Insert a reported problem in MongoDB
    app.post('/api/problem/createProblem', problem.createProblem);
    // Get all reported problems from MongoDB
    app.get('/api/problem/getAllProblems', problem.getAllProblems);
    // Delete a specific reported problem in MongoDB
    app.delete('/api/problem/deleteProblem/:id', problem.deleteProblem);


}