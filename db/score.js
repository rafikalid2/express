// score
{
	_id			: 'ObjectId',
	//multipe index
		collection	: 'String', //user, product, shipping
		docId		: 'ObjectId',
	created	: {
		by	: 'ObjectId',
		at	: 'Date'
	},
	score	: 'int', // from 0 to 100%

	shipping: 'int' // from 0 to 100%, when product
}
