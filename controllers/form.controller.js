'use strict';
var Survey = require('../models/form.model.js');
exports.inputSurvey = function(req,res){
	if(req.body['nim'] == ""){
		res.redirect("/?msg=nim tidak boleh kosong");
	}
	var data = new Survey({
		'nim' : req.body['nim'],
		'date' : {type:Date, default: Date.now},
		'surv-1' : req.body['surv-1'],
		'surv-2' : req.body['surv-2'],
		'surv-3' : req.body['surv-3'],
		'surv-4' : req.body['surv-4'],
		'surv-5' : req.body['surv-5'],
		'surv-6' : req.body['surv-6'],
		'surv-7' : req.body['surv-7'],
		'surv-8' : req.body['surv-8'],
		'surv-9' : req.body['surv-9'],
		'surv-10' : req.body['surv-10'],
		'tbk-modul' : req.body['tbk-modul'],
		'alasan-tbk-modul' : req.body['alasan-tbk-modul'],
		'tsl-modul' : req.body['tsl-modul'],
		'alasan-tsl-modul' : req.body['alasan-tsl-modul'],
		'saran' : req.body['saran']
	});
	data.save(function (err){
		if(err) console.error(err);
		console.log("input success");
	})
}
exports.getByNim = function(id, callback){
	Survey.findOne({nim: id}, function(err, data){
		if(err) return console.error(err);
		if(data != null){
			callback(data);
		}else{
			callback(null);
		}
	});
}