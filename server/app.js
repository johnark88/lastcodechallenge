var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var urlencodedParser = bodyParser.urlencoded( { extended: true } );

var portDecision = process.env.PORT || 4242;

app.use(bodyParser.json());

app.listen(portDecision, function(){
  console.log('Listening on: ', portDecision);
});
