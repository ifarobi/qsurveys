var express = require('express');
var router = express.Router();
var formController = require('../controllers/form.controller.js');

router.post("/submit", function(req, res){
	formController.inputSurvey(req,res);
	res.redirect("/users/nim/"+req.body.nim);
});
module.exports = router;