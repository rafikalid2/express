// category
{
	_id		: 'ObjectId',
	code	: 'String', // code only, to enable i18n, and icon (css class)
	created	: {
		by		: 'ObjectId', // user who created this category
		at		: 'Date'
	},
	parent		: 'ObjectId', // parent category
	status		: 'int', // 0: new, 1: approuved, -1: disabled, -2: deleted
}