/**
 * Check Session Middleware
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
let checkSession = (req,res,next) => {
    if(!!req.session.email){
        next();
    }
    else{
        res.redirect('/login');   
    }
};

module.exports = {checkSession}