var express = require("express");
//var bodyParser = require("body-parser");
var app = express();
var port = 3000;
var hostname = "https://immense-ocean-01570.herokuapp.com";
//var logger = require("../middleware/mid");
//Implement the User model inside the index.js file.
//const be = require("../services/be");
//var request = require("request");
let int = 0;

var urlencodedParser = express.urlencoded({ extended: true });
app.use(urlencodedParser); //Attach body-parser middleware (openning letter)
app.use(express.json()); //Parse json data (output)

let add = (callback) => {
  try {
    int++
  } catch (err) {
    return callback(err, null);
  } return callback(null, int)
}

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post('/Hello/', (req, res, next) => {
  console.log('received after posting');
  add((err, res) => {
    if (err) {
      res.status(500).send({message:'error in adding'})
    } else {
      res.status(200).send({message: 'counter has been added'})
    }
  })

})


app.use((req, res, next) => {
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    return res.json({ error: 'Not found' });
  }

  // respond with json
  if (req.accepts('json')) {
    return res.json({ error: 'Not found' });
  }

  // default to plain-text. send()
  return res.type('txt').send('Not found');

}

);


module.exports = app;