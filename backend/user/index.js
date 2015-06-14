var express = require('express')
var mongoose = require('mongoose')
var bodyparser = require('body-parser')
mongoose.connect('mongodb://localhost/taskManager')
var UserModel = require('./userModel')
var app = express()

//app.use(bodyparser.json())

app.get('/', function(req, res){
	UserModel.find(function(err, users){
		res.send(users)		
	})
}) 

app.get('/:id', function(req,res){
	console.log('req params id: ',req.params.id)
	UserModel.find({_id:req.params.id},function(err, user){
		res.send(user)		
	})
})

app.post('/',bodyparser.json(), function(req,res){
	var newUser = new UserModel(req.body)
	newUser.save(function(err, newUser){
		console.log('db: ', newUser)
		res.send(newUser)
	})
})

var server = app.listen(5002, function(){
})

module.exports = server