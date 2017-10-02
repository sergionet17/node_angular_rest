angular.module('testService', [])//Declaramos el modulo
	.factory('testRequest', function($http) { //declaramos la factory
<<<<<<< HEAD
		var path = "http://localhost:8080/campanas";//API path
=======
		var path = "http://localhost:8080/campana";//API path
>>>>>>> 2b5d22f5ae47ffce9f9a3b3f661207a4bc4126eb
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