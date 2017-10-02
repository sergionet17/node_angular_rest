angular.module('testService', [])//Declaramos el modulo
	.factory('testRequest', function($http) { //declaramos la factory
		var path = "http://localhost:8080/campanas";//API path
		return {
			//Login
			posts : function(){ //Retornara la lista de posts
				global = $http.get(path);
				return global;
			},
			post : function(id){ //retornara el post por el id
				global = $http.get(path+'/'+id);
				return global;	
			}
		}
	});