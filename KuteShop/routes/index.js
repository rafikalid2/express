'use strict';

const 	router 		= require('express').Router(),
		isConnected	= require('../app/middlewares/authenticationMiddleware.js').isConnected;

module.exports = router;


router.get('/', (req, res) => {
	res.render('home');
});
router.get('/product-details', (req, res) => {
	res.render('product-details')
});
router.get('/cart', (req, res) => {
	res.render('cart')
});
router.get('/checkout', (req, res) => {
	res.render('checkout')
});

// sign up routes
router.route('/signup')
		.get(require('../app/controllers/authenticationController.js').signupIndex)

		// this route handle add user request (post request)
		.post(require('../app/controllers/authenticationController.js').addUser);

// login routes
router.route('/login')
		.get(require('../app/controllers/authenticationController.js').loginIndex)
		.post(require('../app/controllers/authenticationController.js').login);

router.get('/logout', require('../app/controllers/authenticationController.js').logout);



router.get('/shop', require('../app/controllers/shopController.js'));


router.get('/error', (req, res) => {
	res.render('error')
});


// language change route
router.get('/lang/:lg', (req, res) => {
	res.cookie('lang', req.params.lg);
	res.redirect('back');
});