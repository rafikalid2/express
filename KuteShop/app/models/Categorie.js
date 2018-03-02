"use strict"

const 	mongoose 	= require('mongoose'),
		Schema 		= mongoose.Schema;


var categorySchema = new Schema({
	title: String,
	code: String, // code only, to enable i18n, and icon (css class)
	status: Number, // 0: new, 1: approuved, -1: disabled, -2: deleted
});


// export the model
module.exports = mongoose.model('Categorie', categorySchema);