//Controller for reported problem
const Problem = require("../models/problem.model"); //Importation of the Problem Schema

//Create a problem in mongoDB
exports.createProblem = (req, res) => {
    let problem = new Problem(req.body);
    problem.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

//Get all reported problems in mongoDB
exports.getAllProblems = (req, res) => {
    Problem.find()
        .then(problems => {
            if (!problems) {
                res.status(500).json({message: "No reported problems found"});
            }
            res.send(problems);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
};

//Delete a specific reported problem in mongoDB
exports.deleteProblem = (req, res) => {
    Problem.findById(req.params.id)
        .then(problem => {
            if (!problem) {
                return res.status(404).send({message: "Reported problem not found with id : " + req.params.id})
            }
            if (!problem.status) {
                return res.send({message: "The reported problem with id : " + req.params.id + " has not been solved yet"})
            }
            Problem.deleteOne({_id: req.params.id})
                .then(deleteProblem => {
                    res.send({message: deleteProblem.deletedCount + "Reported problem deleted successfully!"});
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.message
                    })
                })

        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            })
        })

    /*  DEUXIEME VERSION PLUS SIMPLE, A REVOIR EN FONCTION DE L'IMPLEMENTATION DU FRONT-END
        Problem.findByIdAndDelete(req.params.id)
            .then(problem => {
                if(!problem){
                    return res.status(404).send({message: "Problem not found with id specified " + req.params.id})
                }
                res.send({message: "Problem deleted successfully!"});
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message
                });
            });
       */
}


