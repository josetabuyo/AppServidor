var express = require('express');
var app = express();

var login = require('./login');
app.use(login);

var home = require('./home');
app.use(home);



var puerto = process.env.PORT || 3000;
app.listen(puerto);

console.log('escuchando en localhost:3000');