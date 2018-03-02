'use strict';

module.exports = {
	/*
	 * This method serve to create the user objet in req and res object
	 */
	init: (req, res, next) => {

		var user = req.session.user;
		
		if(user){
			req.user = user;

			// add connection to respond
			res.locals.user = {
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				grade: user.grade,
				store: user.store || null
			}
		}

		next();
	},

	/*
	 * This method check if the user is connect or redirect to un error page
	 */
	isConnected: (req, res, next) => {
		if(!req.user)
			res.render('error', {errorCode: 404, errorMessage: 'pageNotFound'});
		else
			// next if it is connected
			next();
	}
}