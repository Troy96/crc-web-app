/**
 * Created by Tuhin Roy on 9th March, 2019
 */

 const singleton = require('./../singleton');
/**
 * Home GET Request Handler
 * @param {*} req 
 * @param {*} res 
 */
let getHome = (req,res) => {

	if(!!req.session.email){
        (singleton.expressApp.locals.type === 'Student') 
            ?
                res.redirect('/profile') 
            :
                res.redirect('/dashboard');
    }
    else{
	    res.render('index',{
		    pageTitle:'Welcome to CRC, Invertis University'
	    });
    }
}
module.exports = {getHome}; 