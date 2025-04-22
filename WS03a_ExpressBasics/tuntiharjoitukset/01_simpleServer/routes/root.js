var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello World!');
});

router.get('/add', function(req, res, next) {
  res.send('Hello Add!');
});

router.get('/list', function(req, res, next) {
  res.send('Hello List!');
});

router.get('*', function(req, res, next) {
  res.send('tsot stot');
});


module.exports = router;