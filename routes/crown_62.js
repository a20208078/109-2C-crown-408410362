var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_62', { title: '陳巧諭 408410362' });
});

module.exports = router;
