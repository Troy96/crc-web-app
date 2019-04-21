const { Student } = require('./../models/studentModel');
const { Admin } = require('./../models/adminModel');


class SettingsController {
    constructor() {
    }

    /**
     * Get Change Password
     * @param {*} req 
     * @param {*} res 
     */
    async getChangePassword(req, res) {
        res.render('changePassword', {
            pageTitle: 'Change Password'
        });
    };

    async putChangePassword(req, res) {
        const current_pass = req.body.old_pass;
        const new_pass = req.body.new_pass;
        const conf_pass = req.body.conf_pass;
        if (!current_pass) return res.status(403).send({ error: 'Old password not found!' });
        if (!new_pass) return res.status(403).send({ error: 'New password not found!' });
        if (!conf_pass) return res.status(403).send({ error: 'Confirm password not found!' });
        try {
            const student = await Student.findOne({ email: req.session.email });
            student.comparePassword(current_pass, async function (err, isMatch) {
                if (err) return res.status(500).send({ error: err.msg });
                if (!isMatch) return res.status(401).send({ error: 'You entered an incorrect password' });
                if (new_pass !== conf_pass) return res.status(500).send({ error: 'New password and confirm passswords do not match!' });
                student.password = new_pass;
                await student.save();
                return res.status(200).end();
            });
        }
        catch (e) {
            const admin = await Admin.findOne({ email: req.session.email });
            admin.comparePassword(current_pass, async function (err, isMatch) {
                if (err) return res.status(500).send({ error: err.msg });
                if (!isMatch) return res.status(401).send({ error: 'You entered an incorrect password' });
                if (new_pass !== conf_pass) return res.status(500).send({ error: 'New password and confirm passswords do not match!' });
                admin.password = new_pass;
                await admin.save();
                return res.status(200).end();
            });
        }
    };
}

exports.SettingsController = SettingsController;