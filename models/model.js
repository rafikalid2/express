/**
 * validation
 * database schema
 * required default to false
 */
var validator = require('validator');


model = {
	[validator.extensible]	: true| false;
	attributeName : {
		required	: 'true|flase',
		type		: 'type of the field'
		// string, function, email
		// 
		patten		: /hello?/i, // implique string

		assert	: (value => true|false|Promise) // fx used to validate this field

		content		: {
			attr	: {
				required : false;
			}
		}
	}


	attribute	: 'number',

	attribute	: /^[a-z]*$/,

	attribute : (value => true|false)

};