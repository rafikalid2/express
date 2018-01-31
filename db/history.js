// product history
// when any user change someting in product, we store mdofications here
{
	_id			: 'ObjectId',
	collection	: 'String',
	docId		: 'ObjectId'
	modified	: {
		by	: 'ObjectId',
		at	: 'Date'
	},
	fields 		: {
		key: value
	}
}