var router = require('express').Router();

router.route('/')
	.get((req, res) => {
		res.render('home');
	});

module.exports = router;