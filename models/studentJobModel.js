const mongoose = require('mongoose');

const studentEmailSchema = new mongoose.Schema({
    email:{type: String},
    status:{type:String,required: true, default:'NOT APPLIED', enum: ['APPLIED', 'NOT APPLIED','REJECTED','UNDER REVIEW','SHORTLISTED','SELECTED']}
});

const studentJobSchema = new mongoose.Schema({
    students: [studentEmailSchema],
    jobID:{type:mongoose.Schema.ObjectId,required:true, default: null},
    company: {type: String, default: null, required: true}
});

const studentJob = mongoose.model('studentJob', studentJobSchema);
module.exports = {studentJob};