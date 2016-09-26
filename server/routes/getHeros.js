var express = require('express');
var router = express.Router();

var hero = require('../../models/heroModel');

router.get('/', function(req,res){
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


module.exports = router;
