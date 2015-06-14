var mongoose = require('mongoose')
var Schema = mongoose.Schema
var taskSchema = Schema({
	name:String,
	login:String,
	post:String
})


module.exports = mongoose.model('users', taskSchema)