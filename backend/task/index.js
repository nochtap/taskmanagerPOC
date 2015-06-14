var express = require('express')
var mongoose = require('mongoose')
var bodyparser = require('body-parser')
mongoose.connect('mongodb://localhost/taskManager')
var TaskModel = require('./taskModel')
var app = express()

//app.use(bodyparser.json())

app.get('/', function(req, res){
	TaskModel.find(function(err, tasks){
		res.send(tasks)		
	})
}) 

app.get('/:id', function(req,res){
	console.log('req params id: ',req.params.id)
	TaskModel.find({_id:req.params.id},function(err, tasks){
		res.send(tasks)		
	})
})

app.post('/',bodyparser.json(), function(req,res){
	var newTask = new TaskModel(req.body)
	newTask.save(function(err, newTask){
		console.log('db: ', newTask)
		res.send(newTask)
	})
})

var server = app.listen(5001, function(){
})

module.exports = server