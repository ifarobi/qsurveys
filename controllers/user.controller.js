'use strict';
var User = require('../models/user.model.js');
var formController = require('../controllers/form.controller.js');
exports.getNilai = function(req,res){
	console.log(req.nilai);
	res.render('nilai',{nilai : req.nilai});
}
exports.nilaiByNim = function(req,res,next,id){
	formController.getByNim(id, function(data){
		if(data == null){
			req.nilai = null;
			next();
		}else{
			User.findOne({'nim' : id}, function(err, nilai){
				if(err) return console.log(err);
				req.nilai = nilai;
				next();
			});
		}
	});
}