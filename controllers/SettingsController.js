const {Student} = require('./../models/studentModel');


let getChangePassword = (req,res) => {
    res.render('changePassword');
}

let postChangePassword = (req,res) => {
    let current_pass = req.body.old_pass;
    let new_pass = req.body.conf_pass;
    let conf_pass = req.body.new_pass;

    if(new_pass !== conf_pass){
        console.log('New password and confirm passswords do not match!');
     res.sendStatus(500).json({error:'New password and confirm passswords do not match!'});
    }

};

module.exports = {
    getChangePassword,
    postChangePassword
};