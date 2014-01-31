var express = require('express');
var app = module.exports =  express();


app.get('/login', function(req, res){
	res.send("Holaaaaaa");
	console.log('se ejecutó el action');
});
