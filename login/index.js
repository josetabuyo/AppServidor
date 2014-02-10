var express = require('express');
var app = module.exports =  express();


var mongodb = require('mongodb');
var uri = 'mongodb://josetabuyo:IvanTabuyo1020@ds030607.mongolab.com:30607/appdatabase';


var myCollection;
mongodb.MongoClient.connect(uri, function (err, db) {
	
	myCollection = db.collection('test_collection');
	console.log('conectamos');
});

app.use(express.bodyParser());



app.post('/usuarioadd', function(req, res){
	
	myCollection.insert({
		usuario: req.param('Usuario'),
		password: req.param('Password')
	}, function(err, result) {
		if(err)
			throw err;
		
		console.log("entry saved");
	});
	
});

app.post('/usuariologin', function(req, res){
	
	var cursor = myCollection.find({
		usuario: req.param('Usuario'),
		password: req.param('Password')
	});
	
	
	
	
	cursor.each(function(err, doc) {
		if(err)
			throw err;
			
		if(doc==null)
			return;
		
		console.log(doc.usuario);
		console.log(doc.password);
	});
	
	
	
	
	var salida = ''
	+'tejuro que te validé '
	+'el ' + req.param('Usuario')
	+' y el ' + req.param('Password');
	
	
	res.send( salida );
	
	console.log('se ejecutó el action login');
	console.log('que vieneen el req', req);
});
