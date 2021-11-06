var express = require("express");
//var bodyParser = require("body-parser");
var app = express();
var port = 3000;
var hostname = "localhost";
//var logger = require("../middleware/mid");
//Implement the User model inside the index.js file.
//const be = require("../services/be");
//var request = require("request");

var urlencodedParser = express.urlencoded({ extended: true });
app.use(urlencodedParser); //Attach body-parser middleware (openning letter)
app.use(express.json()); //Parse json data (output)

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post('/Hello', (req, res, next) => {
    console.log('received after posting');
    res.send({message:"hello"});
})
