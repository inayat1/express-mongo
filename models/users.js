/*var express = require('express');
var app = express();
var bodyParser= require('body-parser');*/
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	}
})

var users = module.exports=mongoose.model('users',userSchema);

module.exports.getUsers= function(callback){
	users.find(callback);
}

module.exports.addUsers= function(user,callback){
	users.create(user,callback);
}

module.exports.updateUsers= function(id,user,options,callback){
	var query={_id:id};
	var update = {
		name:user.name,
		password:user.password
	}
	users.findOneAndUpdate(query,update,options,callback);
}

module.exports.deleteUsers= function(id,callback){
	var query={_id:id};
	users.remove(query,callback);
}

