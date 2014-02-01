var express = require('express');
var app = express();

var login = require('./login');
app.use(login);



//allowCrossDomain
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.get('/', function(req, res){
	res.send("default");
	console.log('se ejecutó el action default');
});

var puerto = process.env.PORT || 3000;
app.listen(puerto);

console.log('escuchando en localhost:3000');