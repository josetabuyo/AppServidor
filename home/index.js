var express = require('express');
var app = module.exports =  express();

app.get('/', function(req, res){
	res.sendfile("home/cliForm.html");
	console.log('alguien anda en el home');
});
