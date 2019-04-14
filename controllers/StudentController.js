const { Student } = require('../models/studentModel');
const ObjectID = require('mongodb').ObjectID;


class StudentController {
    constructor() {
    }

    /**
     * Get Student
     * @param {*} req 
     * @param {*} res 
     */
    async getStudent(req, res) {
        try {
            const studentDetail = await Student.findById({ _id: req.params.id });
            if (!studentDetail) return res.status(401);
            res.render('studentDetails', {
                student: [studentDetail]
            });
        } catch (e) {
            return res.sendStatus(500);
        }
    }

    /**
     * Find Student By ID And Delete
     * @param {*} req 
     * @param {*} res 
     */
    async findStudentByIdAndDelete(req, res) {
        const studentId = req.params.id;
        try {
            await Student.findByIdAndDelete({ _id: ObjectID(studentId) });
            return res.sendStatus(200);
        }
        catch (e) {
            return res.sendStatus(500);
        }
    };
}

exports.StudentController = StudentController;