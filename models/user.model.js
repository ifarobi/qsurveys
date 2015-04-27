'user strict';
var mongoose = require('mongoose');

var nilaiSchema = mongoose.Schema({
  'nim' : Number,
  'name' : String,
  'class' : String,
  'assitant' : String,
  'm1' : Number,
  'm2': Number,
  'm3' : Number,
  'm4' : Number,
  'm5' : Number,
  'm6' : Number,
  'na' : Number
});
var Nilai;
try{
	Nilai = mongoose.model('Nilai', nilaiSchema);
}catch(e){
	Nilai = mongoose.model('Nilai');
}
module.exports = Nilai;
// nilai Model
// var userSchema = mongoose.Schema({
// 	'nim' : Number,
// 	'practicumSuggestion' : String,
// 	'asistantSuggestion' : String,
// 	'messages': [{'assistant': String, 'body': String}],
// 	'date' : {type:Date, default: Date.now}
// });
// module.exports = mongoose.model('User', userSchema);