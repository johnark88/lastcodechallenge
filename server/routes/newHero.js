var express = require('express');
var router = express.Router();

var hero = require('../../models/heroModel');

router.post('/', function(req,res){
console.log('in router.post New Hero!');
console.log(req.body);
var hero = req.body;

var newHero = new hero({
    alias: hero.alias,
    first_name: hero.first_name,
    last_name: hero.last_name,
    city: hero.city,
    power_name: hero.power_name
  });

newHero.save(function(err){
  if (err) {
    console.log(err);
    res.sendStatus(500);
  }else {
    console.log('connected to DB ');
    res.sendStatus(201);
  }
});
});

module.exports = router;
