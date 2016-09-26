var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var urlencodedParser = bodyParser.urlencoded( { extended: true } );
var portDecision = process.env.PORT || 4242;

//data base connection
var mongoURI = "mongodb://localhost:27017/superheroDB";
mongoose.connect(mongoURI);

//index route
var index = require('./routes/index');
app.use('/', index);

//get heros router
var heros = require('./routes/getHeros');
app.use('/getheros', heros);

//add new hero router
var newHero = require('./routes/newHero');
app.use('/newHero', newHero);

//json body parser
app.use(bodyParser.json());

//app.listen for port #
app.listen(portDecision, function(){
  console.log('Listening on: ', portDecision);
});

//use static file
app.use(express.static('public'));
