const { Student } = require('./../models/studentModel');

class StudentController {
    constructor() {
    }

    async getStudent(req, res) {
        console.log(req.params.id);
        try{
            const studentDetail = await Student.findById({_id: req.params.id});
            if(!studentDetail) return res.status(401);
            res.render('studentDetails',{
                student: [studentDetail]
            });
        } catch(e){
            res.status(500).send({error:'Some server error'});;
        }
    }
}

exports.StudentController = StudentController;