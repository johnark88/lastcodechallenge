var express = require('express');
var router = express.Router();

var hero = require('../../models/heroModel');

router.get('/hero', function(req,res){
console.log('in get all route');
hero.find({}, function(err, heroResults){
if (err) {
  console.log(err);
}else {
  console.log('Connected to the heroDB!!!');
console.log(heroResults,'HEROS!!');
res.send(heroResults);
}//end else
});//end db query
});//end router.get all


var hero = require('../../models/heroModel');
router.post('/', function(req,res){
console.log('in router.post New Hero!');
console.log(req.body);
var newHero = hero(req.body);
newHero.save(function(err,results){
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
