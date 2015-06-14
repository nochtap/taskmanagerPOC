var mongoose = require('mongoose')
var Schema = mongoose.Schema
var taskSchema = Schema({
	name:String,
	desc:String
})


module.exports = mongoose.model('tasks', taskSchema)