'use strict';

module.exports = {

	hasStore: (req, res, next) => {
		if(!req.user.store)
			res.redirect('/');
		else
			// next if it is connected
			next();
	},
	hasNoStore: (req, res, next) => {

		console.log(req.user.store);

		if(req.user.store)
			res.redirect('/');
		else
			// next if it is connected
			next();
	}
}