"use strict"

const 	mongoose 	= require('mongoose'),
		Schema 		= mongoose.Schema;

// Product schema
var productSchema = new Schema({

	title	: String,
	// indexed
	store	: {
		type: Schema.Types.ObjectId,
		ref: 'Store',
		index: true
	},
	status	: {
		type: Number,
		enum: [0, 1, 2, 3], // 0 passif, 1: actif, 2: archived, 3: deleted
		index: true,
		default: 1
	}, 
	category: {
		type: Schema.Types.ObjectId,
		ref: 'Categorie'
	},

	// dates
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

	// price
	price	: Number,
	// sales
	sale	:{
		percentage	: Number,
		begin		: Date,
		end			: Date
	},
	// details
	quatity	: {
		available	: Number,
		sold		: Number
	},

	description: String,

	// options: [
	// 	{
	// 		title: String,
	// 		type : String, // image-checkbox, img-radio, text-checkbox, text-radio, color
	// 		values: [
	// 			{
	// 				title: String,
	// 				image: String,
	// 				price: Number //currency is same as the product.
	// 			}
	// 		]
	// 	}
	// ],
	// shipping
	// pour le moment, le mec va ecrir le shipping pour chque unité
	// shipping : [
	// 	{
	// 		method: '', // 
	// 	}
	// ],

	// evaluation
	score : Number, // 0 to 100%
});


// export the model
module.exports = mongoose.model('Product', productSchema);
