var express = require('express');
var router = express.Router();


const categories = require("../data/categories");

//const db = require('../utils/databace');
const Category_62 = require('../models/categoryModel_62');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown2_62', { 
    title: '陳巧諭 408410362 (static)',
    data:categories
});
});

router.get('/homepage', crown2Controller_62.getHomepage);


module.exports = router;
