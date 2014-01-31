var express = require('express');
var app = module.exports =  express();


app.get('/login', function(req, res){
	res.send("Loginete");
	console.log('se ejecutó el action login');
});
