'use strict';
var User = require('../models/user.model.js');
exports.getNilai = function(req,res){
	res.render('nilai',{nilai : req.nilai});
}
exports.nilaiByNim = function(req,res,next,id){
	User.findOne({'nim' : id}, function(err, nilai){
		if(err) return console.log(err);
		console.log(nilai);
		req.nilai = nilai;
		next();
	});
}