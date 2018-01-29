/*
 * load all packages we will nedd in the app
 */
var express = require('express'),
	app = express(),
	mongodb = require('./config/mongodb.js'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser')
	session = require('express-session'),
	http = require('http');
	socket = require('socket.io')(http.createServer(app));

// set and use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// require the app configuration
require('./config/config.js')(app, express);

app.use(cookieParser());
app.use(session({
	secret: "my secret",
	resave: false,
	saveUninitialized: false
}));

// require and use router
app.use(require('./routes/router.js'));

socket.on('connection', s => {
	io.emit('news', {msg: 'test'});
});

// connect to database, if everythings is ok start the app
mongodb.connect.then(() => {
		// start the app
		app.listen(process.env.port);
		console.log('App started succefuly');
	})
	.catch((e) => {
		console.log('Error happned', e);
	});