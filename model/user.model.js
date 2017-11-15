const mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	Post = required('./post.model');

let UserSchema = new Schema({
	facebookid: {
		type: String,
		required: false, // only required for facebook users
		unique: true,
		default: null
	},
	googleid: {
		type: String,
		required: false, // only required for google users
		unique: true,
		default: null
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: false, //only required for local users
		unique: false,
		default: null
	},
	profile_pic: {
		type: String, 
		required: false,
		unique: false,
		default: '/profilepic.png' 
	},
	following: {
		type: [Number], 
		required: false,
		unique: false
	},
	followers: {
		type: [Number],
		required: false,
		unique: false
	},
	posts: [Posts]
})

module.exports = mongoose.model('User',UserSchema);