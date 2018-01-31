// comments
{
	_id			: 'ObjectId',
	productId	: 'ObjectId',
	replyTo		: 'ObjectId', // parent comment
	status		: 'int', // -1: deleted, 0: disable, 1: enable
	created		: {
		by	: 'ObjectId',
		at	: 'Date'
	},
	html		: 'String',
}