var mongoose = require('mongoose');

var packageSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	price: Number,
	category: String
});

mongoose.model('Package', packageSchema);
