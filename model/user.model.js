const mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	PostSchema = require('./post.model');
// console.log('baz',PostSchema)
let UserSchema = new Schema({
	timecreated: {
		type: Date,
		required: true,
		default: Date.now()
	},
	lastupdated: {
		type: Date,
		required: true
	},
	facebookid: {
		type: String,
		required: false, // only required for facebook users
		default: null
	},
	googleid: {
		type: String,
		required: false, // only required for google users
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
 	posts: [PostSchema],
})

module.exports = mongoose.model('User',UserSchema);