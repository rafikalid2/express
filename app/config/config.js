module.exports = (app, express) => {

	// set ejs use express-ejs-extend
	app.engine('ejs', require('express-ejs-extend'));

	// set views directory as views/pages
	app.set('views', './views/pages');

	// set the view engine to ejs
	app.set('view engine', 'ejs');

	// set static directory to public
	// this directory containe all static file
	app.use(express.static('./public'));
}