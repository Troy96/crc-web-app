/**
 * Created by Tuhin Roy on 10th March,2019
 */
const {Student}  = require('./../models/studentModel');
const {Admin} = require('./../models/adminModel');
let singleton = require('./../singleton');

/**
 * getLogin
 * @param req
 * @param res
 */
let getLogin =  (req, res) => {
	if(!!req.session.email){
		(singleton.expressApp.locals.type === 'Student') 
			?
				res.redirect('/profile') 
			:
				res.redirect('/dashboard')
	}
	else{
		res.render('login',{
			pageTitle:'Login'
		});
	}
};

/**
 * postLogin
 * @param req 
 * @param res 
 */
let postLogin = (req,res) => {		
		let email = req.body.email;
		let pass = req.body.pass;
		return Student.find({email}).then(student => {
			return Student.checkValidPasswords(pass, student[0].password).then(() => {
				let Type = student[0].type;
				req.session.email = email;
				req.session.pass = pass;
				singleton.expressApp.locals.session = req.session;
				singleton.expressApp.locals.type  = 'Student';
				res.redirect('/profile');
			}).catch(e => {
				res.render('login', {error: 'Wrong Student Credentials!! Try login again'});
			});
			
		})
		.catch(() => {
			return Admin.find({email}).then(admin=> {
				return Admin.checkValidPasswords(pass, admin[0].password).then(() => {
					let Type = admin[0].type;
					req.session.email = email;
					req.session.pass = pass;
					singleton.expressApp.locals.session = req.session;																																																					
					singleton.expressApp.locals.type = Type;																																																																																																																																																																																																			
					res.redirect('/dashboard');
				}).catch((e) => {
					console.log(e);
					res.render('login', {error: 'Wrong Admin Credentials!! Try login again'}); 
			});																																																																																																																																					
		})
		.catch(e => res.render('login', {error: 'Something went wrong!! Try login again'}))

						
	});
	}
	
/**
 * logout
 * @param {*} req 
 * @param {*} res 
 */	
let logout = (req,res) => {
		req.session.destroy()
		res.redirect('/')
}
	
module.exports = {
	getLogin,
	postLogin,
	logout
}


