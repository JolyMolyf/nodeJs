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
var user = new User("Paul");

console.log(user.myfield);

app.get('/home', function(req,  res){
	res.render('home');
});



app.get('/profile/:name', function(req, res){
	res.render('profile', {name: req.params.name});
});

var myReader = fs.createReadStream(__dirname +  "/readMe.txt", 'utf8');

myReader.on('data' , function (chunk) {
	console.log(chunk + " \n my chunk is here");
});

app.listen({
	host: 'localhost',
	port: Port,
	exclusive: true
});