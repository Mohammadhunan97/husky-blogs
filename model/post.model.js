const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

let PostSchema = new Schema({
	timecreated: {
		type: Date,
		required: true,
		default: Date.now()
	},
	lastupdated: {
		type: Date,
		required: true
	},
	title: {
		type: String,
		required: false,
		unique: false
	},
	description: {
		type: String,
		required: false,
		unique: false
	},
	image: {
		type: String,
		required: false,
		unique: false
	},
	original_poster: {  //used to later show a link to the users page <a href="/follow/{id}">follow username</a>
		id: {
			type: String,
			required: true
		},
		username: {
			type: String,
			required: true
		}
	},
	tags: {
		type: [String],
		required: true
	}
})

module.exports = PostSchema;

// module.exports = mongoose.model('Post',PostSchema);

