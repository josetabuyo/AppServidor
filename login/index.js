var express = require('express');
var app = module.exports =  express();


var mongodb = require('mongodb');
var uri = 'mongodb://josetabuyo:IvanTabuyo1020@ds030607.mongolab.com:30607/appdatabase';


mongodb.MongoClient.connect(uri, function (err, db) {
	console.log('conectamos');
});



app.get('/login', function(req, res){
	res.send("Loginete logueao");
	console.log('se ejecutó el action login');
});
