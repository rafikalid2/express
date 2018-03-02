'use strict';

const 	cote 		= require('cote'),
		mongoose 	= require('mongoose'),
		User 		= require('../app/models/User.js'),
		bcrypt 		= require('bcrypt');

var responder = new cote.Responder({
	name: 'Authentication service responder',
	namespace: 'services/auth'
});

// connect to the database
mongoose.connect(process.env.DB_HOST + process.env.DB_NAME);


/*
 * This responder serve to create a new user
 */
responder.on('addUser', req => {

	return new Promise((resolve, reject) => {
		// get user info from the query
		var info = req.query;

		// validate inforamtion
		if(info.password != info.cPassword)
			throw 'passwordNotMatches';
		if(!info.cRules)
			throw 'rulesNotAccepted';
		if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(info.email))
			throw 'invalidEmail';

		// create the user
		var user = new User(info);

		// save the user and resolve
		resolve(user.save());
	});
});

/*
 * This responder take care of login 
 * and return the user object if it is logged in
 */
responder.on('login', req => {
	return new Promise((resolve, reject) => {

		// search for the user
		return User.findOne({email: req.query.email}, (err, user) => {
			if(!user)
				reject('emailOrPasswordInvalid');
			else
				bcrypt.compare(req.query.password, user.password).then(valid => {
				    if(!valid)
				    	reject('emailOrPasswordInvalid');
				    else
				    	resolve(user);
				});
		});
	});
});
