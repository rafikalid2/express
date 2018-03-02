'use strict';

const 	cote = require('cote');

// create auntentication requester
var requester = new cote.Requester({
	name: 'Product requester',
	namespace: 'services/store'
});


module.exports = {
	index: (req, res) => {
		res.render('../account/pages/add-product');
	},

	addProduct: (req, res) => {
		requester.send({type: 'addProduct', userId: req.user._id, storeId: req.user.store, query: req.body})
			.then(product => {
				var img = req.files.image;

				img.mv(__dirname + '../../../public/images/products/big/'+ product._id +'.jpg', err => {
					req.flash('success', 'added_successfully');
					res.redirect('back');
				});
			}).catch(err => {
				console.error('Error ==>>>', err);
				req.flash('error', 'error_occurred');
				res.redirect('back');
			});
	}
}