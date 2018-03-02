'use strict';

const 	router 		= require('express').Router(),
		hasNoStore 	= require('../app/middlewares/storeMiddleware.js').hasNoStore;

module.exports = router;


// account routes for simple user
router.get('/dashboard', (req, res) => {
	res.render('../simple-user/dashboard');
});
router.get('/orders', (req, res) => {
	res.render('../simple-user/orders');
});
router.route('/create-store')
		.get(hasNoStore, require('../app/controllers/createStoreController.js').index)
		.post(hasNoStore, require('../app/controllers/createStoreController.js').createStore);