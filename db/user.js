// user
{
	_id			: 'ObjectId',
	email		: 'String',
	password	: 'String',
	phone		: 'String',
	// voir indexation dans mango
		// auths		: [ // auth2 via other websites (gmail, fb, ...)
		// 	{
		// 		name	: 'String', //fb, gmail, ...
		// 		id		: 'string'
		// 	}
		// ],
	auths : [
		'{name}-{id}',
		//examples
		'fb-124525215245',
		'gmail-s4e5fs4ze55sdf5'
	],
	
	firstName	: 'String',
	lastName	: 'String',
	fullName	: 'String',

	gender	: 'String', // male/female

	birthDay: 'Date',

	picture : {
		at	: 'Date', // date created of curret picture
	},

	// evaluation
	score	: 'int', // a store can put a score to user
	status	: 'int', // 0 : inactif, 1: actif, 2: approuved (email or phone confirmed), 3: blocked, 4: deleted

	// livraison
	addresses: [
		{
			created		: {
				at	: 'Date'
			},
			address		: 'String',
			city		: 'String',
			zip			: 'int',
			country		: 'String', // country code
			status		: 'int', // 1: able, 0: disabled
		}
	],

	language: 'String' // language code
}

// extra
// profile-picture
// penser au avertissement

