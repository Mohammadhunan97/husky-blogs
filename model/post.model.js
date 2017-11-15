const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

let PostSchema = new Schema({
	description: {
		type: String,
		required: false,
		unique: false
	},
	image: {
		type: String,
		required: false,
		unique: false
	}
})


module.exports = mongoose.model('Post',PostSchema);