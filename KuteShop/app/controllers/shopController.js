'use strict';

const Product = require('../models/Product.js');

module.exports = (req, res) => {

	// find query
	var findQuery = {};

	if(req.query.cat)
		findQuery = {category: req.query.cat};

	Product.find(findQuery, (err, products) => {
		if(err)
			throw err;
		console.log(products);
		res.render('shop', {products});
	});
}