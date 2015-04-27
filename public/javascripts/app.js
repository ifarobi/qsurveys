'use strict';
var app = angular.module('excelNilai',[]);
app.controller('inputSurvey', function($scope){
	$scope.dataMessages = {
		fields : []
	}
	$scope.assistant = ['IFR','FAE'.'ADT'];
	$scope.addFormMessage = function(){
		$scope.dataMessages.fields.push({
			
		});
	}
});