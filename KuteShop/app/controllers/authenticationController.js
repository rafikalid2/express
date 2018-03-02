'use strict';

const 	cote = require('cote');

// create auntentication requester
var requester = new cote.Requester({
	name: 'Authentication requester',
	namespace: 'services/auth'
});


// export all authentication methods
module.exports = {

	/**
	 * This method handle the get query to the login url
	 * and render the login view
	 */
	loginIndex: (req, res) => {
		res.render('login');
	},

	/*
	 * This method for the login functionality
	 * send the request to the authentication service
	 */
	login: (req, res) => {
		requester
			.send({type: 'login', query: req.body})
			.then((user) => {
				// save user to session
				req.session.user = user;
				res.redirect('/');
			}).catch(err => {
				res.render('login', {error: err});
			});
	},

	/*
	 * This method serve to log out the user
	 * delete user session
	 */
	logout: (req, res) => {
		delete req.session.user;
		res.redirect('/');
	},

	/**
	 * This method handle the get query to the signup url
	 * and render the sign up view
	 */
	signupIndex: (req, res) => {
		res.render('signup');
	},

	/*
	 * This method serve to catch the post request from the singn up
	 * and make a request to the authentication service to validate
	 * and save the user to the database
	 */
	addUser: (req, res) => {
		requester
			.send({type: 'addUser', query: req.body})
			.then(() => {
				// send flash message to view
				req.flash('success', 'sign_up_successfully');
				res.redirect('/');
			}).catch(err => {
				res.render('signup', {error:err});
			});
	}
}