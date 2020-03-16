const mongoos = require(`mongoose`);
const { Schema } = require(`mongoose`);
// perform pre-save validation for unique fields
const uniqueValidator = require('mongoose-unique-validator');

const user = new Schema({
	firstname: {
		type: String,
		require: true
	},
	middlename: {
		type: String
	},
	lastname: {
		type: String,
		require: true
	},
	email: {
		type: String,
		require: true,
		unique: true
	},
	mobile: {
		type: Number,
		minlength: 10,
		maxlength: 10,
		unique: true,
		require: true
	},
	address: {
		type: String,
		maxlength: 100
	},
	city: {
		type: String,
		maxlength: 25
	},
	state: {
		type: String,
		maxlength: 50
	},
	postalcode: {
		type: Number,
		maxlength: 6, minlength: 6
	},
	education: {
		type: String
	},
	gender: {
		type: String,
		default: 'Not selected'
	},
	occupation: {
		type: String,
		default: 'other'
	}
});
user.plugin(uniqueValidator);
module.exports = mongoos.model('user', user)
