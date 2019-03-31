var mongoose = require('mongoose');
var NoticeSchema = new mongoose.Schema({
	sender:{
		type:String,
		required:true,
		trim:true,
		minLength:1
	},
	title:{
		type:String,
		required: true,
		minLength:1,
		trim: true
	},
	description:{
		type: String,
		required: true,
		minLength: 1,
		trim: true
	},
	date_of_creation:{
		type:Date,
		default: Date.now,
		required: true,
	}
});



var Notice = mongoose.model('Notice', NoticeSchema);

module.exports = {Notice};