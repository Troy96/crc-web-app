/**
 * Created by Tuhin Roy on 9th March, 2019
 */

const {Student} = require('./../models/studentModel');
const {Job} = require('./../models/jobModel');

/**
 * Dashboard Get Request Handler
 * @param {*} req
 * @param {*} res
 */
let getDashBoard = (req,res) => {
	if(!req.session.email){	
		res.redirect('/login');
	}
	else{
		if(global.utype === 'Student'){
			res.redirect('/profile');
		}
		else{
            return Student.find()
                .then(students => {
                 return Job.find()
                    .then((jobs) => {
					    res.render('dashboard',{
						    pageTitle:'Admin Dashboard',
						    students,
						    jobs
                        })	
                    });
                })
                .catch(e => {
			        console.log('Error', e);
		        });
	    }
    }
}

/**
 * Dashboard Post Request Handler
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

let postDashboard = (req,res,next) => {
	let criteriaVal = req.body.optionV;
	let start = req.body.start;
	let end = req.body.end;
    let branch = req.body.branch;
    return Student.find({ $and: [ { tenthMarks: { $gte: criteriaVal}}, { twelvthMarks: { $gte: criteriaVal}}, { btechMarks: { $gte: criteriaVal}}, { startyear: { $eq: start}}, { endyear: { $eq: end}}, { course: { $eq: branch}} ]})
        .then((students) => {
			req.students = students;
			next();
		})
		.catch((e) => {
			console.log('Error',e);
		});
}

/**
 * Middleware to send filtered students to Front End
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

let storeFilteredStudents = (req,res,next) => {
	f_students = req.students;
    res.send(f_students);
}


module.exports = {
    getDashBoard,
    postDashboard,
    storeFilteredStudents
}