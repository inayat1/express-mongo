var express = require('express');
var app = express();
var bodyParser= require('body-parser');
var mongoose = require('mongoose');
var users = require('./models/users');
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/users');
var db = mongoose.connection;

app.get('/', function(req,res){
	res.send('hello world');
});

app.get('/api/users',function(req,res) {
	users.getUsers(function(err, users) {
		if(err) {
			throw err;
		}
		res.json(users);
	})
})

app.post('/api/users',function(req,res) {
	var user = req.body;

	users.addUsers(user,function(err, users) {
		if(err) {
			throw err;
		}
		res.json(users);
	})
})

app.put('/api/users/:id',function(req,res) {
	var id=req.params.id;
	var user = req.body;

	users.updateUsers(id,user,{},function(err, users) {
		if(err) {
			throw err;
		}
		res.json(users);
	})
})

app.delete('/api/users/:id',function(req,res) {
	var id=req.params.id;
	users.deleteUsers(id,function(err, users) {
		if(err) {
			throw err;
		}
		res.json(users);
	})
})

app.listen(5000);
console.log('server started');

