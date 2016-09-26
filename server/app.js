var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var urlencodedParser = bodyParser.urlencoded( { extended: true } );
var portDecision = process.env.PORT || 4242;
//json body parser
app.use(bodyParser.json());
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

var hero = require('../models/heroModel');
app.post('/newHero', function(req,res){
console.log('in router.post New Hero!');
//req.body keeps coming back undefined!  ! ! ! !  ! ! ! ! ! !! ! ! ! ! !
var heroModel = hero(req.body);
console.log(heroModel,'asdasdasdasdasdasdasdasdasdasdasd');

heroModel.save(function(err){
  if (err) {
    console.log(err);
    res.sendStatus(500);
  }else {
    console.log('connected to DB ');
    res.sendStatus(201);
  }
});
});



//app.listen for port #
app.listen(portDecision, function(){
  console.log('Listening on: ', portDecision);
});

//use static file
app.use(express.static('public'));
