/**
 * This service handle all store requierements
 */

const	cote	= require('cote'),
		mongoose= require('mongoose'),
		Store 	= require('../app/models/Store.js'),
		User 	= require('../app/models/User.js'),
		Product = require('../app/models/Product.js');


// connect to database
mongoose.connect(process.env.DB_HOST + process.env.DB_NAME);



// create cote responder
var responder = new cote.Responder({
	name: 'Store service responder',
	namespace: 'services/store'
});


/**
 * This responder serve to create a new store
 */
responder.on('createStore', req => {
	// store info
	var query = req.query;

	// create store object
	var store = new Store({
		storeName: query.store.storeName,
		created: {
			by: query.userId
		},
		address: {
			address		: query.store.address1 + " " + query.store.address2,
			city		: query.store.city,
			zip			: query.store.postCode,
			country		: query.store.country // country code
		},
		categories	: query.store.categories
	});

	// save store
	return store.save()
				.then(() => {
					// relate the user to this store
					User.update({_id: query.userId}, {$set: {store: store._id}}, err => {
						if(err)
							throw err;
					});
					
					// return store id
					return store._id;
				});
	
});

/**
 * This responder create a product and save it to database
 * this method return a promise
 */
responder.on('addProduct', req => {
	var query = req.query;

	var product = new Product({
		title: query.title,
		store	: req.storeId, 
		category: query.category,

		// dates
		created	: {
			by	: req.userId
		},

		// price
		price	: query.price,
		// sales
		// sale	: {
		// 	percentage	: query.sale.percentage,
		// 	begin		: query.sale.begin,
		// 	end			: query.sale.end
		// },
		// details
		quatity	: {
			available	: query.qty
		},
		
		description: query.description
	});

	return product.save();
});