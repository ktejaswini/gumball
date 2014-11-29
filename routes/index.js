var express = require('express');
var http = require('http');
var router = express.Router();

// Homepage
router.get('/', function(req, res) {
	var optionsget = {
    	host : 'http://life.cfapps.io',
    	port : 8080,
    	path : '/api/gumball/',
    	method : 'GET' 
	};
	var output = http.request(optionsget, function(response) {
		response.on('data', function (chunck) {
			console.log(chunck);
			res.render('index', { title:chunck });
		});
	});
	output.end();
});

//Turn the crank
router.get('/turn', function(req, res) {
	var optionsget = {
	    	host : 'http://life.cfapps.io',
    	port : 8080,
    	path : '/api/gumball/turn',
    	method : 'PUT' 
	};
	var output = http.request(optionsget, function(response) {
		response.on('data', function (chunck) {
			console.log(chunck);
			res.render('index', { title: chunck });
		});
	});
	output.end();
});

//Insert a quarter
router.get('/insrt', function(req, res) {
	var optionsget = {
	    	host : 'http://life.cfapps.io',
    	port : 8080,
    	path : '/api/gumball/insrt',
    	method : 'PUT' 
	};
	var output = http.request(optionsget, function(response) {
		response.on('data', function (chunck) {
			console.log(chunck);
			res.render('index', { title: chunck });
		});
	});
	output.end();
});

module.exports = router;
