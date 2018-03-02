"use strict"

const 	mongoose 	= require('mongoose'),
		bcrypt 		= require('bcrypt');

// create address schema
var addressSchema = new mongoose.Schema({
	created		: {
		at	: Date
	},
	address		: String,
	city		: String,
	zip			: Number,
	country		: String, // country code
	status		: {
		type: Number,
		enum: [0, 1] // 0: disabled, 1: able
	}
});

// create user schema
var userSchema = new mongoose.Schema({
	email		: {
		type: String,
		required: true,
		index: true,
		unique: true,
		validate: {
			validator: value => {
				return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
			},
			message: 'invalidEmail'
		}
	},
	password	: String,
	phone		: String,

	// auths : [
	// 	'{name}-{id}',
	// 	//examples
	// 	'fb-124525215245',
	// 	'gmail-s4e5fs4ze55sdf5'
	// ],
	
	firstName	: {
		type: String,
		required: true
	},
	lastName	: {
		type: String,
		required: true
	},

	gender	: {
		type: String,
		enum: ['male', 'female'] // male/female
	},

	birthDay: Date,

	picture : {
		at	: Date, // date created of curret picture
	},

	// evaluation
	// score	: Number, // a store can put a score to user
	status	: {
		type: Number,
		enum: [0, 1, 2, 3, 4], // 0 : inactif, 1: actif, 2: approuved (email or phone confirmed), 3: blocked, 4: deleted
		default: 1
	},

	// livraison
	addresses: [addressSchema],

	createdAt: {
		type: Date,
		default: Date.now
	},

	grade: {
		type: Number,
		enum: [0, 1], // 0: user, 1: admin
		default: 0
	},
	store: mongoose.Schema.Types.ObjectId

	//language: String // language code
});

userSchema.pre('save', function(next){
	if(!this.isModified('password'))
		return next();

	// hash the password
	bcrypt.hash(this.password, parseInt(process.env.BCRYPT_SALTROUNDS)).then(hash => {

		this.password = hash;

		// go to next
		next();
	}).catch(err => next(err));
});

// export the model
module.exports = mongoose.model('User', userSchema);
