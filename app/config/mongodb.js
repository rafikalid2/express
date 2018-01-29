var mongoClient = require('mongodb').MongoClient;

// export connect to database function
module.exports.connect = mongoClient.connect(process.env.db_host)
	.then((client) => {
		// export db function
		module.exports.db = client.db(process.env.db_name);
	});