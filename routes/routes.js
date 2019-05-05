/**
 * Updated by Tuhin Roy on 9th March, 2019
 */


const authController = require('./../controllers/AuthController');
const homeController = require('./../controllers/HomeController');
const dashboardController = require('./../controllers/DashboardController');
const jobController = require('./../controllers/JobController');
const profileController = require('./../controllers/ProfileController');
const noticeController = require('./../controllers/NoticeController');
const registrationController = require('./../controllers/RegistrationController');
const {SettingsController} = require('./../controllers/SettingsController');
const {StudentController} = require('../controllers/StudentController');
const fileController = require('./../controllers/FIleController');
const {AdminController} = require('./../controllers/AdminController');

const { checkSession } = require('./../middlewares/session');
const analysisController = require('./../controllers/AnalysisController');

const studentController = new StudentController();
const settingsController = new SettingsController();
const adminController = new AdminController();

module.exports = app => {
    /**
     * Root Route
     */

    //GET: / 
    app.get('/', homeController.getHome);

    /**
     * Authentication Routes
     */

    //GET: /login
    app.get('/login', authController.getLogin);

    //POST: /login
    app.post('/login', authController.postLogin);

    //GET: /logout
    app.get('/logout', authController.logout);

    /**
     * Admin Dashboard Routes
     */

    //GET: /dashboard
    app.get('/dashboard', dashboardController.getDashBoard);

    //POST: /dashboard
    app.post('/dashboard', dashboardController.postDashboard, dashboardController.storeFilteredStudents);

    //POST: /admin/create
    app.post('/admin/create',  adminController.createAdmin);

    //GET: /admin/create
    app.get('/admin/create', checkSession, adminController.getAdminPage);

    //GET: /admins/
    app.get('/admins', checkSession, adminController.getAllAdmins);

    app.delete('/admin/:id', checkSession, adminController.deleteAdminById);

    /**
     * Student Routes
     */

    //GET: /student
    app.get('/student', registrationController.getStudent);

    //GET: /student/:id
    app.get('/student/:id', checkSession,  studentController.getStudent);

    //DELETE:  /student/:id
    app.delete('/student/:id', checkSession, studentController.findStudentByIdAndDelete);


    //POST: /registration
    app.post('/student/registration', checkSession , registrationController.registerStudent);

    

    /**
     * Change Password Routes
     */
    //GET: /EditPwd
    app.get('/EditPwd', checkSession, settingsController.getChangePassword);
    
    //PUT :/EditPwd
    app.put('/EditPwd', checkSession, settingsController.putChangePassword)


    /**
     * Job Routes
     */

    //GET :/job
    app.get('/job', checkSession, jobController.getNewJob);

    //GET: /job/:id
    app.get('/job/:id', checkSession, jobController.getJobById);

    //GET: /jobs
    app.get('/jobs', checkSession, jobController.getAll);

    //GET: /job/:id/applicants
    app.get('/job/:id/applicants', checkSession, jobController.getAllJobApplicants);

    //POST: /job
    app.post('/job', checkSession, jobController.postNewJob);

    //PUT: /job/:id/apply
    app.post('/job/:id/apply', checkSession, jobController.applyToJob);

    //PUT: /job/:id/changeStatus
    app.put('/job/:id/changeStatus', checkSession, jobController.changeJobStatus);

    //DELETE:  /job/:id
    app.delete('/job/:id', checkSession, jobController.findJobByIdAndDelete);

    /**
     * Student Profile Routes
     */

    //GET: /profile
    app.get('/profile', profileController.getProfile);

    /**
     * Notice Routes
     */
    //GET :/notices
    app.get('/notices', noticeController.getAll);

    //GET: /addNotice
    app.get('/addNotice', noticeController.getNotice);

    //POST: /postNotice
    app.post('/postNotice', noticeController.postNotice);


    /**
     * File Handling Routes
     */
    //GET: /exportFile

    app.get('/exportFile', fileController.getExportFile);

    //POST: /exportFile
    app.post('/exportFile', fileController.postExportFile);

    //GET: /downloadCV/:id
    app.get('/downloadCV/:id', fileController.downloadCV);

    //GET: /downloadJD/:id
    app.get('/downloadJD/:id', fileController.downloadJD);

    //POST: /updateDP
    app.post('updateDP', fileController.updateDP);

    /**
     * Analysis Routes
     */

    //GET: /students/analysis
    app.get('/students/analysis/', checkSession , analysisController.renderChart);

    //GET: /analysis/students/highSchool
    app.get('/analysis/students/highSchool', checkSession ,analysisController.getTenthAcademicIntervalRecords);

    //GET: /analysis/students/intermediate
    app.get('/analysis/students/intermediate', checkSession ,analysisController.getTwelvthAcademicIntervalRecords);

    //GET: /analysis/students/btech
    app.get('/analysis/students/btech', checkSession , analysisController.getBtechAcademicIntervalRecords);


}




