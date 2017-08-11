const mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

const { Schema } = mongoose;

const userSchema = mongoose.Schema({
	isAdmin: { type: Boolean, default: false },
	local: {
		email: String,
		password: String
	},
	facebook: {
		id: String,
		token: String,
		email: String,
		name: String
	},
	google: {
		id: String,
		token: String,
		email: String,
		name: String
	}
});

// generating a hash
userSchema.methods.generateHash = password => {
	console.log('generating hash');
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = (password, user) => {
	return bcrypt.compareSync(password, user.local.password);
};

mongoose.model('users', userSchema);
