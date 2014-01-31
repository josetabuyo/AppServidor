var express = require('express');
var app = module.exports =  express();

app.get('/', function(req, res){
	res.send("homeeeee swwreeett home");
	console.log('alguien anda en el home');
});
