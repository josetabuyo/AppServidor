var express = require('express');
var app = module.exports =  express();


app.get('/login', function(req, res){
	res.sendfile("login/cliForm.html");
	console.log('se ejecutó el action');
});
