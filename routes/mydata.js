var express = require('express');
var router = express.Router();

/* Working on heroku */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Venkata Gopi Siva Sai Nallapati' });
});

module.exports = router;
