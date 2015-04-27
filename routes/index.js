var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var message = "";
	if(req.query.msg){
		message = req.query.msg;
	}
  res.render('index', { title: 'Feedback Form Alpro 2015', msg : message });
});

module.exports = router;
