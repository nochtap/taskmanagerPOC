var express = require('express')
var mongoose = require('mongoose')
var bodyparser = require('body-parser')
mongoose.connect('mongodb://localhost/taskManager')
var ProjectModel = require('./projectModel')
var app = express()

//app.use(bodyparser.json())

app.get('/', function(req, res){
	ProjectModel.find(function(err, projects){
		res.send(projects)		
	})
}) 

app.get('/:id', function(req,res){
	console.log('req params id: ',req.params.id)
	ProjectModel.find({_id:req.params.id},function(err, project){
		res.send(project)		
	})
})

app.post('/',bodyparser.json(), function(req,res){
	var project = new ProjectModel(req.body)
	project.save(function(err, project){
		console.log('db: ', project)
		res.send(project)
	})
})

var server = app.listen(5003, function(){
})

module.exports = server