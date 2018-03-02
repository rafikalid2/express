'use strict';

const cote = require('cote');

// create requester
var requester = new cote.Requester({
	name: 'Store requester',
	namespace: 'services/store'
});

module.exports = {
	index: (req, res) => {
		res.render('../simple-user/create-store');
	},

	/**
	 * This function create a new store
	 */
	createStore: (req, res) => {
		var query = {
			userId: req.user._id,
			store: req.body
		};

		requester.send({type: 'createStore', query})
			.then((storeId) => {
				// save store to user session
				req.session.user.store = storeId;
				res.redirect('/account/store/dashboard');
			}).catch(err => {
				console.error('error =>>', err);
			}); 
	}
}