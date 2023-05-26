'use strict'
// require express and bodyParser
const  express = require("express");
const  bodyParser = require("body-parser");
const cors = require('cors')
// Import DB Connection
const db = require("./mongodb");
// Import API route
// Import API route
const routeProblem = require("../backend/app/routes/problem.route"); //importing route

// create express app
const  app = express();

// use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:8081/',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// Add endpoint
app.get("/", (req, res) => {
  res.json({ message: "Server lives!!!" });
});


app.listen(5000)

// connect routes
routeProblem(app);
