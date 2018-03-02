'use strict';

var Categorie = require('../models/Categorie.js');

module.exports = (req, res, next) => {

	Categorie.find({}, (err, categories) => {
		if(err)
			throw err;

		res.locals.categories = categories;
		
		next();
	});
}