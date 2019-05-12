/**
 * Created by Tuhin Roy on 10th March,2019
 */

const nodeMailer = require('nodemailer');
const {transportConfig} = require('./config');


/**
 * Email Sending Client
 * @param {String} from 
 * @param {String} to 
 * @param {String} subject 
 * @param {String} text 
 */
let sendMail = (from , to , subject, text) => {
    return new Promise((resolve, reject)=> {
        const transporter = nodeMailer.createTransport(transportConfig);

        const mailOptions = {
            from: from,
            to: to ,
            cc: process.env.MAILER_USERNAME,
            subject: subject,
            html: text
        };

        transporter.sendMail(mailOptions, (err, response)=> {
            if(err) return reject(err);
                resolve('Email sent: '+ JSON.stringify(response));
        });
    })
};

module.exports = {sendMail};

