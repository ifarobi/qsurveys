var express = require('express');
var mongoose = require('mongoose');
var excelParser = require('excel');
var path = require('path');


module.exports = function excelToMongo(){
	// parsing excel file
	excelParser(path.join(__dirname,'public','[QSurvey]Nilai_Akhir.xlsx'), function(err, data){
	  if(err) throw console.error(err);
		// nilai Model
		var Nilai = mongoose.model('Nilai');
		for(i = 1; i < data.length; i++){
		// console.log(typeof data[i][4]);
			var n = new Nilai({
				'nim' : data[i][0],
			  'name' : data[i][1],
			  'class' : data[i][2],
			  'assitant' : data[i][3],
			  'm1' : data[i][4],
			  'm2':  data[i][5],
			  'm3' : data[i][6],
			  'm4' : data[i][7],
			  'm5' : data[i][8],
			  'm6' : data[i][9],
			  'na' : data[i][10]
			});
			n.save(function(err){
				if(err) throw console.error(err);
			});
		}
	});

}