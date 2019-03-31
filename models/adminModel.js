var mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var AdminSchema = new mongoose.Schema({
	first_name:{
		type:String,
		required:true,
		trim:true,
		minLength:1
	},
	last_name:{
		type:String,
		required:true,
		trim:true,
		minLength:1,
		default:'---'
	},
	email:{
		type:String,
		required: true,
		minLength:1,
		unique:true,
		trim: true
	},
	phone:{
		type:Number,
		required:true,
		trim:true,
		minLength:1,
		maxLength:10
	},
	type:{
		type:String,
		required: true,
		minLength:1,
		trim: true,
		default: 'CRCAdmin'
	},
	password:{
		type:String,
		required: true,
		minLength:6,
		trim: true
	},
	gender:{
		type:String,
		required: true,
		minLength:1,
		trim: true
	}
	
});

AdminSchema.statics.checkValidPasswords =  function(password, hashPassword) {

	return new Promise((resolve, reject) => {
		bcrypt.compare(password,hashPassword, (err, res) => {
			if(res){
				resolve();
			}
			else
			{
				reject();
			}
		});
	});
};


AdminSchema.pre('save', function (next){
	var admin = this;
	if(admin.isModified('password')){
		bcrypt.genSalt(5, (err, salt) => {
			bcrypt.hash(admin.password,salt, (err,hash) => {
				admin.password = hash;
				next();
		});
	});
	}
	else{
		next();
	}
});

var Admin = mongoose.model('Admin', AdminSchema);

module.exports = {Admin};