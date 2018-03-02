'use strict';

const 	router 		= require('express').Router(),
		getCategories =	require('../app/middlewares/getCategoriesMiddleware.js');

module.exports = router;


router.get('/dashboard', (req, res) => {
	res.render('../account/pages/dashboard');
});
router.get('/products', (req, res) => {
	res.render('../account/pages/products');
});

router.route('/addproduct')
	.get(getCategories, require('../app/controllers/productController.js').index)
	.post(require('../app/controllers/productController.js').addProduct);


router.get('/orders', (req, res) => {
	res.render('../account/pages/orders');
});
router.get('/users', (req, res) => {
	res.render('../account/pages/users');
});
router.get('/settings', (req, res) => {
	res.render('../account/pages/settings');
});
router.get('/help', (req, res) => {
	res.render('../account/pages/help');
});
router.get('/profile', (req, res) => {
	res.render('../account/pages/profile');
});
router.get('/inbox', (req, res) => {
	res.render('../account/pages/inbox');
});
