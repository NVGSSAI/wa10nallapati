var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var randomNumber = Math.random()*100;
    let input = req.query.x;
    var number;
    if(input == undefined){
        number= randomNumber;
    }else{
        number = input;
    }
  res.render('computation',{
      title :`Math.cbrt() applied to ${number} is ${Math.cbrt(number)}` });
});

module.exports = router;
