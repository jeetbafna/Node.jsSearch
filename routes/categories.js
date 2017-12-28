var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('categories');
});

router.get('/add', function(req, res, next) {
  res.render('add-categories');
});

module.exports = router;
