const expressValidator = require('express-validator'); 
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const hbs = require('express-handlebars');
const fileUpload = require('express-fileupload');
const express = require('express');
const logger = require('morgan');
module.exports = app => {
    let singleton = require('./../singleton');
    singleton.expressApp = app;
    app.use(express.static(path.join(__dirname,'../public')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(expressValidator());
    app.use(cookieParser());
    app.use(session({
	    secret:'A Secret',
	    resave: true,
        saveUninitialized: true
	}));
    app.engine( 'hbs', hbs( { 
        extname: 'hbs', 
        defaultLayout: 'layout', 
        helpers: require('./handlebars-helpers'), 
        partialsDir: path.join(__dirname,'../views/partials1/')
    }));

    app.set( 'view engine', 'hbs' );
    app.use(fileUpload());
    app.use(logger('dev'));
    app.use((req, res, next) => {				//Middleware to pass the session object to the front-end
        app.locals.session = req.session;
        next();
    });

    app.use(function(req, res, next) {
	    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
	    next();
    });

    require('./../routes/routes')(app);
    return app;
}
