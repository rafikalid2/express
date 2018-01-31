// store
{
	_id		: 'ObjectId',
	status	: 'int', // 0: new, 1: approuved, 2: disabled-by-owner, 3: removed-by-owner, -1: disabled-by-admin, -2: removed-by-admin

	title	: 'String',
	uri		: 'String', // https://***.com/stores/{storeURI}
	created	: {
		by	: 'ObjectId', //#ref to user
		at	: 'Date'
	},
	addresses: [
		{
			created		: {
				by		: 'ObjectId',
				at		: 'Date'
			},

			address		: 'String',
			city		: 'String',
			zip			: 'int',
			country		: 'String', // country code
			status		: 'int', // 1: able, 0: disabled
		}
	],

	tags		: ['String'],
	categories	: ['ObjectId'],

	// evaluation
	score	: 'int', // from 0 to 100%, inhired from scores of its products
}

// extrat
// logo
// 		https://****.com/pictures/stores/{store-id}/logo
// 		https://****.com/pictures/stores/{store-id}/cover
// 
// future modification
// costomize the store page.