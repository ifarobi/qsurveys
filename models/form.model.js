'user strict';
var mongoose = require('mongoose');
var surveySchema = mongoose.Schema({
	'nim' : String,
	'date' : {type:Date, default: Date.now},
	'surv-1' : Number,
	'surv-2' : Number,
	'surv-3' : Number,
	'surv-4' : Number,
	'surv-5' : Number,
	'surv-6' : Number,
	'surv-7' : Number,
	'surv-8' : Number,
	'surv-9' : Number,
	'surv-10' : Number,
	'tbk-modul' : String,
	'alasan-tbk-modul' : String,
	'tsl-modul' : String,
	'alasan-tsl-modul' : String,
	'saran' : String
});

module.exports = mongoose.model('Survey', surveySchema);