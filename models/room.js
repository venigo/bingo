
var mongoose = require('mongoose');

var roomSchema = new mongoose.Schema({
		name: {type: String, unique:true},
		type: String,
		description: String
	});

var Room = mongoose.model('room', roomSchema);
module.exports = Room;