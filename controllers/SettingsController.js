const { Student } = require('./../models/studentModel');

let getChangePassword = (req, res) => {
    res.render('changePassword');
}

let postChangePassword = async (req, res) => {
    let current_pass = req.body.old_pass;
    let new_pass = req.body.conf_pass;
    let conf_pass = req.body.new_pass;
    const student = await Student.findOne({ email: req.session.email });
    student.comparePassword(current_pass, async function (err, isMatch) {
        if (err) return res.status(500).send({ error: err.msg });
        if(!isMatch) return res.status(401).send({error : 'You entered an incorrect password'});
        if (new_pass !== conf_pass) return res.status(500).send({ error: 'New password and confirm passswords do not match!' });
        student.password = new_pass;
        await student.save();
        return res.status(200).end();
    });
};

module.exports = {
    getChangePassword,
    postChangePassword
};