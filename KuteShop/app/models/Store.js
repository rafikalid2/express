"use strict"

const 	mongoose 	= require('mongoose'),
		Schema 		= mongoose.Schema;

var storeSchema = new Schema({
	status	: {
		type: Number,
		default: 1 // 0: new, 1: approuved, 2: disabled-by-owner, 3: removed-by-owner, -1: disabled-by-admin, -2: removed-by-admin
	},

	storeName: String,
	uri		: String, // https://***.com/stores/{storeURI}
	created	: {
		by	: {
			type: Schema.Types.ObjectId,
			ref: 'User' // ref to user
		},
		at	: {
			type: Date,
			default: Date.now
		}
	},
	address:{
		address		: String,
		city		: String,
		zip			: Number,
		country		: String, // country code
	},

	categories	: Array,

	// evaluation
	score	: Number, // from 0 to 100%, inhired from scores of its products
});

// export the model
module.exports = mongoose.model('Store', storeSchema);