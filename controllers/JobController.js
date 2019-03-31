/**
 * Updated by Tuhin Roy on 21st March, 2019
 */

const path = require('path');
const ObjectID = require('mongodb').ObjectID;
const { Job } = require('./../models/jobModel');
const { studentJob } = require('./../models/studentJobModel');
const { sendMail } = require('./../alerts/email_client');

/**
 * New Job GET Request Handler
 * @param {*} req 
 * @param {*} res 
 */

let getNewJob = (req, res) => {
	res.render('job', { pageTitle: 'Post Job' });
}

/**
 * Get Job By Id
 * @param {*} req 
 * @param {*} res 
 */
let getJobById = async (req, res) => {
	const jobId = req.params.id;
	const jobList = [];
	let studentJobStatus = 'NOT APPLIED';
	try {
		const job = await Job.findById({ _id: jobId });
		if (!job) return res.sendStatus(404);
		const jobStudents = await studentJob.findOne({ jobID: jobId });
		if (!jobStudents) {
			jobList.push(job);
			return res.render('jobDetails', { jobList, studentJobStatus });
		}
		else {
			const studentJobObj = jobStudents.students.filter(student => student.email == req.session.email);
			if (studentJobObj.length == 0) {
				jobList.push(job);
				return res.render('jobDetails', { jobList, studentJobStatus });
			}
			else {
				studentJobStatus = studentJobObj[0].status;
				jobList.push(job); //HBS can't iterate over object!
				res.render('jobDetails', { jobList, studentJobStatus });
			}
		}
	}
	catch (e) {
		throw new Error(e);
	}

};

/**
 * Apply to Job
 * @param {*} req 
 * @param {*} res 
 */
let applyToJob = async (req, res) => {
	let jobId = req.params.id;
	let email = req.body.email;
	let company = req.body.company;
	let data = await studentJob.findOne({ jobID: jobId });
	if (!data) {
		let stuJobObj = new studentJob({
			jobID: jobId,
			company: company,
			students: [{
				email: email,
				status: 'APPLIED'
			}],
		});
		stuJobObj.save()
			.then(data => console.log(data))
			.catch(console.log);

	}
	else {
		let filter = data.students.filter(student => student.email == email);
		if (filter.length == 0) {
			let stuJobObj = new studentJob();
			data.students.push({ email: email, status: 'APPLIED' });
			stuJobObj = data;
			await stuJobObj.save();
		}
	}
	res.end();
};

/**
 * New Job POST Request Handler
 * @param {*} req 
 * @param {*} res 
 */
let postNewJob = async (req, res) => {
	let comp_name = req.body.comp_name;
	let placement_type = req.body.placement_type;
	let location = req.body.location;
	let venue = req.body.venue;
	let date = req.body.date;
	let time = req.body.time;
	let eligibility = req.body.eligibility;
	let jd = req.files.jd;

	let comp_key = comp_name.split(' ');
	comp_key = comp_key[0];

	jd.mv(path.join(__dirname, `../docs/jd/jd_${comp_key}.doc`), err => {
		if (err) return res.status(500).send(err);
	});
	const job = new Job({
		comp_name, placement_type, location, venue, date,
		time, eligibility, comp_key
	});
	try {
		await job.save();
		res.redirect('/dashboard');
	}
	catch (e) {
		console.log(e);
		throw new Error(e);
	}
}

/**
 * Get All Jobs Request Handler
 * @param {*} req
 * @param {*} res
 */
let getAll = async (req, res) => {
	let jobs = await Job.find({});
	res.render('viewJobs', { pageTitle: 'Get Jobs', jobs });
}

/**
 * Find Job By ID And Delete
 * @param {*} req 
 * @param {*} res 
 */
let findJobByIdAndDelete = async (req, res) => {
	const jobId = req.params.id;
	try {
		const deletedJob = await Job.findByIdAndDelete({ _id: ObjectID(jobId) });
		return res.sendStatus(200);
	}
	catch (e) {
		return res.sendStatus(500);
	}
};

/**
 * Get All Job Applicants
 * @param {*} req 
 * @param {*} res 
 */
let getAllJobApplicants = async (req, res) => {
	const jobID = req.params.id;
	try {
		let jobResult = await studentJob.findOne({ jobID: jobID });
		let applicants = [];
		if (jobResult) {
			applicants = jobResult.students;
		}
		res.render('viewApplicants', { applicants: applicants });

	} catch (e) {
		console.log(e);
		return res.sendStatus(500);
	}
};

/**
 * Change Job Status
 * @param {*} req 
 * @param {*} res 
 */
let changeJobStatus = async (req, res) => {
	const email = req.body.email;
	const status = req.body.status;
	const jobID = req.params.id;

	let jobResult = await studentJob.findOne({ jobID: jobID });
	if (!jobResult) return console.log('Job was not found!');
	for (let i in jobResult.students) {
		let student = jobResult.students[i];
		if (student.email === email) {
			student.status = status;
		}
	}
	let newJob = new studentJob();
	newJob = jobResult;
	await newJob.save();
	const mailPromiseResponse = await sendMail(process.env.MAILER_USERNAME, email, 'Your job status was changed',
		`<p>Hey!</p>
		 <p>Your job status was changed to <b>${status}</b> for the Job ID <b>${jobID}</b></p>
		 <p>Thanks and Regards,</p>
		 <p><b>CRC Admin</b></p>`
	);
	console.log(mailPromiseResponse);
	res.end();
}

module.exports = {
	getNewJob,
	postNewJob,
	getAll,
	findJobByIdAndDelete,
	getJobById,
	applyToJob,
	getAllJobApplicants,
	changeJobStatus
}
