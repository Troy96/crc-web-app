const { Admin } = require('./../models/adminModel');
const ObjectID = require('mongodb').ObjectID;
class AdminController {

    constructor() {
    }

    /**
     * Get all admins
     * @param {*} req 
     * @param {*} res 
     */
    async getAllAdmins(req, res) {
        try {
            const allAdmins = await Admin.find({ type: 'Admin' });
            res.render('getAllAdmins', {
                admins: allAdmins,
                pageTitle: 'All Admins'
            });
        } catch (e) {
            res.sendStatus(500);

        }

    }

    /**
     * Get Admin By Id
     * @param {*} req 
     * @param {*} res 
     */
    async deleteAdminById(req, res) {
        const id = req.params.id;
        try {
            await Admin.findByIdAndDelete({ _id: ObjectID(id) });
        } catch (e) {
            res.sendStatus(500);
        }
    }

    /**
     * Get Admin Page
     * @param {*} req 
     * @param {*} res 
     */
    async getAdminPage(req, res) {
        res.render('createAdmin', {
            pageTitle: 'Create Admin'
        });
    }

    /**
     * Create Admin
     * @param {*} req 
     * @param {*} res 
     */
    async createAdmin(req, res) {
        const first_name = req.body.first_name;
        const last_name = req.body.last_name;
        const email = req.body.email;
        const phone = req.body.phone;
        const password = req.body.password;
        const type = req.body.type || 'Admin';
        const dbObj = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone: phone,
            type: type,
            password: password
        }
        const newAdmin = new Admin(dbObj);
        try {
            await newAdmin.save();
            res.render('createAdmin', {
                pageTitle: 'Create Admin'
            });
        } catch (e) {
            console.log(e);
            res.status(500);
        }
    };
}

exports.AdminController = AdminController;




