var Port =process.env.PORT || 5000;
var express = require('express');
const User = require('./User.js');
var fs= require('fs');
var app = express();
var bodyParser = require('body-parser');
var jsonP = bodyParser.json();
var urlEncodedParser = bodyParser.urlencoded({extended: false});


app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));


app.get('/', function(req,  res){
	res.render('home');
});



app.get('/profile/:name', function(req, res){
	res.render('profile', {name: req.params.name});
});


app.listen(Port, function(){
	console.log("works");
});