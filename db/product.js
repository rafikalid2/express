// product
{
	// identifiers
	_id		: 'ObjectId',
	title	: 'String',
	// indexed
		store	: 'ObjctId',
		status	: 'int', // 0 passif, 1: actif, 2: archived, 3: deleted
	category: 'ObjectId', // ref to category
	// dates
	created	: {
		by	: 'ObjectId', // ref to user
		at	: 'Date'
	},
	modified	: {
		by	: 'ObjectId',
		at	: 'Date'
	},
	// price
	price	: {
		value	: 'float',
		currency: 'String' // currency symbol
	},
	// sales
	sale	: [
		{
			percentage	: 'float',
			begin		: 'date',
			end			: 'date'
		}
	],
	// details
	quatity	: {
		available	: 'int',
		sold		: 'int'
	},

	options: [
		{
			title: 'String',
			type : 'String', // image-checkbox, img-radio, text-checkbox, text-radio
			values: [
				{
					title: 'String',
					image: 'optional-id',
					price: 'float' //currency is same as the product.
					quantity:{ // optional
						available	: 'int',
						sold		: 'int'
					}
				}
			]
		}
	],
	// shipping
	// pour le moment, le mec va ecrir le shipping pour chque unité
	shipping : [
		{
			method: '', // 
		}
	],

	// evaluation
	score : 'int', // 0 to 100%

}

// amelioration: ajouter possibilité des réductions apres certain quantité achtée
// EVALUATION
// COMMENTAIRES
