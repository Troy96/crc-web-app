/**
 * Created by Tuhin Roy on 9th March, 2019
 */

const {Student} = require('./../models/studentModel');
const {Job} = require('./../models/jobModel');

/**
 * Profile Get Request Handler
 * @param {*} req 
 * @param {*} res 
 */

let getProfile = (req,res) => {					
	if(typeof req.session.email === 'undefined'){	
		res.redirect('/login');
	}
	else{
		if(global.utype === 'Admin'){
			res.redirect('/dashboard');
		}
		else{
			let email = req.session.email;
			return Student.find({email:email}).then((student) => {
				return Job.find().then((jobs) => {
			        res.render('profile',{
			            pageTitle:'Student Profile',	
			            layout:'layout.hbs',
		            	Uname: email,
			            student,
                        jobs
                    })
			    });
		    }, () => {
			    console.log('Error',e);
		    });
		}
	
	}
};

module.exports = {getProfile};