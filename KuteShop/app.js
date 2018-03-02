'use strict';

const 	express 		= require('express'),
		app 			= express(),
		http 			= require('http').Server(app),
		io 				= require('socket.io')(http),
		i18n 			= require('i18n'),
		cookie_parser	= require('cookie-parser'),
		body_parser 	= require('body-parser'),
		session 		= require('express-session'),
		currency 		= require('./modules/currency.js'),
		mongoose 		= require('mongoose'),
		flash_messages	= require('express-flash'),
		fileupload		= require('express-fileupload'),

		// Middlewares
		authentication	= require('./app/middlewares/authenticationMiddleware.js'),
		isConnected		= authentication.isConnected,
		hasStore 		= require('./app/middlewares/storeMiddleware.js').hasStore,
		getCategories	= require('./app/middlewares/getCategoriesMiddleware.js');


// set ejs use express-ejs-extend
app.engine('ejs', require('express-ejs-extend'));

// set the default view engine to ejs
app.set('view engine', 'ejs');

// set views directory as views/pages
app.set('views', './views/pages');

// set static directory to public
app.use(express.static('./public'));

// init
app.use(cookie_parser());
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false
}));

// configure and set currency handler
currency.configure({
	currencyList: {
		usd: '$',
		eur: '€',
		pound: '£'
	}
});
app.use(currency.init);

// configure and set i18n
i18n.configure({
	cookie: 'lang',
	defaultLocale: 'en',
	directory: __dirname + '/locales',
	updateFiles: false
});
app.use(i18n.init);

// set flash messages
app.use(flash_messages());

// use authentication Middleware
app.use(authentication.init);

// use file upload
app.use(fileupload());

// get index routes
app.use(getCategories, require('./routes/index.js'));

// routes for account
app.use('/account/user', isConnected, getCategories, require('./routes/account.js'));

// routes for store account
app.use('/account/store', isConnected, hasStore, require('./routes/storeRoutes.js'));

// connect to the database
mongoose.connect(process.env.DB_HOST + process.env.DB_NAME);

// start the app
http.listen(process.env.PORT);
