'use strict';

module.exports.configure = options => {

	// dfaults
	var defaultCurrency = options.defaultCurrency || 'usd',
		currency;

	// has no currencies list
	if(!options.currencyList)
		throw new Error('No currency list found');

	// export currency handler
	module.exports.init = (req, res, next) => {

		// check if req params has currency
		if(req.query.currency && options.currencyList.hasOwnProperty(req.query.currency)){
			currency = req.query.currency;
			req.session.currency = currency;
		}
		else if(req.session.currency)
			currency = req.session.currency;
		else
			currency = defaultCurrency;

		// pass the currency to req
		req.currency = currency;
		req.currencySymbol = options.currencyList[currency];

		res.locals.currency = currency;
		res.locals.currencySymbol = options.currencyList[currency];

		next();
	}


}