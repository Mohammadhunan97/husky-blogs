/* this file is for local user routes
	 all files in here go underneath yourorigin/localuser/<route>
*/



const Router 	   = require('express').Router(),
	User		   = require('../model/user.model'),
	bcrypt 		   = require('bcryptjs'),
	salt 	 	   = bcrypt.genSaltSync(10);



Router.post('/login',(req,res)=>{
	User.find({username: req.body.username},(err,user)=>{
		if(user.length === 0 || bcrypt.compareSync(req.body.password, user[0].password) !== true){
			// if there's no user returned or if the password does not match
			res.redirect("/");
		}else{
			req.session.localUser = user[0];
			res.redirect("/user/one/"+user[0]._id);
		}
	})
})

Router.post('/new',(req,res) => {
	let errors = [];
	if((req.body.password === req.body.password2) && (req.body.password) && (req.body.email)){
		let newuser 		= new User;
		newuser.lastupdated = Date.now();
		newuser.email 		= req.body.email;
		newuser.username 	= req.body.username;
		newuser.password 	= bcrypt.hashSync(req.body.password,salt); 
		newuser.googleid 	= null;
		newuser.facebookid  = null;

		newuser.save((err, user) => {
			if(err){
				if(err.code === 11000){
					// errors.push('username must be unique '+ req.body.username + ' is already used')
					console.log('\n')
					console.log('\n')
					console.log(err.toJSON())
					console.log('\n')
					console.log('\n')
					console.log(err.toString())

					if(err.errmsg.includes('username')){
						errors.push('username must be unique '+ req.body.username + ' is already used')
					}
					if(err.errmsg.includes('email')){
						errors.push('email must be unique '+ req.body.email + ' is already used')
					}

				}
				res.render('homepage',{errors,})
			}else{
				req.session.localUser = user;
				res.redirect("/user/one/"+user._id);
			}		
		})
	}else{
		console.log('req.body.password === req.body.password2','\t',req.body.password === req.body.password2);
		console.log('req.body.password','\t',req.body.password);
		console.log('req.body.email','\t',req.body.email);

		if(!req.body.username) errors.push('username required');
		if(!req.body.password) errors.push('password required');
		if(!req.body.email) errors.push('email required');
		if(req.body.password !== req.body.password2) errors.push('passwords must be the same');
		res.render('homepage',{errors,}); // redirect with some message of incorrect login
	}
	
})


Router.put('/update/:id',(req,res) => {
	if(req.session.localUser && req.session.localUser._id === req.params.id) {
		User.findById(req.params.id,(err,user) => {
			if(!err) {
				newuser.lastupdated = Date.now();
				user.username = req.body.username || user.username;
				user.password = bcrypt.hashSync(req.body.password,salt) || user.password;

				user.save((err,user)=> {
					if(err){ 
						res.send(err);
						if(err.code === 11000){
							res.redirect('/')
						}
					}else{
						req.session.localUser = user;
						res.redirect("/user/"+user._id);
					}	
				})
			}
		})
	}
})

Router.delete('/delete/:id',(req,res) => {
	if(req.session.localUser && req.session.localUser._id === req.params.id) {
		User.findByIdAndRemove(req.params.id,(err,user) => {
			if(err) res.send(err);
			res.send(user);
		})
	}
})

module.exports = Router;