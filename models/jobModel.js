var mongoose = require('mongoose');
var JobSchema = new mongoose.Schema({
	comp_name:{
		type:String,
		required:true,
		trim:true,
		minLength:1
	},
	placement_type:{
		type:String,
		required:true,
		trim:true,
		minLength:1
	},
	location:{
		type:String,
		required: true,
		minLength:1,
		trim: true
	},
	venue:{
		type: String,
		required: true,
		minLength: 1,
		trim: true
	},
	date:{
		type:String,
		default: Date.now,
		required: true,
	},
	time:{
		type: String,
		required: true,
		minLength: 1,
		trim: true
	},
	eligibility:{
		type: String,
		required: true,
		minLength: 1,
		trim: true
	},
	comp_key:{
		type:String,
		required:true,
		trim:true,
		minLength:1
	}
});



var Job = mongoose.model('Job', JobSchema);

module.exports = {Job};