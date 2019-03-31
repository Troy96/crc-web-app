const {Notice} = require('./../models/noticeModel');
const {Student} = require('./../models/studentModel');
const {sendMail} = require('./../alerts/email_client');

let getAll = (req,res) => {
	if(!!req.session.email){	
        return Notice.find()
            .then(notices=> {
			    res.render('notices',{
				    pageTitle:'Noties',
				    title:'Notices',
				    notices
			    });
            })
            .catch(e=> {
                throw new Error(e);
            });
    } 
    else { 
        res.redirect('/login');    
    }
};

let getNotice = (req,res) => {
	if(!!req.session.email){	
        res.render('add_notice', {pageTitle:'Add Notice'});
    }
	else{
        res.redirect('/login');
	}
}

let postNotice = (req,res) => {
	let title = req.body.title;
	let description = req.body.desc;
	req.title = title;
	req.description = description;

	let notice = new Notice({
		sender:'CRC',
		title,
		description
	});

    return notice.save()
        .then(notice =>{
			console.log(notice);
			return Student.find({},{email:true})
				.then(async students=> {
					let mailResult = await sendMail(process.env.MAILER_USERNAME, students, title, description);
					console.log(mailResult);
					res.redirect('dashboard');
				})
				.catch(e=> console.log(e))
		    
	    }).catch(e => {
		    console.log(e);
        });
};


module.exports = {getAll, getNotice, postNotice};