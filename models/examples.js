


model = {
	[Validator.extensible]	: true,

	attr1	:  {
		[validator.required] : true,
		[validator.pattern]	: /a-z/,

		attr11	: {},
		attr12	: {}
	}
}



person = {
	[validator.extensible]	: true,

	fullName	: {
		[validator.required] : true,
		[validator.type]	 : 'string',
	}
	name			:'string'
	lastName		: /a-z/

	address : {
		city : 
		zip	: 
	}
}














person = {
	name	: {
		required	: true,
		type		: 'string',
	}

	email : {
		type: 'email',
		pattern: /^dev\./
	}

	address : {
		city: 'marrakech',
		zip	: 40000
	}
}

a, b, c, ...



validate(obj, schema).then(() => {}).catch(err => {qsdfsdf})