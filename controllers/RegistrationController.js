/**
 * Created by Tuhin Roy on 9th March, 2019
 */

const { Student } = require('./../models/studentModel');
const { Admin } = require('./../models/adminModel');
const path = require('path');
const { sendMail } = require('./../alerts/email_client');


/**
 * Student Registration Page Get Request Handler
 * @param {*} req 
 * @param {*} res 
 */
let getStudent = async (req, res) => {
	let adminEmail = await Admin.findOne({ email: req.session.email });
	if (!!adminEmail) res.render('registration', { pageTitle: 'Student Registration' });
	else res.render('profile', { pageTitle: 'Student Profile' });
}


/**
 * New Student Registration Request Handler
 * @param {*} req 
 * @param {*} res 
 */
let registerStudent = (req, res) => {
	let first_name = req.body.firstname;
	let last_name = req.body.lastname;
	let email = req.body.email;
	let dob = req.body.dob;
	let password = req.body.password;
	let gender = req.body.gender;
	let phone = req.body.mobile_no;
	let tenthMarks = Number(req.body.highschool_marks);
	let twelvthMarks = Number(req.body.Intermediate_marks);
	let btechMarks = Number(req.body.btech_marks);
	let course = req.body.branch;
	let startyear = req.body.startyear;
	let endyear = req.body.endyear;
	let collegeID = req.body.College_id;
	let training_company = req.body.training_company;
	let training_location = req.body.training_location;
	let training_duration = req.body.training_duration;
	let native_place = req.body.native_place;
	req.email = email;
	req.first_name = first_name;

	let resume = req.files.resume;

	resume.mv(path.join(__dirname, `../docs/cv_${collegeID}.doc`), function (err) {
		if (err)
			return res.status(500).send(err);

		console.log('File uploaded!');
	});

	dob = dob.split('/');
	dob = dob[1] + '/' + dob[0] + '/' + dob[2];

	if (tenthMarks < 10) {
		tenthMarks = tenthMarks * 9.5;
	}
	let newStudent = new Student({
		first_name,
		last_name,
		email,
		dob,
		password,
		gender,
		phone,
		tenthMarks,
		btechMarks,
		twelvthMarks,
		course,
		collegeID,
		startyear,
		endyear,
		training_company,
		training_duration,
		training_location,
		native_place,
		type: 'Student'
	});

	return newStudent.save()
		.then(async student => {
			/* await sendMail(process.env.MAILER_USERNAME, email, 'INFO from the CRC Department, Invertis University',
				`<p>Hey ${first_name}!</p>
					<p>Your details were updated from our end. Have a good day ahead :) </p>
					<p><b>CRC Admin</b></p>`
			); */
			res.redirect('/dashboard');
		})
		.catch(e => {
			return console.log('Error in saving!!' + e);
		});
}

module.exports = { getStudent, registerStudent };